import React from "react";
import whitelogo from "../icons_assets/logo (1).png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          <Link to="/">
            <img
              src={whitelogo}
              alt="Logo"
              width="120px"
              height="150px"
              color="white"
            />
          </Link>
        </div>
        <div className="Openingtime">
          <h2>OPENING TIMES</h2>
          <p>
            Mon-Wed: 10:30 to 12:00 AM
            <br />
            Fri: 12:00 PM to 1:00 AM
            <br />
            Sat-Sun: 10:30 to 12:00 AM.
          </p>
        </div>
        <div className="Contact">
          <h2>CONTACT</h2>
          <p>
            Address: 123 Towncity, USA
            <br /> Phone:+ 0123 456 789 <br />
            Email: little@lemon.com
          </p>
        </div>
        <div className="socialMedia">
          <h2>SOCIAL MEDIA</h2>
          <a href="/">Facebook</a>
          <br />

          <a href="/">Instagram</a>
          <br />

          <a href="/">Twiter</a>
        </div>
      </div>
      <div className="copywrite">
        <p>2025 Little Lemon Ltd.All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
