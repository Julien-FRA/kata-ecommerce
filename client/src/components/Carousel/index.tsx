import React, { useState } from "react";
import "./style.scss";
import product_1 from "../../assets/images/product_1.webp";
import product_2 from "../../assets/images/product_2.webp";
import product_3 from "../../assets/images/product_3.webp";

export const Carousel = () => {
  const [slide, setSlide] = useState<number>(0);
  const data = [product_1, product_2, product_3];

  const getSlide = (value: number) => {
    setSlide(value);
  };

  const showSlide = () => (
    <figure className="show">
      <img src={data[slide]} alt="product" />
    </figure>
  );

  return (
    <div className="carousel-container">
      <div className="image-container">{showSlide()}</div>
      <div className="button-container">
        {data.map((item, key) => (
          <button key={key} onClick={() => getSlide(key)}>
            <figure>
              <img src={item} alt="product" />
            </figure>
          </button>
        ))}
      </div>
    </div>
  );
};
