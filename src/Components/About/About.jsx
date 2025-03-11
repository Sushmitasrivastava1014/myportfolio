import React from "react";
import "./About.css"; // Import CSS file

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h3 className="about-heading">About</h3>
          <h1 className="about-title">
            Hi, I'm <span>Sushmita Srivastava.</span>
            <br />
            Please take a look around.
          </h1>
        </div>
        <div className="about-right">
          <p>
            I am passionate about building excellent web applications that
            improve the lives of those around me. I specialize in creating
            interactive, responsive, and user-friendly web applications for
            clients. What would you do if you had a software expert available at
            your fingertips?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
