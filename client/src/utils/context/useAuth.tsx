import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { User, UserLoggedIn } from "../types/user.type";

type UserContextType = {
  token: string | null;
  user: User | null;
  loginUser: (data: UserLoggedIn) => void;
  isLoggedIn: () => boolean;
  logout: () => void;
  contextValue: any;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      setUser(JSON.parse(user));
      setToken(token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      setUser(null);
      setToken("");
    }
  }, [token]);

  const loginUser = async (data: UserLoggedIn) => {
    if (data.token) {
      localStorage.setItem("token", data.token);

      const userObj = {
        id: data.userInformation.id,
        email: data.userInformation.email,
        name: data.userInformation.name,
      };

      localStorage.setItem("user", JSON.stringify(userObj));
      setToken(data.token!);
      setUser(userObj!);
    }
  };

  const isLoggedIn = () => {
    const user = localStorage.getItem("user");

    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
  };

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
    }),
    [token]
  );

  return (
    <UserContext.Provider
      value={{ contextValue, token, user, loginUser, isLoggedIn, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
