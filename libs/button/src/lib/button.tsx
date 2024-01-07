import React from 'react';
import { SizeVariants } from '@learnbase-ui/global-types';
import { twMerge } from 'tailwind-merge';
import '../styles.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  size?: SizeVariants;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={twMerge('px-6 py-1', className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
