import React, { useState } from "react";
import "../style.scss";
import { useForm } from "react-hook-form";
import { Button } from "../../Buttons";
import { Input } from "../../Inputs";
import { useSignUp } from "../../../utils/api/signUp.api";
import { CreateUser } from "../../../utils/types/user.type";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<CreateUser>();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const signUp = useSignUp();

  const onSubmit = handleSubmit(async (data: CreateUser) => {
    const response = signUp(data);

    console.log(response);
  });

  return (
    <div className="form-container register-container wrapper">
      <form onSubmit={onSubmit}>
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
