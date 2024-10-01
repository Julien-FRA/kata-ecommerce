export type User = {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

export type CreateUser = {
  email: string;
  name: string;
  password: string;
};
