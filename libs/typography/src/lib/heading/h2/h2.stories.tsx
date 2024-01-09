import type { Meta, StoryObj } from '@storybook/react';
import H2 from './h2';

const meta: Meta<typeof H2> = {
  component: H2,
  title: 'H2',
  argTypes: {
    children: { control: 'text' },
  },
}
export default meta;
type Story = StoryObj<typeof H2>;

export const Default: Story = {
  args: {
    children: 'H2 Heading',
  },
};
