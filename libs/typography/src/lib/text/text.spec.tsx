import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './text';

describe('Text Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Text>Hello, World!</Text>);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies custom class correctly', () => {
    const { container } = render(
      <Text className="custom-class">Custom Class Test</Text>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies color variant correctly', () => {
    const { container } = render(
      <Text color="secondary">Color Test</Text>
    );
    expect(container.firstChild).toHaveClass('text-secondary');
  });

  it('applies default color variant if not provided', () => {
    const { container } = render(<Text>Default Color Test</Text>);
    expect(container.firstChild).toHaveClass('text-primary');
  });

  it('applies default size variant if not provided', () => {
    const { container } = render(<Text>Default Size Test</Text>);
    expect(container.firstChild).toHaveClass('text-md');
  });
});
