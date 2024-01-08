import React from 'react';
import { ColorVariants, SizeVariants } from '@learnbase-ui/global-types';
import { twMerge } from 'tailwind-merge';
import '../styles.scss';
import { cva } from 'cva';

export type TypographySizeProps = Exclude<SizeVariants, '2xl' | '3xl'>;
export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ColorVariants;
  fontStyle?: 'normal' | 'italic' | undefined;
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | undefined;
  fullWidth?: boolean;
  size?: TypographySizeProps;
  textOverflow?: 'truncate' | 'ellipsis' | 'clip' | undefined;
  textTransform?:
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'normal'
  | undefined;
}

const typographyStyles = cva('text-black', {
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      error: 'text-error',
      success: 'text-success',
      warning: 'text-warning',
      darkSlate: 'text-darkSlate',
      lightSlate: 'text-lightSlate',
      darkGray: 'text-darkGray',
      lightGray: 'text-lightGray',
      darkZinc: 'text-darkZinc',
      lightZinc: 'text-lightZinc',
      darkNeutral: 'text-darkNeutral',
      lightNeutral: 'text-lightNeutral',
      darkStone: 'text-darkStone',
      lightStone: 'text-lightStone',
      darkRed: 'text-darkRed',
      lightRed: 'text-lightRed',
      darkOrange: 'text-darkOrange',
      lightOrange: 'text-lightOrange',
      darkAmber: 'text-darkAmber',
      lightAmber: 'text-lightAmber',
      darkYellow: 'text-darkYellow',
      lightYellow: 'text-lightYellow',
      darkLime: 'text-darkLime',
      lightLime: 'text-lightLime',
      darkGreen: 'text-darkGreen',
      lightGreen: 'text-lightGreen',
      darkEmerald: 'text-darkEmerald',
      lightEmerald: 'text-lightEmerald',
      darkTeal: 'text-darkTeal',
      lightTeal: 'text-lightTeal',
      darkCyan: 'text-darkCyan',
      lightCyan: 'text-lightCyan',
      darkSky: 'text-darkSky',
      lightSky: 'text-lightSky',
      darkBlue: 'text-darkBlue',
      lightBlue: 'text-lightBlue',
      darkIndigo: 'text-darkIndigo',
      lightIndigo: 'text-lightIndigo',
      darkViolet: 'text-darkViolet',
      lightViolet: 'text-lightViolet',
      darkPurple: 'text-darkPurple',
      lightPurple: 'text-lightPurple',
      darkFuchsia: 'text-darkFuchsia',
      lightFuchsia: 'text-lightFuchsia',
      darkPink: 'text-darkPink',
      lightPink: 'text-lightPink',
      darkRose: 'text-darkRose',
      lightRose: 'text-lightRose',
    },
    fontStyle: {
      normal: 'font-normal',
      italic: 'italic',
    },
    fontWeight: {
      normal: 'font-normal',
      bold: 'font-bold',
      bolder: 'font-extrabold',
      lighter: 'font-extralight',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    size: {
      xs: 'text-xs leading-body-xs',
      sm: 'text-sm leading-body-sm',
      md: 'text-md leading-body-md',
      lg: 'text-lg leading-body-lg',
      xl: 'text-xl leading-body-xl',
    },
    textOverflow: {
      clip: 'overflow-clip',
      ellipsis: 'overflow-ellipsis',
      truncate: 'overflow-hidden whitespace-nowrap',
    },
    textTransform: {
      capitalize: 'capitalize',
      lowercase: 'lowercase',
      normal: 'normal-case',
      uppercase: 'uppercase',
    },
  },
  defaultVariants: {
    color: 'primary',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fullWidth: false,
    size: 'md',
    textOverflow: 'clip',
    textTransform: 'normal',
  },
});

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  color,
  fontStyle,
  fontWeight,
  fullWidth,
  size,
  textOverflow,
  textTransform,
  ...rest
}) => {
  return (
    <p
      className={twMerge(
        typographyStyles({
          color,
          fontStyle,
          fontWeight,
          fullWidth,
          size,
          textOverflow,
          textTransform,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Typography;
