import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarCom from "../../components/NavbarCom";

const avatar =
  "https://k-studio-4bb78.web.app/static/media/kareem1.869e263a2b5461e1b65c.jpg";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const handleNavigationProfilePage = () => {
    navigate("/profile");
  };

  return (
    <div>
      <NavbarCom
        show={show}
        avatar={avatar}
        handleNavigationProfilePage={handleNavigationProfilePage}
      />
    </div>
  );
}
