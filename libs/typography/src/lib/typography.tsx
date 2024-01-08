import React from 'react';
import { ColorVariants, SizeVariants } from '@learnbase-ui/global-types';
import { typographyStyles } from './typography.class';
import { twMerge } from 'tailwind-merge';
import '../styles.scss';

export type TypographySizeProps = Exclude<SizeVariants, '2xl' | '3xl'>;
export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: ColorVariants;
  fontStyle?: 'normal' | 'italic' | undefined;
  fontWeight?:
    | 'thin'
    | 'extraLight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'extraBold'
    | 'black'
    | undefined;
  size?: TypographySizeProps;
  textOverflow?: 'truncate' | 'ellipsis' | 'clip' | undefined;
  textTransform?:
    | 'uppercase'
    | 'lowercase'
    | 'capitalize'
    | 'normal'
    | undefined;
  verticalAlign?:
    | 'baseline'
    | 'top'
    | 'middle'
    | 'bottom'
    | 'textTop'
    | 'textBottom'
    | 'sub'
    | 'super'
    | undefined;
  textDecoration?:
    | 'none'
    | 'underline'
    | 'overline'
    | 'lineThrough'
    | 'noUnderline'
    | undefined;
  textAlign?:
    | 'left'
    | 'center'
    | 'right'
    | 'justify'
    | 'start'
    | 'end'
    | undefined;
  letterSpacing?:
    | 'tighter'
    | 'tight'
    | 'normal'
    | 'wide'
    | 'wider'
    | 'widest'
    | undefined;
  listStyleType?: 'none' | 'disc' | 'circle' | 'square' | 'decimal' | undefined;
  fontVariantNumeric?:
    | 'normal'
    | 'ordinal'
    | 'slashedZero'
    | 'lining'
    | 'oldstyle'
    | 'proportional'
    | 'tabular'
    | 'diagonalFractions'
    | 'stackedFractions'
    | undefined;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  color,
  fontStyle,
  fontWeight,
  size,
  textOverflow,
  textTransform,
  verticalAlign,
  textDecoration,
  textAlign,
  letterSpacing,
  listStyleType,
  fontVariantNumeric,
  ...rest
}) => {
  return (
    <p
      className={twMerge(
        typographyStyles({
          color,
          fontStyle,
          fontWeight,
          size,
          textOverflow,
          textTransform,
          verticalAlign,
          textDecoration,
          textAlign,
          letterSpacing,
          listStyleType,
          fontVariantNumeric,
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
