import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Text',
};
export default meta;
type Story = StoryObj<typeof Text>;

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
