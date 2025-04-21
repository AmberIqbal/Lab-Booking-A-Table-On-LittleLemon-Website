import React from "react";
import { Link } from "react-router-dom";
import basket from "../icons_assets/basket .svg";
import Hamburger from "./Hamburger";

function Nav() {
  return (
    <nav>
      <div className="navigation">
        <div className="hamburger">
          <Hamburger />
        </div>
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
    </nav>
  );
}
export default Nav;
