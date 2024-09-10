import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NoPage } from "../pages/NoPage";
import { SelectProduct } from "../pages/SelectProduct";
import { Product } from "../pages/Product";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<SelectProduct />} />
        <Route path="/product/item" element={<Product />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
