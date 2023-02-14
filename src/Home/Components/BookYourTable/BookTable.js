import React from "react";
import "./BookTable.css";
const BookTable = () => {
  return (
    <div className="BookYourTable">
      <div className="BookYourTableLeft">
        <h1>Book your Table</h1>
        <p className="gray">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          corporis, maxime earum quae saepe placeat itaque nemo perferendis
          totam impedit odio illo!
        </p>
        <div className="BookingAddress gray">
          <div className="add">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3a1718503bfe60f49_location-icon-restaurante-x-template.svg"
              alt=""
            />
            <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
          </div>
          <div className="add">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c36165d583fe91702b_phone-icon-restaurante-x-template.svg"
              alt=""
            />
            <p>(414) 857 - 0107</p>
          </div>
          <div className="add">
            <img
              src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3400864a9087440a4_email-icon-restaurante-x-template.svg"
              alt=""
            />
            <p>losangeles@restaurentex.com</p>
          </div>
        </div>
      </div>
      <div className="BookYourTableRight">
        <div className="blur4"></div>
        <div className="BookingForm">
          <form action="" className="">
            <div className="flexInput">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Samir Ansari" />
              <label htmlFor="Phone">Phone</label>
              <input type="number" id="Phone" placeholder="(123) 456-789" />
              <label htmlFor="number">Date</label>
              <input type="date" id="number" />
            </div>
            <div className="flexInput">
              <label htmlFor="Email Address">Email Address</label>
              <input
                type="text"
                id="Email Address"
                placeholder="Samir@gmail.com"
              />
              <label htmlFor="Location">Location</label>
              <input type="text" id="Location" placeholder="Ex. Los Angeles" />
              <label htmlFor="Schedule">Schedule</label>
              <input type="text" id="Schedule" placeholder="Ex 2:00PM" />
            </div>
          </form>
          <label htmlFor="note">Add a note</label>
          <input
            type="text"
            id="note"
            className="note"
            placeholder="Do you have any note for us?"
          />
          <button className="ButtonColor">Book a table</button>
        </div>
      </div>
      
    </div>
  );
};

export default BookTable;
