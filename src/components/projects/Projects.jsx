import React from 'react'
import "./projects.css"
import ExpenseTracker from "../../assets/Expense Tracker.jpg"
import ReactMeals from "../../assets/React-Meals.png"
import Authify from "../../assets/Authify.png"
import UserData from "../../assets/user-data.png"
import CourseGoals from "../../assets/course-goals.png"
import DoctorsSearchWebsite from "../../assets/Doctors-Search-Website.png"
import ToDoListApp from "../../assets/To-Do-List-App.png"


{/* ========= DATA ARRAY ========= */}
const data = [
  {
    id: 1,
    image: ExpenseTracker,
    title: "Expense Tracker",
    github: "https://github.com/kranthikumarkaranam/expense-tracker",
    demo: "https://kranthikumarkaranam.github.io/expense-tracker/"
  },

  {
    id: 2,
    image: ReactMeals,
    title: "React Meals",
    github: "https://github.com/kranthikumarkaranam/react-meals",
    demo: "https://kranthikumarkaranam.github.io/react-meals/"
  },

  {
    id: 3,
    image: DoctorsSearchWebsite,
    title: "Doctors Search Website",
    github: "https://github.com/kranthikumarkaranam/Doctors-Search-Website",
    demo: "https://doctors-appointment-5427.000webhostapp.com/"
  },
  
  {
    id: 4,
    image: UserData,
    title: "User Data",
    github: "https://github.com/kranthikumarkaranam/user-data",
    demo: "https://kranthikumarkaranam.github.io/user-data/"
  },

  {
    id: 5,
    image: CourseGoals,
    title: "Course Goals",
    github: "https://github.com/kranthikumarkaranam/course-goals",
    demo: "https://kranthikumarkaranam.github.io/course-goals/"
  },

  {
    id: 6,
    image: Authify,
    title: "Authify",
    github: "https://github.com/kranthikumarkaranam/authify",
    demo: "https://kranthikumarkaranam.github.io/authify/"
  },

  {
    id: 7,
    image: ToDoListApp,
    title: "To Do List App",
    github: "https://github.com/kranthikumarkaranam/ToDoList-App",
    demo: "https://kranthikumarkaranam.github.io/ToDoList-App/"
  }
]


function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {/* ========= USING ARRAY MAP METHOD ========= */}
        {
          data.map( ({id, image, title, github, demo}) => {
            return (
              <article key={id} className="projects__item">
                <div className="projects__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="projects__item-cta">
                  <a href={github} target="_blank" rel="noopener noreferrer" className="btn">Github</a>
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects