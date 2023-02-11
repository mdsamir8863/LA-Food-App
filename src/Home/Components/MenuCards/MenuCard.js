import React from "react";
import "./MenuCards.css";
const MenuCard = () => {
  return (
    <div className="menuContainer">
      <h2>Browse our menu</h2>
      <div className="cards">
        <div className="card">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg"
            alt="Breakfast"
          />
          <strong>Breakfast</strong>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            deserunt odio fugiat voluptatibus totam eius.
          </p>
          <p className="orange">Explore Menu</p>
        </div>
        <div className="card">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dcfbb9e09be616e71d818_menu-main-dishes-restaurante-x-template.svg"
            alt="Breakfast"
          />
          <strong>Main Dishes</strong>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            deserunt odio fugiat voluptatibus totam eius.
          </p>
          <p className="orange">Explore Menu</p>
        </div>
        <div className="card">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dcfb5dd3ca61a6dd0ae1c_menu-drinks-restaurante-x-template.svg"
            alt="Breakfast"
          />
          <strong>Drinks</strong>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            deserunt odio fugiat voluptatibus totam eius.
          </p>
          <p className="orange">Explore Menu</p>
        </div>
        <div className="card">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dcfafe6321c66cb474f97_menu-desserts-restaurante-x-template.svg"
            alt="Breakfast"
          />
          <strong>Desserts</strong>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            deserunt odio fugiat voluptatibus totam eius.
          </p>
          <p className="orange">Explore Menu</p>
        </div>
      </div>
      <div className="navRight">
        <button className="ButtonColor" style={{ margin: "2rem" }}>
          Reservate
        </button>
        <button className="ButtonWhite">Order online</button>
      </div>
    </div>
  );
};

export default MenuCard;
