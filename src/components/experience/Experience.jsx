import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
      {/* ========== EXPERIENCE FRONTEND ========*/}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>UI/UX</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML5</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS3</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>ES6+ JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>NextJS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>

      {/* ========== EXPERIENCE BACKEND ========*/}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Express JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>REST API</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>GraphQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Django</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>jQuery</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Dev Ops</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience