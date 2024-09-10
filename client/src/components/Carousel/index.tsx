import React, { useState } from "react";
import "./style.scss";
import product from "../../assets/images/product_1.webp";

export const Carousel = () => {
  const [slide, setSlide] = useState<number>(0);

  const getSlide = (value: number) => {
    setSlide(value);
  };

  const showSlide = () => {};

  return (
    <div className="carousel-container">
      <div className="image-container">
        <figure className="show">
          <img src={product} alt="product" />
        </figure>
        <figure>
          <img src={product} alt="product" />
        </figure>
        <figure>
          <img src={product} alt="product" />
        </figure>
      </div>
      <div className="button-container">
        <button key={0} onClick={() => getSlide(0)}>
          <figure>
            <img src={product} alt="product" />
          </figure>
        </button>
        <button key={1} onClick={() => getSlide(1)}>
          <figure>
            <img src={product} alt="product" />
          </figure>
        </button>
        <button key={2} onClick={() => getSlide(2)}>
          <figure>
            <img src={product} alt="product" />
          </figure>
        </button>
      </div>
    </div>
  );
};
