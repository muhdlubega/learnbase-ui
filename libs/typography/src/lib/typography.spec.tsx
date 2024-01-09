import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography from './Typography';

describe('Typography Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Typography>Hello, World!</Typography>);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies custom class correctly', () => {
    const { container } = render(
      <Typography className="custom-class">Custom Class Test</Typography>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies color variant correctly', () => {
    const { container } = render(
      <Typography color="secondary">Color Test</Typography>
    );
    expect(container.firstChild).toHaveClass('text-secondary');
  });

  it('applies default color variant if not provided', () => {
    const { container } = render(<Typography>Default Color Test</Typography>);
    expect(container.firstChild).toHaveClass('text-primary');
  });

  it('applies default size variant if not provided', () => {
    const { container } = render(<Typography>Default Size Test</Typography>);
    expect(container.firstChild).toHaveClass('text-md');
  });
});
