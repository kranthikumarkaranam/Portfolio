import React from 'react'
import "./header.css"
import Resume from "../../assets/Kranthi_CV.pdf"
// import ME from "../../assets/me.jpg"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

function Header() {
  return (
    <header>
      <section id='home'>
        <div className="container header__container">
          <h5 className='text-light'>Hii&nbsp; I'm</h5>
          <h1>Kranthi Kumar</h1>
          <h5 className="text-light">Full Stack Web Developer</h5>
          
          <CTA />

          {/* <div className="me">
            <img src={ME} alt="me" />
          </div> */}

          <a href="#footer" className="scroll__down">Scroll Down</a>

          <Socials />
        </div>
      </section>
    </header>
  )
}

/* ========== BUTTONS ========*/
const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download="Kranthi_CV.pdf" className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

/* ========== SOCIALS ========*/
const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kranthi-kumar-karanam/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/kranthikumarkaranam" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
    </div>
  )
}

export default Header