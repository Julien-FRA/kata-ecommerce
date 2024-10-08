import { responseError } from "../../errors/responseError";
import { CreateUser } from "../../types/user.type";

export const signUp = async (data: CreateUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/user/register`, {
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
