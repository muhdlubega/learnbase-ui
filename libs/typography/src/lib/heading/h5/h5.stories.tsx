import type { Meta, StoryObj } from '@storybook/react';
import H5 from './h5';

const meta: Meta<typeof H5> = {
  component: H5,
  title: 'H5',
  argTypes: {
    children: { control: 'text' },
  },
}
export default meta;
type Story = StoryObj<typeof H5>;

export const Default: Story = {
  args: {
    children: 'H5 Heading',
  },
};
