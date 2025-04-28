import React from "react";
import { Link } from "react-router-dom";
import basket from "../../icons_assets/basket .svg";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navigation">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">MENU</a>
          </li>
          <li>
            <Link to="/reservation">RESERVATION</Link>
          </li>
          <li>
            <a href="/">ORDER ONLINE</a>
          </li>
          <li>
            <a href="/">LOGIN</a>
          </li>
        </ul>

        <div className="navicon">
          <a href="/">
            <img
              className="basket"
              src={basket}
              alt="img"
              width="30px"
              height="50px"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
