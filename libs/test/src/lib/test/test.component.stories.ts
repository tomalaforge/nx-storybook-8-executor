import type { Meta, StoryObj } from '@storybook/angular';
import { TestComponent } from './test.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<TestComponent> = {
  component: TestComponent,
  title: 'TestComponent',
};
export default meta;
type Story = StoryObj<TestComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/test works!/gi)).toBeTruthy();
  },
};
