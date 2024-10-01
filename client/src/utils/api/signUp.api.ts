import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ResponseError } from "../errors/responseError";
import { User } from "../types/user.type";

const api = process.env.REACT_APP_API;

const signUp = async (
  email: string,
  name: string,
  password: string
): Promise<User> => {
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

  console.log(response);

  if (!response.ok) {
    throw new ResponseError("Erreur lors du register", response);
  }

  return await response.json();
};

type IUseSignUp = UseMutateFunction<
  User,
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
  const { enqueueSnackbar } = useSnackbar();
  const { mutate: signUpMutation } = useMutation<
    User,
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
      navigate("/");
    },
    onError: (err) => {
      enqueueSnackbar("Oups... Erreur lors du register", {
        variant: "error",
      });
    },
  });

  return signUpMutation;
};
