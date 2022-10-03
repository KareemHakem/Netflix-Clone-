import React from "react";

import Image from "../../assets/netflixImage.png";
import "./style.css";

function NavbarCom({ show, image, avatar }) {
  return (
    <div className={`navbar ${show && "nav-black"}`}>
      <div className="nav-contents">
        <img src={Image} alt="imageLogoNetflix" className="nav-logo" />
        <img src={avatar} alt="avatar" className="nav-avatar-logo" />
      </div>
    </div>
  );
}

export default NavbarCom;
