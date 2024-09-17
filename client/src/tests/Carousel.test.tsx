import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Carousel } from "../components/Carousel";

describe("<Carousel />", () => {
  test(`Basic test`, () => {
    // Génaration du DOM virtuel
    render(<Carousel />);

    const image = screen.getAllByRole("img");

    // Test d'image sur la valeur affiché en premier sur le carousel
    expect(image[0]).toHaveAttribute("src", "product_1.webp");
    expect(image[0]).toHaveAttribute("alt", "product");
  });

  test(`Click du user sur le button de l'image déja affiché`, async () => {
    // Génaration du DOM virtuel
    render(<Carousel />);

    const image = screen.getAllByRole("img");

    const button = screen.getAllByRole("button");

    await userEvent.click(button[0]);
    expect(image[0]).toHaveAttribute("src", "product_1.webp");
  });

  test(`Changement d'image au click du user`, async () => {
    // Génaration du DOM virtuel
    render(<Carousel />);

    const image = screen.getAllByRole("img");

    const button = screen.getAllByRole("button");

    await userEvent.click(button[1]);
    expect(image[0]).toHaveAttribute("src", "product_2.webp");
  });
});
