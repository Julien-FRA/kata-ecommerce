import React, { useState } from "react";
import "./style.scss";
import logo from "../../../assets/images/logo-menu.png";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="menu wrapper">
      <div className="mobile-menu" id="burger-menu" onClick={toggleMenu}>
        Menu
      </div>
      {openMenu ? (
        <ul className="left-menu active">
          <li className="nav-item logo">
            <a href="/">
              <img src={logo} alt="logomenu" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/">Hoodies</a>
          </li>
          <li className="nav-item">
            <a href="/">Sweat shirts</a>
          </li>
          <li className="nav-item">
            <a href="/">Caps</a>
          </li>
        </ul>
      ) : (
        <ul className="left-menu">
          <li className="nav-item logo">
            <a href="/">
              <img src={logo} alt="logomenu" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/product">Hoodies</a>
          </li>
          <li className="nav-item">
            <a href="/product">Sweat shirts</a>
          </li>
          <li className="nav-item">
            <a href="/product">Caps</a>
          </li>
        </ul>
      )}
      <ul className="right-menu">
        <li className="nav-item">
          <a href="/basket">Panier</a>
        </li>
        <li className="nav-item">
          <a href="/register">Compte</a>
        </li>
      </ul>
    </nav>
  );
};
