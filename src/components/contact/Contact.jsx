import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsWhatsapp} from "react-icons/bs"

/* ========= EMAILJS ========= */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3lwtxfy', 'template_rca3dte', form.current, 'ix_uQftQBG8pbYD9c')
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* ========= CONTACT OPTIONS ========= */}
        <div className="contact__options">
          <article className="contact__option">
          <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>2019271@iiitdmj.ac.in</h5>
            <a href="mailto:2019271@iiitdmj.ac.in" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9542705427</h5>
            <a href="https://web.whatsapp.com/send?phone=+919542705427" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        {/* ========= CONTACT FORM ========= */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="Name" placeholder="Your Full Name" required/>
          <input type="email" name="EmailD" placeholder="Your Email" required/>
          <textarea name="Message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact