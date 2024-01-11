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
} from '@learnbase-ui/global/types';
import { textStyles } from './text.class';
import { twMerge } from 'tailwind-merge';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
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

export const Text: React.FC<TextProps> = ({
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
        textStyles({
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

export default Text;
