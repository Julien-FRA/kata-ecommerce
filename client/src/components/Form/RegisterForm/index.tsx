import React, { useState } from "react";
import "../style.scss";
import "../../Inputs/style.scss";
import { useForm } from "react-hook-form";
import { Button } from "../../Buttons";
import { CreateUser } from "../../../utils/types/user.type";
import { signUp } from "../../../utils/api/user/signUp.api";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<CreateUser>();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (dataUser: CreateUser) => {
    const res = await signUp(dataUser);

    if (res.user) {
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setSuccess(false);
      setError(true);
    }
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
      {success && (
        <p className="success">Votre compte a été créée avec succès !</p>
      )}
      {error && (
        <p className="error">Erreur lors de la création de votre compte...</p>
      )}
    </div>
  );
};
