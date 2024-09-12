import React from "react";
import "./style.scss";
import { Carousel } from "../../Carousel";
import { Select } from "../../Select";
import { Details } from "../../Details";

export const ItemProduct = () => {
  return (
    <div className="item-product-container wrapper">
      <div className="top-container">
        <Carousel />
        <Select />
      </div>
      <Details />
    </div>
  );
};
