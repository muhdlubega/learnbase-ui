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

export interface H3Props extends React.ComponentProps<'h3'> {
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

export const H3: React.FC<H3Props> = ({
  children,
  className,
  color,
  fontStyle,
  fontWeight = 'bold',
  size = '3xl',
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
    <h3
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
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
};

H3.displayName = 'H3';

export default H3;
