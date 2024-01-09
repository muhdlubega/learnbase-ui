import type { Meta, StoryObj } from '@storybook/react';
import H3 from './h3';

const meta: Meta<typeof H3> = {
  component: H3,
  title: 'H3',
  argTypes: {
    children: { control: 'text' },
  },
}
export default meta;
type Story = StoryObj<typeof H3>;

export const Default: Story = {
  args: {
    children: 'H3 Heading',
  },
};
