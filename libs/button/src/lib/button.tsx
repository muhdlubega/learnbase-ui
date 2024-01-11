import React from 'react';
import { ColorVariants, SizeVariants } from '@learnbase-ui/global/types';
import { color as Colors } from '@learnbase-ui/global/constant';
import { twMerge } from 'tailwind-merge';
import '../styles.scss';
import { cva } from 'cva';

export type ButtonSizeProps = Exclude<
  SizeVariants,
  '2xl' | '3xl' | '4xl' | '5xl'
>;
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label?: string;
  size?: ButtonSizeProps;
  variant?: 'outlined' | 'contained';
  color?: ColorVariants;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  iconPosition?: 'start' | 'end';
  fullWidth?: boolean;
}

const buttonStyles = cva('flex items-center transition-all border', {
  variants: {
    variant: {
      outlined: ' ',
      contained: '',
    },
    color: Colors,
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
    ...(Object.keys(Colors).map((colorVariant) => ({
      variant: 'contained',
      color: colorVariant,
      class: `text-white bg-${colorVariant} hover:text-${colorVariant} border-${colorVariant} hover:bg-transparent`,
    })) as any),
    ...(Object.keys(Colors).map((colorVariant) => ({
      variant: 'outlined',
      color: colorVariant,
      class: `hover:bg-${colorVariant} border-${colorVariant}`,
    })) as any),
    {
      variant: 'outlined',
      color: Object.keys(Colors),
      class: 'bg-transparent hover:text-white',
    },
  ],

  defaultVariants: {
    variant: 'outlined',
    color: 'primary',
    size: 'md',
    rounded: 'md',
    iconPosition: 'end',
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
