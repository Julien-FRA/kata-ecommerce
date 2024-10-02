import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { responseError } from "../errors/responseError";
import { CreateUser } from "../types/user.type";

const api = process.env.REACT_APP_API;

const signUp = async (
  email: string,
  name: string,
  password: string
): Promise<CreateUser> => {
  try {
    console.log(name);
    const response = await fetch(`${api}/user/register`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ name, email, password }),
    });

    return await response.json();
  } catch (err) {
    return responseError(err);
  }
};

type IUseSignUp = UseMutateFunction<
  CreateUser,
  unknown,
  {
    email: string;
    name: string;
    password: string;
  },
  unknown
>;

export const useSignUp = (): IUseSignUp => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signUpMutation } = useMutation<
    CreateUser,
    unknown,
    {
      email: string;
      name: string;
      password: string;
    },
    unknown
  >(({ email, name, password }) => signUp(email, name, password), {
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
  });

  return signUpMutation;
};
