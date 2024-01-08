import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Text',
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Text!/gi)).toBeTruthy();
  },
};
