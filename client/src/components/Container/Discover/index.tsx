import React from "react";
import { ProductCard } from "../../Card/Product";
import "./style.scss";

export const DiscoverContainer = () => {
  return (
    <div className="discover-container">
      <ProductCard />
      <ProductCard />
    </div>
  );
};
