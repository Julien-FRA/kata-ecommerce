import React from "react";
import "../style.scss";

export const RegisterForm = () => {
  return (
    <div className="form-container register-container wrapper">
      <form>
        <div className="input-container">
          <input type="text" name="name" id="name" placeholder="Ton nom..." />
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ton email..."
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ton mot de passe..."
          />
        </div>
      </form>
    </div>
  );
};
