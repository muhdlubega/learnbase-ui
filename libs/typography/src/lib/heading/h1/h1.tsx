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
import { textStyles } from '../../text/text.class';
import { twMerge } from 'tailwind-merge';

export interface H1Props extends React.ComponentProps<'h1'> {
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

export const H1: React.FC<H1Props> = ({
  children,
  className,
  color,
  fontStyle,
  fontWeight = 'bold',
  size = '5xl',
  textOverflow,
  textTransform,
  verticalAlign,
  textDecoration,
  textAlign,
  letterSpacing = 'tight',
  listStyleType,
  fontVariantNumeric,
  ...rest
}) => {
  return (
    <h1
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
    </h1>
  );
};

export default H1;
