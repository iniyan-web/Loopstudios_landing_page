import React from "react";
import Nav from "./Nav";
import logo from "../images/logo.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinIcon from "../images/icon-pinterest.svg";
import instaIcon from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <img className="footer-logo" src={logo} alt="Home." />
        <div className="footer-icons">
          <div className="footer-icon">
            <img className="icon" src={facebookIcon} alt="Facebook profile." />
          </div>
          <div className="footer-icon">
            <img className="icon" src={twitterIcon} alt="Twitter profile." />
          </div>
          <div className="footer-icon">
            <img className="icon" src={pinIcon} alt="Pinterest profile." />
          </div>
          <div className="footer-icon">
            <img className="icon" src={instaIcon} alt="Instagram profile." />
          </div>
        </div>
        <Nav />
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
