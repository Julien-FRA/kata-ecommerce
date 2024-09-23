import type { StoryObj } from "@storybook/react";

import { Carousel } from ".";

const meta = {
  title: "Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      toc: true,
    },
  },
  argTypes: {
    children: "Carousel",
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => <Carousel />,
};
