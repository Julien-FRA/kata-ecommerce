import React, { useState } from "react";
import "./style.scss";

interface InputProps {
  type: "text" | "email" | "password";
  name: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
}

export const Input = ({
  type,
  name,
  id,
  placeholder,
  disabled,
}: InputProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      {disabled ? (
        <input
          className="input disable-input"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
        />
      ) : (
        <input
          className="input"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </>
  );
};
