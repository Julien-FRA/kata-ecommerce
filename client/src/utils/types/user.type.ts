export type CreateUser = {
  email: string;
  name: string;
  password: string;
};

export type LoginUser = {
  name: string;
  password: string;
};

export type User = {
  token: string;
  id: string;
  email: string;
  name: string;
};
