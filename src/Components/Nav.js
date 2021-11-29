import React from "react";

const Nav = ({ hamClass }) => {
  return (
    <>
      <nav>
        <ul className={`navbar-nav ${hamClass}`}>
          <li className="nav-item"> About</li>
          <li className="nav-item"> Careers</li>
          <li className="nav-item"> Events</li>
          <li className="nav-item"> Products</li>
          <li className="nav-item"> Support</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
