import type { Meta, StoryObj } from '@storybook/react';
import H1 from './h1';

const meta: Meta<typeof H1> = {
  component: H1,
  title: 'H1',
  argTypes: {
    children: { control: 'text' },
  },
}
export default meta;
type Story = StoryObj<typeof H1>;

export const Default: Story = {
  args: {
    children: 'H1 Heading',
  },
};
