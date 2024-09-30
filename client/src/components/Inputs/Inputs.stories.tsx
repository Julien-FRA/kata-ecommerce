import { Input } from ".";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      toc: true,
    },
  },
  argTypes: {
    type: {
      control: { type: "string" },
      description: `Type du bouton. Type : text | email | password`,
    },
    name: {
      control: { type: "string" },
      description: `Attribut name de l'input. Type: string`,
    },
    id: {
      control: { type: "string" },
      description: `Attribut id de l'input. Type: string`,
    },
    placeholder: {
      description: `Attribut placeholder de l'input. Type: string`,
      control: { type: "string" },
    },
    disabled: {
      description: `Attribut disable de l'input. Type: bool`,
      control: { type: "string" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    type: "text",
    name: "small",
    id: "Bouton",
    placeholder: "Test placeholder",
  },
};

export const DesableInput: Story = {
  args: {
    type: "text",
    name: "small",
    id: "Bouton",
    placeholder: "Test placeholder",
    disabled: true,
  },
};
