import React from 'react'
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BsImages } from "react-icons/bs"
import { TbMessage } from "react-icons/tb"
import { useState, useEffect } from 'react'


// defining a functional component Nav
function Nav() {
    // declaring a state variable activeNav and a function to set its value
    const [activeNav, setActiveNav] = useState("")

    // useEffect hook to handle scroll event
    useEffect(() => {
        // defining a function handleScroll to determine the current active navigation
        const handleScroll = () => {
            // selecting all the section elements on the page
            const sections = document.querySelectorAll('section');
            // getting the current scroll position
            const scrollPosition = window.pageYOffset;

            // iterating over each section element to find the active one
            sections.forEach(section => {
                // getting the top position of the section element
                const sectionTop = section.offsetTop;
                // getting the height of the section element
                const sectionHeight = section.clientHeight;

                // checking if the scroll position is within the section element
                if (scrollPosition >= sectionTop - sectionHeight / 5 && scrollPosition < sectionTop + sectionHeight) {
                    // if the section element is active, setting the activeNav state to its ID
                    setActiveNav(section.getAttribute('id'));
                }
            });
        };

        // adding the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // rendering the navigation bar with links to different sections of the page
    return (
        <nav>
            <a href="#home" className={activeNav === "home" ? "active" : ""}><AiOutlineHome /></a>
            <a href="#about" className={activeNav === "about" ? "active" : ""}><BiUserCircle /></a>
            <a href="#experience" className={activeNav === "experience" ? "active" : ""}><BiBook /></a>
            <a href="#services" className={activeNav === "services" ? "active" : ""}><RiServiceLine /></a>
            <a href="#projects" className={activeNav === "projects" ? "active" : ""}><BsImages /></a>
            <a href="#contact" className={activeNav === "contact" ? "active" : ""}><TbMessage /></a>
        </nav>
    )
}

export default Nav