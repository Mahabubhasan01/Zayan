import React from "react";
import "../../styles/about.css";
import img from "../../assets/avatar-2.svg";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={img} className="about__img" alt="" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Mahbub Hasan, Full stack web developer from Dhaka, Bangladesh. I have
              rich experience in web site design and building and customization,
              also I am good at WordPress.
            </p>
              <a href="" className="btn">Downlaod Resume</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End</h3>
                <span className="skills__number developement">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage">

                </span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back-End</h3>
                <span className="skills__number developement">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage">

                </span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Full Stack</h3>
                <span className="skills__number developement">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage">

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
