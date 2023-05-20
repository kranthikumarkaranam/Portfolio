import React from 'react'
import "./services.css"
import {BsCheckAll} from "react-icons/bs"

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* ========== UI/UX Designer ========*/}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Designer</h3>
          </div>
          <ul className="service__list">
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Create intuitive & user-friendly interfaces.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Conduct thorough user research & understand needs.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Perform usability tests for seamless experience.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Apply user-centered design for accessibility.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Understand responsive design for all devices.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Collaborate with teams to align goals.</p>
            </li>
          </ul>
        </article>

        {/* ========== Frontend Developer ========*/}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Developer</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Proficient in HTML, CSS, JS.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Develop responsive websites.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Use modern frameworks (React.js, Next.js).</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Git & GitHub for version control.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Integrate frontend & backend.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Optimize performance, speed.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Debug & problem-solving skills.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Cross-browser compatibility.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Collaborate with designers.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Continuous learning, staying updated.</p>
            </li>
          </ul>
        </article>

        {/* ========== Backend Developer ========*/}
        <article className="service">
          <div className="service__head">
            <h3>Backend Developer</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Design scalable architectures.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Develop secure APIs.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Database management skills.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Implement caching strategies.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Optimize performance, speed.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Debug & problem-solving skills.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Collaborate with frontend teams.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Ensure code quality, testing.</p>
            </li>
            
            <li>
            <BsCheckAll className='service__list-icon'/>
            <p>Continuous learning, staying updated.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services