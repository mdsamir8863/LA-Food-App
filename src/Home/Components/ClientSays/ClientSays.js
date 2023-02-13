import React from "react";
import "./ClientSays.css";
const ClientSays = () => {
  return (
    <div className="clientContainer">
      <div className="clientText">
        <h1>What our clients say</h1>
        <p className="gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          voluptatem repudiandae natus error sequi aperiam.
        </p>
      </div>
      <div className="clientReviewContainer">
        <div className="arrow">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/left-arrow-svgrepo-com.svg"
            alt=""
          />
        </div>

        <div className="clientReviewBox">
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
          <h2>“You must try these burgers”</h2>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            explicabo architlit. Excepturi, tempora quos?
          </p>
          <div className="userDetail">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/face1.jpg"
              alt=""
            />
            <div className="username">
              <p>
                <strong>Matt Cannon</strong>
              </p>
              <p className="gray">San Diego, CA</p>
            </div>
          </div>
        </div>
        <div className="arrow">
          <img
            src="https://atri-apps.github.io/restaurant_website/app-assets/right-arrow-svgrepo-com.svg"
            alt=""
          />
        </div>
      </div>
      <div className="navRight">
        <button className="ButtonColor" style={{ margin: "1rem" }}>
          Order online
        </button>
        <button className="ButtonWhite">Book a table</button>
      </div>
    </div>
  );
};

export default ClientSays;
