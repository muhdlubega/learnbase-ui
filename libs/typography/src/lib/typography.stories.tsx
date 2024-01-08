import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';


const meta: Meta<typeof Typography> = {
  component: Typography,
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
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    fontWeight: {
      options: ['normal', 'bold', 'bolder', 'lighter'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    size: {
      description: '`xs` | `sm` | `md` | `lg` | `xl`',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    textOverflow: {
      options: ['truncate', 'ellipsis', 'clip'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'clip' },
      },
    },
    textTransform: {
      options: ['uppercase', 'lowercase', 'capitalize', 'normal'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    children: "Text",
    color: "primary",
    fontStyle: "normal",
    fontWeight: "normal",
    fullWidth: false,
    size: 'md',
    textOverflow: "clip",
    textTransform: "normal",
  },
};

