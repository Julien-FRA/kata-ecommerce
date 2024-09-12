import React from "react";
import logo from "../../../assets/images/logo-menu.png";
import instagram from "../../../assets/images/instagram.png";
import "./style.scss";

export const Footer = () => {
  return (
    <div className="footer-container wrapper">
      <figure className="logo">
        <img src={logo} alt="logo" />
      </figure>
      <h3>Fait avec ❤️ par Kokoro</h3>
      <div className="social-container">
        <p>Suivez nous: </p>
        <a href="#">
          <figure className="instagram">
            <img src={instagram} alt="instagram" />
          </figure>
        </a>
      </div>
    </div>
  );
};
