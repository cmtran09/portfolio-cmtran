import React, { useRef, useState, useEffect } from 'react'
import { TweenMax } from 'gsap'

import SkillNamer from '../SkillNamer/SkillNamer'
import Underline from '../Underline/Underline'

export default function SkillIcons() {
  const [activeSkill, setActiveSkill] = useState('')
  let skillIcons = useRef(null)
  let skillSection = useRef(null)
  let skillLabel = useRef(null)

  const handleIconMouseEnter = (e) => {
    setActiveSkill(e.target.attributes.getNamedItem("skillname").value)
    skillLabel.classList.add('skills-animation')
  }

  const handleIconMouseLeave = (e) => {
    skillLabel.classList.remove('skills-animation')
  }

  useEffect(() => {
    const skillsArr = skillIcons.current.children
    // SKill animation
    TweenMax.from(skillsArr, 0.07, {
      scrollTrigger: {
        trigger: skillSection,
        start: "top 60%",
        markers: true,
        // scrub: true
      },
      x: 80,
      stagger: 0.1,
      opacity: 0,
    }, 0.1);
  }, [])

  return (
    <section className="section skills-section" ref={elem => skillSection = elem}>
      <div className="skill-namer" ref={elem => skillLabel = elem}>
        <p className="skill-text">{activeSkill ? activeSkill : ""}</p>
      </div>
      <div className="container skills-wrapper">
        <ul
          ref={skillIcons}
          className="skills">
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="JavaScript" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/javascript.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="HTML5" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/html5.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="CSS3" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/css3.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Node.js" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/node-dot-js.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Express.js" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"></img></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="React" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/react.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="React Router" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/reactrouter.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Python" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/python.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Django" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/django.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="PostgreSQL" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/postgresql.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Heroku" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/heroku.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="SQLite" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/sqlite.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="MongoDB" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/mongodb.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Git" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/git.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="GitHub" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/github.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Twilio" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/twilio.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Sass" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/sass.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Bulma" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/bulma.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Material-UI" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/material-ui.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Webpack" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/webpack.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Babel" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/babel.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Bootstrap" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/bootstrap.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Recharts/D3.js" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/d3-dot-js.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Redux" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/redux.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Apollo" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/apollographql.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="GraphQL" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/graphql.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="npm" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/npm.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Yarn" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/yarn.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Mocha" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/mocha.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Jest" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/jest.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Socket.io" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/socket-dot-io.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="VSCode" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/visualstudiocode.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Postman" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/postman.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Insomnia" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/insomnia.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="StackOverflow" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/stackoverflow.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Figma" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/figma.svg" /></span>
          <span className="icon"><img onMouseLeave={() => handleIconMouseLeave()} onMouseEnter={e => handleIconMouseEnter(e)} skillname="Greensock" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/greensock.svg" /></span>
        </ul>
        {/* <span className="header-underline"></span> */}
        <Underline triggerElement="10px" viewport="95%" />
      </div>
    </section >
  )
}
