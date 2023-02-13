import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footerLeft">
        <img
          src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg"
          alt=""
        />
        <p className="gray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          culpa, placeat blanditiis assumenda eius temporibus iste excepturi
          nobis vel consequuntur animi voluptatem labore ad repudiandae.
        </p>
        <div className="reviewStars">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/star-svgrepo-com.svg"
            alt=""
          />
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/star-svgrepo-com.svg"
            alt=""
          />
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/star-svgrepo-com.svg"
            alt=""
          />
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/star-svgrepo-com.svg"
            alt=""
          />
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/star-svgrepo-com.svg"
            alt=""
          />
        </div>
      </div>
      <div className="footerMiddle">
        <div className="pagesLink">
          <strong>Pages</strong>
          <p className="gray">Home</p>
          <p className="gray">Blog Post</p>
          <p className="gray">Contact</p>
          <p className="gray">Blog</p>
          <p className="gray">Menu</p>
          <p className="gray">Delivery</p>
          <p className="gray">About</p>
        </div>
        <div className="pagesLink">
          <strong>Utility</strong>
          <p className="gray">Home</p>
          <p className="gray">Contact</p>
          <p className="gray">Blog Post</p>
          <p className="gray">Blog</p>
          <p className="gray">Delivery</p>
          <p className="gray">Menu</p>
          <p className="gray">About</p>
        </div>
      </div>
      <div className="footerRight">
        <strong>Follow us on Instagram</strong>
        <div className="fooImg">
            <img src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg" alt="" />
            <img src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg" alt="" />
            <img src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg" alt="" />
            <img src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
