import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {IoLogoTwitter} from "react-icons/io"

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">KRANTHI</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/kranthikumarkaranam/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/___kranthi_sm__/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
        <a href="https://twitter.com/kRanTHi_sM" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KRANTHI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer