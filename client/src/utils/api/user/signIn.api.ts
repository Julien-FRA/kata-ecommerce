import { useQuery } from "@tanstack/react-query";
import { responseError } from "../../errors/responseError";
import { LoginUser } from "../../types/user.type";

export const signIn = async (data: LoginUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/user/login`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    return responseError(error);
  }
};

export const useUser = async (data: LoginUser) => {
  const { data: dataUser } = useQuery(["user"], await signIn(data));
  console.log(dataUser);
};
