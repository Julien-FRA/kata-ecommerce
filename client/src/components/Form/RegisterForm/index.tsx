import React, { useState } from "react";
import "../style.scss";
import { useForm } from "react-hook-form";
import { Button } from "../../Buttons";
// import { Input } from "../../Inputs";
import { CreateUser } from "../../../utils/types/user.type";
import { signUp } from "../../../utils/api/user/user.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<CreateUser>();
  const [success, setSuccess] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const queryKey = ["user"];
  const { mutateAsync } = useMutation(
    async (data: CreateUser) => {
      signUp(data);
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(queryKey, data);
        setSuccess(true);
      },
    }
  );

  const onSubmit = handleSubmit(async (dataUser: CreateUser) => {
    mutateAsync(dataUser);
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
