import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { FiAlertCircle } from 'react-icons/fi';
import { color } from '@learnbase-ui/global/constant';

const icon: Record<string, React.ReactNode | null> = {
  icon: <FiAlertCircle />,
  none: null,
};

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  // parameters: { layout: 'centered' },
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
    label: { description: '`string`' },
    variant: {
      description: '`outlined` | `contained`',
      options: ['outlined', 'contained'],
      control: { type: 'radio' },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'outlined' },
      },
    },
    color: {
      description: '`ColorVariant`',
      options: Object.keys(color),
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
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default = {
  args: {
    label: 'Button',
  },
};

export const Contained = {
  args: {
    ...Default.args,
    variant: 'contained',
  },
};

export const Primary = {
  args: {
    ...Default.args,
    color: 'primary',
  },
};

export const Secondary = {
  args: {
    ...Default.args,
    color: 'secondary',
  },
};

export const Error = {
  args: {
    ...Default.args,
    color: 'error',
  },
};

export const Success = {
  args: {
    ...Default.args,
    color: 'success',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <FiAlertCircle />,
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
};

export const Rounded: Story = {
  args: {
    ...Default.args,
    rounded: 'full',
  },
};

export const IconButton: Story = {
  args: {
    icon: <FiAlertCircle />,
    rounded: 'full',
    className: 'p-3',
  },
};
