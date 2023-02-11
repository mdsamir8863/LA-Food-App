import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const items = ["Home", "About", "Menu", "Pages", "Cart"];
  return (
    <div className="navContainer">
      <nav>
        <img
          className="Logo"
          src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg"
          alt=""
        />
        <ul className="navLeft gray">
          {items.map((name) => (
            <li key={name}> {name} </li>
          ))}
        </ul>
        <div className="navRight">
          <button className="ButtonWhite">Order online</button>
          <button className="ButtonColor">Reservate</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
