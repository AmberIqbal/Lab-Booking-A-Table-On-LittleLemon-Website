import React from "react";
import assetsFood from "../../icons_assets/restauranfood.jpg";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="main">
        <div className="reserveButton">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are family owned <br />
            Meditarian restaurant, <br />
            focused on tradional <br />
            recipes served with a modern <br />
            twist.
          </p>
          <button onClick={() => navigate("/reservation")}>
            Reserve a Table
          </button>
        </div>
        <div className="chefImg">
          <img src={assetsFood} alt="img" />
        </div>
      </div>
    </main>
  );
}
export default Hero;
