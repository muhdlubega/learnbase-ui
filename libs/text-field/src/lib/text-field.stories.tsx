import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './text-field';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TextField!/gi)).toBeTruthy();
  },
};
