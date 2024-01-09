import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Text',
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'error',
        'success',
        'warning',
        'darkSlate',
        'lightSlate',
        'darkGray',
        'lightGray',
        'darkZinc',
        'lightZinc',
        'darkNeutral',
        'lightNeutral',
        'darkStone',
        'lightStone',
        'darkRed',
        'lightRed',
        'darkOrange',
        'lightOrange',
        'darkAmber',
        'lightAmber',
        'darkYellow',
        'lightYellow',
        'darkLime',
        'lightLime',
        'darkGreen',
        'lightGreen',
        'darkEmerald',
        'lightEmerald',
        'darkTeal',
        'lightTeal',
        'darkCyan',
        'lightCyan',
        'darkSky',
        'lightSky',
        'darkBlue',
        'lightBlue',
        'darkIndigo',
        'lightIndigo',
        'darkViolet',
        'lightViolet',
        'darkPurple',
        'lightPurple',
        'darkFuchsia',
        'lightFuchsia',
        'darkPink',
        'lightPink',
        'darkRose',
        'lightRose',
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    fontStyle: {
      options: ['normal', 'italic'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    fontWeight: {
      options: [
        'thin',
        'extraLight',
        'light',
        'normal',
        'medium',
        'semiBold',
        'bold',
        'extraBold',
        'black',
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      description: '`xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl` | `5xl` ',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    textOverflow: {
      options: ['truncate', 'ellipsis', 'clip'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'clip' },
      },
    },
    textTransform: {
      options: ['uppercase', 'lowercase', 'capitalize', 'normal'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    verticalAlign: {
      options: [
        'baseline',
        'top',
        'bottom',
        'middle',
        'textTop',
        'textBottom',
        'sub',
        'super',
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'baseline' },
      },
    },
    textDecoration: {
      options: ['none', 'underline', 'overline', 'lineThrough'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    textAlign: {
      options: ['left', 'right', 'center', 'justify', 'start', 'end'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    letterSpacing: {
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    listStyleType: {
      options: ['none', 'disc', 'circle', 'square', 'decimal'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    fontVariantNumeric: {
      options: [
        'normal',
        'ordinal',
        'slashedZero',
        'lining',
        'oldstyle',
        'proportional',
        'tabular',
        'diagonalFractions',
        'stackedFractions',
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: 'Text',
    color: 'primary',
    fontStyle: 'normal',
    fontWeight: 'normal',
    size: 'md',
    textOverflow: 'clip',
    textTransform: 'normal',
    verticalAlign: 'baseline',
    textDecoration: 'none',
    textAlign: 'left',
    letterSpacing: 'normal',
    listStyleType: 'none',
    fontVariantNumeric: 'normal',
  },
};
