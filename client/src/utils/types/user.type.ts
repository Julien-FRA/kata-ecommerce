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
  id: string;
  email: string;
  name: string;
};

export type UserLoggedIn = {
  token: string;
  userInformation: User;
};
