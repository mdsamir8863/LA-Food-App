import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <header>
        <div className="blur"></div>
        <div className="left">
          <h1>The best place to </h1>
          <h1 className="clr">eat burgers in LA.</h1>
          <p className="gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            aperiam recusandae fugiat maiores sapiente, saepe laborum,
            voluptatibus dignissimos tempora nobis facilis! Iure, omnis corporis
            ipsum ducimus officiis aspernatur!
          </p>
          <div className="navRight">
            <button className="ButtonColor" style={{ margin: "1rem" }}>
              Reservate
            </button>
            <button className="ButtonWhite">Order online</button>
          </div>
        </div>
        <div className="right">
          <img
            className="pizzaImage"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg"
            alt="pizzaImage"
          />
        </div>
        <div className="blur2"></div>
        <div className="blur3"></div>
      </header>
      <div className="OtherOderSites">
        <p>Order from your favorite app today!</p>
        <div className="otherSite">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b63b4ee3fe71f5072_logo-doorash-restaurante-x-template.svg"
            alt="LOGO"
          />
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0bded3b95d9731ecc4_logo-postmates-restaurante-x-template.svg"
            alt="LOGO"
          />
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b326163db6497f05b_logo-rappi-restaurante-x-template.svg"
            alt="LOGO"
          />
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b5b82ce962fe1736b_logo-grubhub-restaurante-x-template.svg"
            alt="LOGO"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
