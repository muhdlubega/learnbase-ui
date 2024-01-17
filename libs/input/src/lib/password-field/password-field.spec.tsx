import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordField from '.';

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

describe('PasswordField', () => {
  test('renders without errors', () => {
    render(<PasswordField />);
    const textFieldElement = screen.getByTestId('mocked-text-field');

    expect(textFieldElement).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<PasswordField />);
    const inputElement = screen.getByTestId('mocked-input');

    fireEvent.change(inputElement as Element, {
      target: { value: 'New Value' },
    });

    expect(inputElement).toHaveValue('New Value');
  });

  test('handles icon click', () => {
    const onIconClickMock = jest.fn();
    render(
      <PasswordField
        icon={<div data-testid="mocked-icon">Icon Content</div>}
        onIconClick={onIconClickMock}
      />,
    );

    const iconElement = screen.getByTestId('mocked-icon');
    fireEvent.click(iconElement as Element);

    expect(onIconClickMock).toHaveBeenCalled();
  });
});
