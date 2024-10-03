import { responseError } from "../../errors/responseError";

export const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/product/`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    const data = await response.json();

    return data ? data : undefined;
  } catch (error) {
    return responseError(error);
  }
};

export const getProduct = async (id: string | undefined) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/product/${id}`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    const data = await response.json();

    return data ? data : undefined;
  } catch (error) {
    return responseError(error);
  }
};
