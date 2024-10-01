import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ResponseError } from "../errors/responseError";
import { User } from "../types/user.type";

const api = process.env.REACT_API;

const signIn = async (name: string, password: string): Promise<User> => {
  const response = await fetch(`${api}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password }),
  });

  if (!response.ok) {
    throw new ResponseError("Erreur lors du login", response);
  }

  return await response.json();
};

type IUseSignIn = UseMutateFunction<
  User,
  unknown,
  {
    name: string;
    password: string;
  },
  unknown
>;

export const useSignIn = (): IUseSignIn => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { mutate: signInMutation } = useMutation<
    User,
    unknown,
    {
      name: string;
      password: string;
    },
    unknown
  >(({ name, password }) => signIn(name, password), {
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

  return signInMutation;
};
