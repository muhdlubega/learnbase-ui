import React from 'react';
import { ColorVariants, SizeVariants } from '@learnbase-ui/global-types';
import { twMerge } from 'tailwind-merge';
import '../styles.scss';
import { cva } from 'cva';

export type TypographySizeProps = Exclude<SizeVariants, '2xl' | '3xl'>;
export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ColorVariants;
  fontStyle?: 'normal' | 'italic' | 'oblique' | undefined;
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
  textWrap?: 'normal' | 'nowrap' | 'pre' | 'preLine' | 'preWrap' | undefined;
}

const typographyStyles = cva('text-white', {
  variants: {
    color: {
      primary: 'text-black',
      secondary: 'text-gray-500',
      error: 'text-red-500',
      success: 'text-green-600',
      warning: 'text-amber-400',
      darkSlate: 'text-slate-800',
      lightSlate: 'text-slate-300',
      darkGray: 'text-gray-800',
      lightGray: 'text-gray-300',
      darkZinc: 'text-zinc-800',
      lightZinc: 'text-zinc-300',
      darkNeutral: 'text-neutral-800',
      lightNeutral: 'text-neutral-300',
      darkStone: 'text-stone-800',
      lightStone: 'text-stone-300',
      darkRed: 'text-red-800',
      lightRed: 'text-red-300',
      darkOrange: 'text-orange-800',
      lightOrange: 'text-orange-300',
      darkAmber: 'text-amber-800',
      lightAmber: 'text-amber-300',
      darkYellow: 'text-yellow-800',
      lightYellow: 'text-yellow-300',
      darkLime: 'text-lime-800',
      lightLime: 'text-lime-300',
      darkGreen: 'text-green-800',
      lightGreen: 'text-green-300',
      darkEmerald: 'text-emerald-800',
      lightEmerald: 'text-emerald-300',
      darkTeal: 'text-teal-800',
      lightTeal: 'text-teal-300',
      darkCyan: 'text-cyan-800',
      lightCyan: 'text-cyan-300',
      darkSky: 'text-sky-800',
      lightSky: 'text-sky-300',
      darkBlue: 'text-blue-800',
      lightBlue: 'text-blue-300',
      darkIndigo: 'text-indigo-800',
      lightIndigo: 'text-indigo-300',
      darkViolet: 'text-violet-800',
      lightViolet: 'text-violet-300',
      darkPurple: 'text-purple-800',
      lightPurple: 'text-purple-300',
      darkFuchsia: 'text-fuchsia-800',
      lightFuchsia: 'text-fuchsia-300',
      darkPink: 'text-pink-800',
      lightPink: 'text-pink-300',
      darkRose: 'text-rose-800',
      lightRose: 'text-rose-300',
    },
    fontStyle: {
      normal: 'font-normal',
      italic: 'italic',
      oblique: 'font-oblique',
    },
    fontWeight: {
      normal: 'font-normal',
      bold: 'font-bold',
      bolder: 'font-bolder',
      lighter: 'font-lighter',
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
    textWrap: {
      normal: 'whitespace-normal',
      nowrap: 'whitespace-nowrap',
      pre: 'whitespace-pre',
      preLine: 'whitespace-pre-line',
      preWrap: 'whitespace-pre-wrap',
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
    textWrap: 'normal',
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
  textWrap,
  ...rest
}) => {
  return (
    <div
      className={twMerge(
        typographyStyles({
          color,
          fontStyle,
          fontWeight,
          fullWidth,
          size,
          textOverflow,
          textTransform,
          textWrap,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Typography;
