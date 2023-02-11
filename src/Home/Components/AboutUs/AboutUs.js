import React from "react";
import "./Aboutus.css";
const AboutUs = () => {
  return (
    <div className="AboutContainer">
      <div className="AboutLeft">
        <div className="">
          <img
            className="AboutImg"
            src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0bdba0fb13cfd32fc0_about-home-restaurante-x-template-p-1080.jpeg"
            alt=""
          />
        </div>
        <div className="address">
          <h3>Come and visit us</h3>
          <div className="add">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3a1718503bfe60f49_location-icon-restaurante-x-template.svg"
              alt=""
            />
            <address>
              837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
            </address>
          </div>
          <div className="add">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c36165d583fe91702b_phone-icon-restaurante-x-template.svg"
              alt=""
            />
            <span>(414) 857 - 0107</span>
          </div>
          <div className="add">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3400864a9087440a4_email-icon-restaurante-x-template.svg"
              alt=""
            />
            <address>losangeles@restaurantex.com</address>
          </div>
        </div>
      </div>
      <div className="AboutRight">
        <h1>About us</h1>
        <p className="gray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta iusto
          qui magni non, suscipit nam. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quod, dolor quasi!
        </p>
        <p className="gray">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          sequi aut molestiae quisquam totam explicabo. Cumque, aliquam? Culpa
          molestiae quasi eius quos veritatis eveniet eum! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quod, dolor quasi!
        </p>
        <div className="navRight">
          <button className="ButtonWhite" style={{ margin: "1rem" }}>
            About us
          </button>
          <button className="ButtonColor">Join our team</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
