import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '.';
import { FiChevronRight } from 'react-icons/fi';
import { colorCode } from '@learnbase-ui/global/constant';

const icon: Record<string, React.ReactNode | null> = {
  icon: <FiChevronRight />,
  none: null,
};

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Input/Input/TextField',
  tags: ['autodocs'],
  argTypes: {
    className: { table: { disable: true } },
    icon: {
      description: '`ReactNode`',
      options: Object.keys(icon),
      mapping: icon,
      control: {
        type: 'radio',
      },
      table: { defaultValue: { summary: 'none' } },
    },
    color: {
      description: '`ColorVariant`',
      options: Object.keys(colorCode),
      control: { type: 'select' },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: '`xs` | `sm` | `md` | `lg` | `xl`',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'md' },
      },
    },
    width: {
      description: '`sm` | `md` | `lg`',
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'md' },
      },
    },
    borderWidth: {
      description: '`xs` | `sm` | `md` | `lg` | `xl`',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'sm' },
      },
    },
    rounded: {
      description: '`none` | `sm` | `md` | `lg` | `full`',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'sm' },
      },
    },
    iconPosition: {
      description: '`start` | `end`',
      options: ['start', 'end'],
      control: { type: 'radio' },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'start' },
      },
    },
    labelPosition: {
      description: '`top` | `bottom`',
      options: ['top', 'bottom'],
      control: { type: 'radio' },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'top' },
      },
    },
    fullWidth: {
      description: '`boolean`',
      control: {
        type: 'boolean',
        expanded: true,
      },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: '`boolean`',
      control: {
        type: 'boolean',
        expanded: true,
      },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Default = {
  args: {
    placeholder: 'Text Field',
    label: '',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Icon Text Field',
    icon: <FiChevronRight />,
  },
};

export const ThickBordered: Story = {
  args: {
    placeholder: 'Thick Bordered Text Field',
    borderWidth: 'md',
  },
};

export const Rounded: Story = {
  args: {
    placeholder: 'Rounded Text Field',
    rounded: 'full',
  },
};

export const LabelBottom: Story = {
  args: {
    placeholder: 'Bottom Label Text Field',
    label: 'Label example',
    labelPosition: 'bottom',
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Full Width Text Field',
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Text Field',
    disabled: true,
  },
};
