import { fn } from "@storybook/test";

import { Carousel } from ".";

export default {
  title: "Carousel",
  component: "Carousel",
  args: {
    children: "Carousel",
  },
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
};

export const Default = {
  render: () => <Carousel />,
};
