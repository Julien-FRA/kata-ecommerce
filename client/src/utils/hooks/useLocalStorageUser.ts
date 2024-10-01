import { User } from "../types/user.type";

export const saveUser = (user: User): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (): User | undefined => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : undefined;
};

export const removeuser = (): void => {
  localStorage.removeItem("user");
};
