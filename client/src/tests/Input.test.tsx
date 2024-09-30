import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../components/Inputs";

describe("<Input />", () => {
  test("Snapshot test", () => {
    const input = render(
      <Input
        type={"text"}
        name={"name"}
        id={"name"}
        placeholder={"Votre nom..."}
      />
    );

    expect(input).toMatchSnapshot();
  });

  test("Test des props", () => {
    const input = render(
      <Input
        type={"text"}
        name={"name"}
        id={"name"}
        placeholder={"Votre nom..."}
      />
    );

    // Test props type
    expect(input.container.firstChild).toHaveAttribute("type", "text");

    // Test props name
    expect(input.container.firstChild).toHaveAttribute("name", "name");

    // Test props id
    expect(input.container.firstChild).toHaveAttribute("id", "name");
  });

  test("Test default placeholder/value", () => {
    const input = render(
      <Input
        type={"text"}
        name={"name"}
        id={"name"}
        placeholder={"Votre nom..."}
      />
    );

    const placeholder = screen.getByPlaceholderText("Votre nom...");

    // Test props placeholder
    expect(placeholder).toBeTruthy();
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveValue("");
  });

  test("Test change event placeholder/value", () => {
    const input = render(
      <Input
        type={"text"}
        name={"name"}
        id={"name"}
        placeholder={"Votre nom..."}
      />
    );

    const placeholder = screen.getByPlaceholderText("Votre nom...");
    const value = "Update text";

    fireEvent.change(placeholder, {
      target: {
        value,
      },
    });

    // Test update value
    expect(placeholder).toHaveValue("Update text");
  });
});
