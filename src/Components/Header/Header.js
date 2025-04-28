import React from "react";
import logo from "../../icons_assets/Logo.svg";
import "./Header.css";
function Header() {
  return (
    <header>
      <a className="headerwrapper" href="/">
        <img src={logo} alt="Logo" />
      </a>
    </header>
  );
}
export default Header;
