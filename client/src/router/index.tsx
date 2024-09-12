import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NoPage } from "../pages/NoPage";
import { SelectProduct } from "../pages/SelectProduct";
import { Product } from "../pages/Product";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Basket } from "../pages/Basket";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<SelectProduct />} />
        <Route path="/product/item" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
