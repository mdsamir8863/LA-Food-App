import React from "react";
import "./Follow.css";
const Follow = () => {
  return (
    <div className="followBg">
      <div className="FollowUs">
        <h1>Follow us on Instagram</h1>
        <button className="ButtonColor">Follow us</button>
      </div>
      <div className="images">
        <div className="img2">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c40b5fd9150a07d9ad_Instagram-01-restaurante-x-template.jpeg"
            alt=""
          />
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c360af92b81a49e435_Instagram-02-restaurante-x-template.jpeg"
            alt=""
          />
        </div>

        <div className="img4">
          <div className="img2">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
              alt=""
            />
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
              alt=""
            />
          </div>
          <div className="img2">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
              alt=""
            />
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
