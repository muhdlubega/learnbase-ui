import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '.';
import { color } from '@learnbase-ui/global';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Loader/Spinner',
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: '`ColorVariant`',
      options: Object.keys(color),
      control: { type: 'select' },
      table: {
        // type: { summary: '-' },
        defaultValue: { summary: 'primary' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    color: 'primary',
  },
};
