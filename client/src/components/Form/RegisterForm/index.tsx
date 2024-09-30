import React from "react";
import "../style.scss";
import { Button } from "../../Buttons";
import { Input } from "../../Inputs";

export const RegisterForm = () => {
  return (
    <div className="form-container register-container wrapper">
      <form>
        <div className="input-container">
          <Input
            type={"text"}
            name={"name"}
            id={"name"}
            placeholder={"Ton nom..."}
          />
        </div>
        <div className="input-container">
          <Input
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Ton email..."}
          />
        </div>
        <div className="input-container">
          <Input
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"Ton mot de passe..."}
          />
        </div>
        <Button
          type={"submit"}
          variant={"red"}
          size={"large"}
          content={"Envoyer"}
        />
      </form>
    </div>
  );
};
