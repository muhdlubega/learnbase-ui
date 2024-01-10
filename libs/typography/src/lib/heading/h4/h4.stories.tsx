import type { Meta, StoryObj } from '@storybook/react';
import H4 from './h4';

const meta: Meta<typeof H4> = {
  component: H4,
  title: 'Typography/Heading/H4',
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: '`primary` | `secondary` | `error` | `success` | `warning` | `darkSlate` | `lightSlate` | `darkGray` | `lightGray` | `darkZinc` | `lightZinc` | `darkNeutral` | `lightNeutral` | `darkStone` | `lightStone` | `darkRed` | `lightRed` | `darkOrange` | `lightOrange` | `darkAmber` | `lightAmber` | `darkYellow` | `lightYellow` | `darkLime` | `lightLime` | `darkGreen` | `lightGreen` | `darkEmerald` | `lightEmerald` | `darkTeal` | `lightTeal` | `darkCyan` | `lightCyan` | `darkSky` | `lightSky` | `darkBlue` | `lightBlue` | `darkIndigo` | `lightIndigo` | `darkViolet` | `lightViolet` | `darkPurple` | `lightPurple` | `darkFuchsia` | `lightFuchsia` | `darkPink` | `lightPink` | `darkRose` | `lightRose`',
      options: [
        'primary', 'secondary', 'error', 'success', 'warning', 'darkSlate', 'lightSlate', 'darkGray', 'lightGray', 'darkZinc', 'lightZinc', 'darkNeutral', 'lightNeutral', 'darkStone', 'lightStone', 'darkRed', 'lightRed', 'darkOrange', 'lightOrange', 'darkAmber', 'lightAmber', 'darkYellow', 'lightYellow', 'darkLime', 'lightLime', 'darkGreen', 'lightGreen', 'darkEmerald', 'lightEmerald', 'darkTeal', 'lightTeal', 'darkCyan', 'lightCyan', 'darkSky', 'lightSky', 'darkBlue', 'lightBlue', 'darkIndigo', 'lightIndigo', 'darkViolet', 'lightViolet', 'darkPurple', 'lightPurple', 'darkFuchsia', 'lightFuchsia', 'darkPink', 'lightPink', 'darkRose', 'lightRose'
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    fontStyle: {
      description: '`normal` | `italic`',
      options: ['normal', 'italic'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    fontWeight: {
      description: '`thin` | `extraLight` | `light` | `normal` | `medium` | `semiBold` | `bold` | `extraBold` | `black`',
      options: [
        'thin', 'extraLight', 'light', 'normal', 'medium', 'semiBold', 'bold', 'extraBold', 'black'
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      description: '`xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl` | `5xl`',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    textOverflow: {
      description: '`truncate` | `ellipsis` | `clip`',
      options: ['truncate', 'ellipsis', 'clip'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'clip' },
      },
    },
    textTransform: {
      description: '`uppercase` | `lowercase` | `capitalize` | `normal`',
      options: ['uppercase', 'lowercase', 'capitalize', 'normal'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    verticalAlign: {
      description: '`baseline` | `top` | `bottom` | `middle` | `textTop` | `textBottom` | `sub` | `super`',
      options: [
        'baseline', 'top', 'bottom', 'middle', 'textTop', 'textBottom', 'sub', 'super'
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'baseline' },
      },
    },
    textDecoration: {
      description: '`none` | `underline` | `overline` | `lineThrough`',
      options: ['none', 'underline', 'overline', 'lineThrough'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    textAlign: {
      description: '`left` | `right` | `center` | `justify` | `start` | `end`',
      options: ['left', 'right', 'center', 'justify', 'start', 'end'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    letterSpacing: {
      description: '`tighter` | `tight` | `normal` | `wide` | `wider` | `widest`',
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    listStyleType: {
      description: '`none` | `disc` | `circle` | `square` | `decimal`',
      options: ['none', 'disc', 'circle', 'square', 'decimal'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    fontVariantNumeric: {
      description: '`normal` | `ordinal` | `slashedZero` | `lining` | `oldstyle` | `proportional` | `tabular` | `diagonalFractions` | `stackedFractions`',
      options: [
        'normal', 'ordinal', 'slashedZero', 'lining', 'oldstyle', 'proportional', 'tabular', 'diagonalFractions', 'stackedFractions'
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof H4>;

export const Default: Story = {
  args: {
    children: 'H4 Heading',
  },
};
