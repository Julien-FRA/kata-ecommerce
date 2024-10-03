import React from "react";
import "./style.scss";
import { Button } from "../Buttons";

interface SelectProps {
  name: string;
  price: number;
  size: "XS" | "S" | "M" | "L" | "XL";
  color: string;
}

export const Select = ({ name, price, size, color }: SelectProps) => {
  return (
    <div className="select-container">
      <h2>{name}</h2>
      <p className="price">{price}€</p>
      <form>
        <div className="option">
          <label className="color p">Taille</label>
          <select name="" id="">
            <option value="marron">{size}</option>
            <option value="bleu">{size}</option>
            <option value="bleu">{size}</option>
          </select>
        </div>
        <div className="option">
          <label className="color p">Couleurs</label>
          <select name="" id="">
            <option value="marron">{color}</option>
            <option value="bleu">{color}</option>
          </select>
        </div>
        <Button
          type={"submit"}
          variant={"red"}
          size={"large"}
          content={"Ajouter au panier"}
        />
      </form>
    </div>
  );
};
