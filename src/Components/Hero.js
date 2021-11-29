import React, { useState } from "react";
import Nav from "./Nav";
import logo from "../images/logo.svg";
import ham from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Hero = () => {
  const [hamClick, setHamClick] = useState(false);
  const [hamClass, setHamClass] = useState("");

  const validateHamClick = () => {
    setHamClick(!hamClick);
    setHamClass(!hamClick ? "ham-content" : "");
  };

  return (
    <>
      <section className="hero">
        <header>
          <img className="nav-logo" src={logo} alt="Home." />
          <img
            className="ham-menu"
            src={hamClick ? close : ham}
            alt="Hamburger menu."
            onClick={() => validateHamClick()}
          />
          <Nav hamClass={hamClass} />
        </header>
        <h1 className="title">Immersive experiences that deliver</h1>
      </section>
    </>
  );
};

export default Hero;
