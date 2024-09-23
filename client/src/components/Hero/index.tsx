import React from "react";
import logo from "../../assets/images/logo_kokoro_3d.compress.webp";
import "./style.scss";
import { Button } from "../Buttons";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="left-content">
          <h1>Decouvre notre nouvelle collection de 2025</h1>
          <h2>
            Made by <span>Kokoro</span>
          </h2>
          <Button
            href={"/"}
            variant={"white"}
            size={"small"}
            content={"Découvrir"}
          />
        </div>
        <div className="right-content">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};
