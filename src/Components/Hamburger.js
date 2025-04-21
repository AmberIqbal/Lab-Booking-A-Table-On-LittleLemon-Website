import React from "react";
import hamburgericon from "../icons_assets/iconhamburgermenu.svg";
function Hamburger() {
  return (
    <div className="hamburger">
      <button>
        <img src={hamburgericon} />
      </button>
    </div>
  );
}
export default Hamburger;
