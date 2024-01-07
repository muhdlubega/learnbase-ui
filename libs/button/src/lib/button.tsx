import React from 'react';
import { SizeVariants } from '@learnbase-ui/global-types';
import { twMerge } from 'tailwind-merge';
import '../styles.scss';
import { cva } from 'cva';

export type ButtonSizeProps = Exclude<SizeVariants, '2xl' | '3xl'>;
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label?: string;
  size?: ButtonSizeProps;
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'success';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  iconPosition?: 'start' | 'end';
  fullWidth?: boolean;
}

const buttonStyles = cva('text-white flex items-center', {
  variants: {
    variant: {
      outlined: 'border',
      contained: '',
    },
    color: {
      primary: 'bg-gray-500 text-gray-500 border-gray-500',
      secondary: 'bg-blue-500 text-blue-500 border-blue-500',
      error: 'bg-red-500 text-red-500 border-red-500',
      success: 'bg-green-600 text-green-600 border-green-600',
    },
    size: {
      xs: 'px-3 py-1 text-xs gap-1',
      sm: 'px-3 py-1 text-sm gap-1',
      md: 'px-4 py-1 text-md gap-1',
      lg: 'px-5 py-2 text-lg gap-2',
      xl: 'px-6 py-3 text-xl gap-2',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    iconPosition: {
      start: 'flex-row',
      end: 'flex-row-reverse',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'contained',
      color: ['primary', 'secondary', 'error', 'success'],
      class: 'text-white',
    },
    {
      variant: 'outlined',
      color: ['primary', 'secondary', 'error', 'success'],
      class: 'bg-transparent',
    },
  ],
  defaultVariants: {
    variant: 'outlined',
    color: 'primary',
    size: 'md',
    rounded: 'md',
    iconPosition: 'start',
    fullWidth: false,
  },
});

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  label,
  variant,
  color,
  size,
  rounded,
  iconPosition,
  fullWidth,
  icon,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        buttonStyles({
          variant,
          color,
          size,
          rounded,
          iconPosition,
          fullWidth,
        }),
        icon ? 'justify-between' : 'justify-center',
        className
      )}
      {...rest}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
