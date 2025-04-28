import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import backicon from "../../icons_assets/icons8-back-35.png";
import Mobnav from "../Mobnav/Mobnav";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./BookTable.css";

function BookTable() {
  const navigate = useNavigate();
  const backClick = () => {
    window.history.back();
  };
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [requests, setRequests] = useState("");

  const clearForm = () => {
    setName("");

    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests("");
    setRequests("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    clearForm();
  };
  const handleReserve = (e) => {
    e.preventDefault();

    if (!Name || !email || !phone || !date || !time || !guests) {
      alert("Please fill all required fields before reserving a table.");
      return;
    }

    navigate("/confirmation");
  };
  return (
    <div>
      <div className="bt-header">
        <Header />
      </div>
      <div className="bt-nav">
        <Nav />
      </div>
      <div className="bt-mobnav">
        <Mobnav />
      </div>
      <div className="bg">
        <div className="backicon1">
          <img
            src={backicon}
            alt="backicon"
            padding="10px"
            onClick={backClick}
          />
        </div>
        <h1>Book A Table</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlfor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlfor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlfor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <fieldset>
            <legend>Reservation Details</legend>
            <div>
              <label htmlfor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <label htmlfor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div>
              <label htmlfor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                required
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </fieldset>
          <label htmlfor="requests">Special Requests</label>
          <textarea
            id="requests"
            name="requests"
            rows="4"
            placeholder="Type your message..."
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
          ></textarea>
          <button type="submit" onClick={handleReserve}>
            Reserve a Table
          </button>
        </form>
      </div>
    </div>
  );
}
export default BookTable;
