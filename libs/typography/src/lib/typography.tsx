import React from 'react';
import {
  AlignmentVariants,
  ColorVariants,
  FontStyleVariants,
  ListStyleVariants,
  NumericVariants,
  OverflowVariants,
  SizeVariants,
  SpacingVariants,
  TextDecorationVariants,
  TextTransformVariants,
  VerticalAlignmentVariants,
  WeightVariants,
} from '@learnbase-ui/global-types';
import { typographyStyles } from './typography.class';
import { twMerge } from 'tailwind-merge';
import '../styles.scss';

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: ColorVariants;
  fontStyle?: FontStyleVariants;
  fontWeight?: WeightVariants;
  size?: SizeVariants;
  textOverflow?: OverflowVariants;
  textTransform?: TextTransformVariants;
  verticalAlign?: VerticalAlignmentVariants;
  textDecoration?: TextDecorationVariants;
  textAlign?: AlignmentVariants;
  letterSpacing?: SpacingVariants;
  listStyleType?: ListStyleVariants;
  fontVariantNumeric?: NumericVariants;
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
