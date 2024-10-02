import React, { useState } from "react";
import "../style.scss";
import { useForm } from "react-hook-form";
import { Button } from "../../Buttons";
// import { Input } from "../../Inputs";
import { useSignUp } from "../../../utils/api/signUp.api";
import { CreateUser } from "../../../utils/types/user.type";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<CreateUser>();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const signUp = useSignUp();

  const onSubmit = handleSubmit(async (data: CreateUser) => {
    console.log(data);
    const response = signUp(data);

    console.log(response);
  });

  return (
    <div className="form-container register-container wrapper">
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            className="input"
            type={"text"}
            id={"name"}
            placeholder={"Ton nom..."}
            {...register("name")}
          />
        </div>
        <div className="input-container">
          <input
            className="input"
            type={"email"}
            id={"email"}
            placeholder={"Ton email..."}
            {...register("email")}
          />
        </div>
        <div className="input-container">
          <input
            className="input"
            type={"password"}
            id={"password"}
            placeholder={"Ton mot de passe..."}
            {...register("password")}
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
