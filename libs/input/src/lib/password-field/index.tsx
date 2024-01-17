import React, { ChangeEvent, ComponentProps, useRef, useState } from 'react';
import {
  AlignmentVariants,
  ColorVariants,
  RoundedVariants,
  SizeVariants,
  VerticalAlignmentVariants,
} from '@learnbase-ui/global/types';
import { labelStyles, passwordFieldStyles } from './password-field.class';
import { twMerge } from 'tailwind-merge';

export type PasswordFieldSizeProps = Exclude<
  SizeVariants,
  '2xl' | '3xl' | '4xl' | '5xl'
>;

export interface PasswordFieldProps extends ComponentProps<'input'> {
  borderWidth?: PasswordFieldSizeProps;
  color?: ColorVariants;
  defaultValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: Extract<AlignmentVariants, 'start' | 'end'>;
  isInvalid?: boolean;
  label?: string;
  labelPosition?: Extract<VerticalAlignmentVariants, 'top' | 'bottom'>;
  onIconClick?: () => void;
  rounded?: RoundedVariants;
  textSize?: PasswordFieldSizeProps;
  width?: Extract<SizeVariants, 'sm' | 'md' | 'lg'>;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  borderWidth,
  className,
  color = 'primary',
  defaultValue = '',
  disabled,
  fullWidth,
  icon,
  iconPosition,
  isInvalid,
  label,
  labelPosition = 'top',
  maxLength,
  name = 'TextField',
  onChange,
  onIconClick,
  placeholder,
  rounded,
  textSize,
  width,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(e);
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={twMerge(
        passwordFieldStyles({
          color,
          rounded,
          iconPosition,
          fullWidth,
          borderWidth,
          width,
        }),
        icon ? 'justify-between' : 'justify-center',
        className,
        `inline-flex center min-w-[60px] ${
          disabled ? 'bg-gray-50 border-gray-300' : `border-${color}`
        }`,
      )}
    >
      <input
        className={twMerge(
          passwordFieldStyles({
            color,
            textSize,
            rounded,
            iconPosition,
          }),
          `border-none focus-visible:outline-none w-full ${
            disabled
              ? 'bg-gray-50 text-gray-300 placeholder:text-gray-300'
              : `border-${color}`
          }`,
        )}
        disabled={disabled}
        id={name}
        maxLength={maxLength}
        onChange={handleChange}
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        value={value}
        {...rest}
      />
      {label && (
        <label
          className={twMerge(
            labelStyles({
              disabled,
              labelPosition,
            }),
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      {icon && (
        <div
          className={disabled ? 'text-gray-300' : ''}
          onClick={onIconClick ?? handleIconClick}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

PasswordField.displayName = 'PasswordField';

export default PasswordField;
