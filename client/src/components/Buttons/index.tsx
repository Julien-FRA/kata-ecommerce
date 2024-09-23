import React from "react";
import "./style.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  href?: string;
  variant: "red" | "white" | "black";
  size: "small" | "large";
  content: string;
  onClick?: () => void;
}

export const Button = ({
  type,
  href,
  variant,
  size,
  content,
  onClick,
}: ButtonProps) => {
  return href ? (
    <a
      href={href}
      className={`button-container ${variant} ${size}`}
      onClick={onClick}
    >
      {content}
    </a>
  ) : (
    <button
      type={type}
      className={`button-container ${variant} ${size}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
