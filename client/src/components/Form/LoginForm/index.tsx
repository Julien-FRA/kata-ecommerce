import React, { useState } from "react";
import "../style.scss";
import "../../Inputs/style.scss";
import { Button } from "../../Buttons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginUser } from "../../../utils/types/user.type";
import { signIn, useUser } from "../../../utils/api/user/signIn.api";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginUser>();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (dataUser: LoginUser) => {
    const res = await signIn(dataUser);

    console.log(res);

    if (res.user) {
      const test = useUser(dataUser);
      console.log(test);
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setSuccess(false);
      setError(true);
    }
  });

  return (
    <div className="form-container login-container wrapper">
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
      <p>Pas encore inscrit ?</p>
      <Link to={"/register"} className="p">
        S'inscrire
      </Link>
    </div>
  );
};
