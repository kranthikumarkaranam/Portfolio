import React, { useEffect } from 'react';
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Projects from "./components/projects/Projects"
// import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  useEffect(() => {
    let docTitle = document.title;

    const handleBlur = () => {
      document.title = "Come Back.. 😥";
    };

    const handleFocus = () => {
      document.title = docTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App