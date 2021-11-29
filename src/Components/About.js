import React from "react";
import aboutImg from "../images/desktop/image-interactive.jpg";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-content">
          <img
            className="about-img"
            src={aboutImg}
            alt="A guy in blue shirt using VR glasses."
          />
          <div className="about-text">
            <h2>The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
