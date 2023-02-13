import React from "react";
import "./Manu.css";
const Manu = () => {
  return (
    <div className="manuContainer">
      <div>
        <h2>Browse our menu</h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          veniam, omnis explicabo itaque aperiam quaerat iure, tempore vitae
          dolor magni, quo suscipit!
        </p>
      </div>

      <div className="manus">
        <div className="manu">
          <img
            className="ManuImg"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dca333c0bd679a77bec56_classic-burger-restaurante-x-template-p-500.jpeg"
            alt=""
          />
          <p className="strong">Classic Burger</p>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="manu">
          <img
            className="ManuImg"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dc9ba43f4163d5f7b436e_chocolate-milkshake-restaurante-x-template-p-500.jpeg"
            alt=""
          />
          <p className="strong">Chocolate Milkshake</p>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="manu">
          <img
            className="ManuImg"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dc9aac480169bcc819e69_classic-fries-restaurante-x-template-p-500.jpeg"
            alt=""
          />
          <p className="strong">Classic Fries</p>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="manu">
          <img
            className="ManuImg"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dc56043f416c4db7b3322_pancakes-restaurante-x-template-p-500.jpeg"
            alt=""
          />
          <p className="strong">Pancakes</p>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="manus">
        <div className="manu">
          <img
            className="ManuImg"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dc50743f41639377b2fd8_ice-cream-restaurante-x-template-p-500.jpeg"
            alt=""
          />
          <p className="strong">Ice Cream</p>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="manu">
          <img
            className="ManuImg"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dc4d28ae55806547e5dba_chicken-burger-restaurante-x-template-p-500.jpeg"
            alt=""
          />
          <p className="strong">Chicken Burger</p>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="manu">
          <img
            className="ManuImg"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dc4908009251d2f5ac06b_egg-toast-restaurante-x-template-p-500.jpeg"
            alt=""
          />
          <p className="strong">Egg toast</p>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="manu">
          <img
            className="ManuImg"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616dc414d54d4e45ccac841f_regular-soda-restaurante-x-template-p-500.jpeg"
            alt=""
          />
          <p className="strong">Regular Soda</p>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="navRight">
        <button className="ButtonColor" style={{ margin: "1rem" }}>
          Reservate
        </button>
        <button className="ButtonWhite">Order online</button>
      </div>
      <div className="burgerPage">
        <div className="burgerText">
          <h1>Taste the most delicious burger in Los Angeles, CA</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            voluptatem pariatur! Eveniet quibusdam expedita numquam eligendi
            quae repellat nobis temporibus voluptas doloribus.
          </p>
          <div className="navRight">
            <button className="ButtonWhite">Order online</button>

            <button
              className="ButtonColor"
              style={{ margin: "1rem", border: "1px solid white" }}
            >
              Reservate
            </button>
          </div>
        </div>
        <div className="burgerImg">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c364b456b93fb50d6d_cta-restaurante-x-template.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Manu;
