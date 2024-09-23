import { Button } from ".";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      toc: true,
    },
  },
  argTypes: {
    type: {
      control: { type: "string" },
      description: `Type du bouton. Type : button | submit | reset`,
    },
    href: {
      control: { type: "string" },
      description: `Lien du bouton si balise <a></a>`,
    },
    variant: {
      control: { type: "string" },
      description: `Couleur du bouton. Type : red | white | black`,
    },
    size: {
      control: { type: "string" },
      description: `Taille du bouton. Type : small | large`,
    },
    content: {
      control: { type: "string" },
      description: `Text a l'intérieur du bouton. Type: string`,
    },
    onCLick: {
      control: { type: "void" },
      description: `Fonction appliquer au clique du bouton. Type: void`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BlackButton: Story = {
  args: {
    variant: "black",
    size: "small",
    content: "Bouton",
  },
};

export const RedButton: Story = {
  args: {
    variant: "red",
    size: "small",
    content: "Bouton",
  },
};

export const WhiteButton: Story = {
  render: () => (
    <div style={{ backgroundColor: "black", padding: "25px" }}>
      <Button variant={"white"} size={"small"} content={"Bouton"} />
    </div>
  ),
};

export const LargeButton: Story = {
  args: {
    variant: "red",
    size: "large",
    content: "Bouton",
  },
};

export const SubmitButton: Story = {
  args: {
    type: "submit",
    variant: "red",
    size: "small",
    content: "Bouton",
  },
};

export const HrefButton: Story = {
  args: {
    href: "/monlien",
    variant: "black",
    size: "small",
    content: "Bouton",
  },
};
