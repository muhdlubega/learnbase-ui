import type { Meta, StoryObj } from '@storybook/react';
import H6 from './h6';

const meta: Meta<typeof H6> = {
  component: H6,
  title: 'H6',
  argTypes: {
    children: { control: 'text' },
  },
}
export default meta;
type Story = StoryObj<typeof H6>;

export const Default: Story = {
  args: {
    children: 'H6 Heading',
  },
};
