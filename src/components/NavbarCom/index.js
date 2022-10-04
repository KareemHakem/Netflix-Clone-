import React from "react";

import Image from "../../assets/netflixImage.png";
import "./style.css";

function NavbarCom({ show, image, avatar, handleNavigationProfilePage }) {
  return (
    <div className={`navbar ${show && "nav-black"}`}>
      <div className="nav-contents">
        <img src={Image} alt="imageLogoNetflix" className="nav-logo" />
        <img
          src={Image}
          alt="avatar"
          className="nav-avatar-logo"
          onClick={handleNavigationProfilePage}
        />
      </div>
    </div>
  );
}

export default NavbarCom;
