import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../components/Buttons";

describe("<Button />", () => {
  test("Snapshot test", () => {
    const button = render(
      <Button variant={"red"} size={"small"} content={"Button"} />
    );

    expect(button).toMatchSnapshot();
  });

  test("Test des props css", () => {
    const button = render(
      <Button variant={"red"} size={"small"} content={"Button"} />
    );

    // Test de la couleur
    expect(button.container.firstChild).not.toHaveClass("black");
    expect(button.container.firstChild).toHaveClass("red");

    // Test de la taille
    expect(button.container.firstChild).not.toHaveClass("large");
    expect(button.container.firstChild).toHaveClass("small");
  });

  test("Test du type de button", () => {
    const button = render(
      <Button
        type={"submit"}
        variant={"red"}
        size={"small"}
        content={"Button"}
      />
    );

    expect(button.container.firstChild).toHaveAttribute("type", "submit");
  });

  test("Test du lien a href", () => {
    const button = render(
      <Button
        href={"/monlien"}
        variant={"red"}
        size={"small"}
        content={"Button"}
      />
    );

    expect(button.container.firstChild).toHaveAttribute("href", "/monlien");
  });

  test("Test du text dans le bouton", () => {
    const button = render(
      <Button
        type={"submit"}
        variant={"red"}
        size={"small"}
        content={"Button"}
      />
    );

    const text = screen.getByText("Button");

    expect(text).toBeTruthy();
  });
});
