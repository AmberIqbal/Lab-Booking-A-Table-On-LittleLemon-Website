import React from "react";
import bruchetta from "../icons_assets/bruchetta.svg";
import greekSalad from "../icons_assets/greek salad.jpg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";
import motorbike from "../icons_assets/motorbike_6413312.png";
function Highlights() {
  return (
    <div className="menu">
      <div className="orderOnline">
        <div className="specials">
          <h2>This weeks specials!</h2>
        </div>
        <div className="menuButton">
          <button>Online Menu</button>
        </div>
      </div>

      <div className="cards">
        <div className="greekSalad">
          <div className="I1">
            <img src={greekSalad} alt="img" width="300px" height="200px" />
          </div>
          <div className="H1">
            <h3>Greek Salad</h3>
            <div className="P1">$ 12.99</div>
          </div>
          <div className="T1">
            <p>
              The famous greek salad of
              <br />
              crispy lettuce,peppers,olives
              <br />
              and our chicago style feta cheese garnished with
              <br />
              crunchy garlic and rosemary
              <br />
              croutons.
            </p>
          </div>
          <div className="D1">
            <p>Order a delivery</p>
            <div>
              <img src={motorbike} alt="img" width="30px" height="30px" />
            </div>
          </div>
        </div>
        <div className="bruchetta">
          <div className="I2">
            <img src={bruchetta} alt="img" width="300px" height="200px" />
          </div>
          <div className="H2">
            <h3>Bruchetta</h3>
            <div className="P2">$ 5.99</div>
          </div>
          <div className="T2">
            <p>
              Our Bruchetta has made from
              <br />
              grilled bread that has been <br />
              smeared with garlic and
              <br />
              seasoned with salt and olive oil.
            </p>
          </div>
          <div className="D2">
            <p>Order a delivery</p>
            <div>
              <img src={motorbike} alt="img" width="30px" height="30px" />
            </div>
          </div>
        </div>
        <div className="lemonDessert">
          <div className="I3">
            <img src={lemonDessert} alt="img" width="300px" height="200px" />
          </div>
          <div className="H3">
            <h3>Lemon Dessert</h3>
            <div className="P3">$ 5.00</div>
          </div>
          <div className="T3">
            <p>
              This comes straight from
              <br />
              grandma's recipe book every
              <br />
              last ingredient has been
              <br />
              sourced and is as authentic
              <br />
              as can be imagined.
            </p>
          </div>
          <div className="D3">
            <p>Order a delivery</p>
            <div>
              <img src={motorbike} alt="img" width="30px" height="30px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Highlights;
