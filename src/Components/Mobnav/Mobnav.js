import React from "react";
import { useState } from "react";
import logo from "../../icons_assets/Logo.svg";
import { Link } from "react-router-dom";
import hamburgericon from "../../icons_assets/iconhamburgermenu.svg";
import basket from "../../icons_assets/basket .svg";
import "./Mobnav.css";
function Mobnav() {
  const [menuOpen, SetmenuOpen] = useState(false);
  const toggleMenu = () => {
    SetmenuOpen(!menuOpen);
  };
  return (
    <div className="mobileNav">
      <div>
        <img src={hamburgericon} onClick={toggleMenu} />
      </div>

      <div>
        <a className="centerLogo" href="/">
          <img src={logo} alt="Logo" width="220px" height="200px" />
        </a>
      </div>
      <div className="navicon2">
        <a href="/">
          <img className="basket2" src={basket} alt="img" />
        </a>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          {/* Mobile menu items */}
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              {" "}
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">MENU</a>
            </li>
            <li>
              <a href="/">RESERVATION</a>
            </li>
            <li>
              <a href="/">ORDER ONLINE</a>
            </li>
            <li>
              <a href="/">LOGIN</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Mobnav;
