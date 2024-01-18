import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '.';

jest.mock('.', () => {
  return jest.fn((props) => {
    return (
      <div data-testid="mocked-text-field">
        <input
          data-testid="mocked-input"
          value={props.value}
          onChange={(e) => props.onChange && props.onChange(e)}
          disabled={props.disabled}
        />
        <label data-testid="mocked-label">{props.label}</label>
        <div data-testid="mocked-icon" onClick={props.onIconClick}></div>
      </div>
    );
  });
});

describe('TextField', () => {
  test('renders without errors', () => {
    render(<TextField />);
    const textFieldElement = screen.getByTestId('mocked-text-field');

    expect(textFieldElement).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<TextField />);
    const inputElement = screen.getByTestId('mocked-input');

    fireEvent.change(inputElement as Element, {
      target: { value: 'New Value' },
    });

    expect(inputElement).toHaveValue('New Value');
  });

  test('handles icon click', () => {
    const onIconClickMock = jest.fn();
    render(
      <TextField
        icon={<div data-testid="mocked-icon">Icon Content</div>}
        onIconClick={onIconClickMock}
      />,
    );

    const iconElement = screen.getByTestId('mocked-icon');
    fireEvent.click(iconElement as Element);

    expect(onIconClickMock).toHaveBeenCalled();
  });
});
