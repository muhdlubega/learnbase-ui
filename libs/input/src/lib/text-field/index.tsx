import React, { ChangeEvent, ComponentProps, useRef, useState } from 'react';
import { ColorVariants, SizeVariants } from '@learnbase-ui/global';
import { textFieldStyles } from './text-field.class';
import { twMerge } from 'tailwind-merge';

export type TextFieldSizeProps = Exclude<
  SizeVariants,
  '2xl' | '3xl' | '4xl' | '5xl'
>;

export type WidthProps = Exclude<
  SizeVariants,
  'xs' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
>;

export interface TextFieldProps extends ComponentProps<'input'> {
  borderWidth?: TextFieldSizeProps;
  color?: ColorVariants;
  defaultValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  isInvalid?: boolean;
  label?: string;
  labelPosition?: 'top' | 'bottom';
  onIconClick?: () => void;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  textSize?: TextFieldSizeProps;
  width?: WidthProps;
}

export const TextField: React.FC<TextFieldProps> = ({
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
        textFieldStyles({
          color,
          rounded,
          iconPosition,
          fullWidth,
          borderWidth,
          width,
        }),
        icon ? 'justify-between' : 'justify-center',
        className,
        `inline-flex center min-w-[60px] cursor-pointer ${
          disabled ? 'bg-gray-50 border-gray-300' : `border-${color}`
        }`
      )}
    >
      <input
        className={twMerge(
          textFieldStyles({
            color,
            textSize,
            rounded,
            iconPosition,
            fullWidth,
          }),
          `border-none focus-visible:outline-none ${
            disabled
              ? 'bg-gray-50 text-gray-300 placeholder:text-gray-300'
              : `border-${color}`
          }`
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
          className={`absolute block max-w-[200px] overflow-hidden whitespace-nowrap overflow-ellipsis ${
            labelPosition === 'top'
              ? 'translate-y-[-23px]'
              : 'translate-y-[23px]'
          } ${
            disabled
              ? 'text-gray-300 bg-gradient-to-t from-gray-50 to-transparent'
              : 'bg-white'
          } p-0.5 text-xs`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      {icon && (
        <div
          className={twMerge(disabled ? 'text-gray-300' : '')}
          onClick={onIconClick ?? handleIconClick}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

TextField.displayName = 'TextField';

export default TextField;
