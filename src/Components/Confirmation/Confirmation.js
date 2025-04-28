import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import backicon from "../../icons_assets/icons-back-35.png";
import tickmark from "../../icons_assets/mark_16020067.png";
import Mobnav from "../Mobnav/Mobnav";
import { useNavigate } from "react-router-dom";
import "./Confirmation.css";
function Confirmation() {
  const navigate = useNavigate();
  const backClick = () => {
    window.history.back();
  };
  return (
    <div>
      <div className="C-header">
        <Header />
      </div>
      <div className="C-nav">
        <Nav />
      </div>
      <div className="C-mobnav">
        <Mobnav />
      </div>
      <div className="backicon2">
        <img src={backicon} alt="backicon" onClick={backClick} />
      </div>
      <div className="Ct">
        <img src={tickmark} width="50px" height="50px" />
        <h2>Table Reserved</h2>
        <h3>Thank You</h3>
        <p>
          Your table has been successfully booked. We look forward to serving
          you!
        </p>
      </div>
      <button onClick={() => navigate("/")}>Back To HomePage</button>
    </div>
  );
}
export default Confirmation;
