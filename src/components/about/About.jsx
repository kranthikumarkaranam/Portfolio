import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* =========LEFT ========= */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        {/* =========RIGHT ========= */}
        <div className="about__content">
          <div className="about__cards">
            {/* CARD-1 */}
            <article className="about__card">
            <FaAward className='about__card-icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            {/* CARD-2 */}
            <article className="about__card">
            <FiUsers className='about__card-icon'/>
              <h5>Clients</h5>
              <small>4+ Worldwide</small>
            </article>

            {/* CARD-3 */}
            <article className="about__card">
            <VscFolderLibrary className='about__card-icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
          Hello, I'm Kranthi Kumar, a Full Stack Developer specializing in creating exceptional web solutions that you need. 
          Whether it's front-end development or back-end programming, 
          I have the skills and experience necessary to bring any web project to life. 
          My passion lies in delivering high-quality work that exceeds your expectations. 
          Let's work together and turn your vision into a reality.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About