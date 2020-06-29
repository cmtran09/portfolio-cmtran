import React, { useState, useEffect, useRef } from 'react'
import { gsap, TweenMax, TimelineLite, Power3, Sine } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import 'bulma/css/bulma.css'
// import '../styles/styles.scss'

export default function Home() {
  const [skill, setSkill] = useState('')
  let main = useRef(null)
  let name = useRef(null)
  let content = useRef(null)
  let skillIcons = useRef(null)
  let tl = new TimelineLite()

  useEffect(() => {
    //Name var
    const myName = name.firstElementChild
    console.log('myName', myName)
    //Link vars
    const firstLink = content.children[2].children[1].children[0].children[0]
    const secondLink = firstLink.nextSibling
    const thirdLink = secondLink.nextSibling
    // skills js var
    const skillsArr = skillIcons.children
    console.log('arr',skillIcons.children)
    const skillJS = skillIcons.firstElementChild
    const skillhtml5 = skillJS.nextSibling
    console.log(skillJS)
    //Remove Initial Flash
    TweenMax.to(main, 0, { css: { visibility: 'visible' } })
    // Name animation
    tl
      .from(myName, 1.2, { y: 800, ease: Power3.easeOut })
      .from(myName, 2, { opacity: 0, ease: Sine.easeOut }, 0.2)
    // Links animation
    tl.staggerFrom([firstLink.children, secondLink.children, thirdLink.children], 1, {
      y: 33,
      ease: Power3.easeOut,
      delay: 0.4
    }, 0.3)
    //SKill animation
    TweenMax.from(skillsArr, {
      scrollTrigger: {
        trigger: skillsArr,
        start: "bottom center", 
        markers: true
      },
      x: 80
    });
    // TweenMax.from(skillhtml5, {
    //   scrollTrigger: {
    //     trigger: skillhtml5,
    //     start: "bottom center", 
    //     markers: true
    //   },
    //   x: 80
    // });
  }, [])

  const currentSkill = (e) => {
    setSkill(e.target.attributes.getNamedItem("skillname").value)
  }

  return (
    <main ref={elem => main = elem}>
      <div className="skill-namer">
        <p className="skill-text fade-in">{skill ? skill : ""}</p>
      </div>
      <section className="section">
        <div className="container main-wrapper" ref={elem => content = elem}>
          <div className="container header-wrapper">
            <div className="level header is-mobile">
              <p className="level-left">Portfolio</p>
              <p className="level-item">2020</p>
              <p className="level-right">London</p>
            </div>
          </div>
          <div className="name-container" ref={elem => name = elem}>
            <h1 className="name">
              Cuong Tran
            </h1>
          </div>
          <div className="columns main-column is-mobile hero-content">
            <div className="column is-three-quarters">
              <p className="about">
                I'm a Software Engineer from London, recently graduated at General Assembly.
                Here are some pieces of my work. Hope you enjoy having a look.
              </p>
            </div>
            <div className="column">
              <ul className="links">
                <div className="link-container">
                  <li>GitHub</li>
                </div>
                <div className="link-container">
                  <li>LinkedIn</li>
                </div>
                <div className="link-container">
                  <li>CodeWars</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section skills-section">
        <div className="container skills-wrapper">
          {/* <button onClick={e=>console.log(skill)}>click</button> */}
          <ul ref={elem => skillIcons = elem} className="skills">
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="JavaScript" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/javascript.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="HTML5" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/html5.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="html" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/html5.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="CSS3" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/css3.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Node.js" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/node-dot-js.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Express.js" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"></img></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Python" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/python.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Django" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/django.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="PostgreSQL" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/postgresql.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Heroku" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/heroku.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="SQLite" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/sqlite.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="MongoDB" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/mongodb.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Git" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/git.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="GitHub" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/github.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Twilio" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/twilio.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Sass" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/sass.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Bulma" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/bulma.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Material-UI" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/material-ui.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Webpack" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/webpack.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Babel" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/babel.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Bootstrap" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/bootstrap.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Recharts/D3.js" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/d3-dot-js.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Redux" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/redux.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Apollo" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/apollographql.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="GraphQL" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/graphql.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="npm" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/npm.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Yarn" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/yarn.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Mocha" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/mocha.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Jest" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/jest.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Socket.io" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/socket-dot-io.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="VSCode" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/visualstudiocode.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Postman" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/postman.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Insomnia" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/insomnia.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="StackOverflow" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/stackoverflow.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Figma" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/figma.svg" /></span>
            <span className="icon"><img onMouseEnter={e => currentSkill(e)} skillname="Greensock" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/greensock.svg" /></span>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container project-wrapper">
          <p className="project-name">project 1</p>
        </div>
        <div className="container project-wrapper">
          <p className="project-name">project 2</p>
        </div>
        <div className="container project-wrapper">
          <p className="project-name">project 3</p>
        </div>
        <div className="container project-wrapper">
          <p className="project-name">project 4</p>
        </div>
        <div className="container project-wrapper">
          <p className="project-name">project 5</p>
        </div>
        <div className="container project-wrapper">
          <p className="project-name">project 6</p>
        </div>
        <div className="container project-wrapper">
          <p className="project-name">project 7</p>
        </div>
        <div className="container project-wrapper">
          <p className="project-name">project 8</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-wrapper">
          <h1 className="contact">Contact</h1>
          <p className="about">
            I am currently looking for a Junior Software Engineer/Front-End/Fullstack role in London. Feel free to drop me a LinkedIn message or email at cuomantran@gmail.com.
          </p>
        </div>
      </section>
    </main>
  )
}
