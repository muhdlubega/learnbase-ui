import type { Meta, StoryObj } from '@storybook/react';
import H4 from './h4';

const meta: Meta<typeof H4> = {
  component: H4,
  title: 'H4',
  argTypes: {
    children: { control: 'text' },
  },
}
export default meta;
type Story = StoryObj<typeof H4>;

export const Default: Story = {
  args: {
    children: 'H4 Heading',
  },
};
