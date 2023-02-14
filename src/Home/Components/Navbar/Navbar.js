import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  // const items = ["Home", "About", "Menu", "Pages", "Cart"];
  return (
    <div className="navContainer">
      <nav>
        <img
          className="Logo"
          src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg"
          alt=""
        />
        {/* <ul className="navLeft gray">
          {items.map((name) => (
            <li key={name}>
              <Link to="/AboutUs">{name} </Link>
            </li>
          ))}
        </ul> */}
        <ul className="NavLinks">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link>Pages</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
        </ul>
        <div className="navRight">
          <button className="ButtonWhite orderBtn">
            <Link to="BookYourTable">Order online</Link>
          </button>
          <button className="ButtonColor">Reservate</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
