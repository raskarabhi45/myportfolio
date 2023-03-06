//rafce shortcut
import React from "react";
import "./about.css";
import ME from "../../assets/abhi.jpg";
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {TbCertificate} from 'react-icons/tb'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">

          <article
          className="about__card">
          <FaAward className="about__icon"/>
            <h5>Activities</h5>
            <a href="#education"><small>In various clubs</small></a>
          </article>

          <article
          className="about__card">
          <TbCertificate className="about__icon"/>
            <h5>Achievements</h5>
            <small>Certificates</small>
          </article>

          <article
          className="about__card">
          <VscFolderLibrary className="about__icon"/>
            <h5>Projects</h5>
            <a href="#portfolio"><small>Portfolio</small></a>
          </article>
          </div>

          <p>

Seeking a responsible position in an organization, which gives me chance to improve knowledge, enhance my skills and enable me to strive towards the overall development of the organization.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
