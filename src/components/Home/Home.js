import React, { useState, useEffect, useRef } from 'react'
import { gsap, TweenMax, TimelineLite, Power3, Sine } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import 'bulma/css/bulma.css'
// import '../styles/styles.scss'

import ProjectLink from '../ProjectLink/ProjectLink'
import SkillIcons from '../SkillIcons/SkillIcons'
import SkillNamer from '../SkillNamer/SkillNamer'

export default function Home() {
  const [skill, setSkill] = useState('')
  let main = useRef(null)
  let name = useRef(null)
  let content = useRef(null)

  let skillIcons = useRef(null)
  // let skillSection = useRef(null)

  let skillLabel = useRef(null)

  let projects = useRef(null)
  let tl = new TimelineLite()
  let skillNamerTl = new TimelineLite()

  useEffect(() => {
    //Name var
    const myName = name.firstElementChild
    console.log('myName', myName)
    //Link vars
    const firstLink = content.children[2].children[1].children[0].children[0]
    const secondLink = firstLink.nextSibling
    const thirdLink = secondLink.nextSibling


    //Remove Initial Flash
    TweenMax.to(main, 0, { css: { visibility: 'visible' } })
    // Name animation
    tl
      .from(myName, 1.2, { y: 800, ease: Power3.easeOut })
      .from(myName, 2, { opacity: 0, ease: Sine.easeOut }, 0)
    // Links animation
    tl.staggerFrom([firstLink.children, secondLink.children, thirdLink.children], 1, {
      y: 33,
      ease: Power3.easeOut,
      delay: 0.3
    }, 0.3)

    console.log(skillIcons.current, 'parent skillsIcons')
    // skills js var
    // const skillsArr = skillIcons.current.children
    // console.log('skillsArr', skillsArr)
    // console.log('arr', skillIcons.children)

    //SKill animation
    // TweenMax.from(skillsArr, 0.07, {
    //   scrollTrigger: {
    //     trigger: skillSection,
    //     start: "top center",
    //     markers: true,
    //     // scrub: true
    //   },
    //   x: 80,
    //   stagger: 0.1,
    //   opacity: 0,
    // }, 0.1);

    //Projects Var
    const projectsArr = projects.children
    console.log(projectsArr)
    console.log(typeof (projectsArr))
    // TweenMax.from(projectsArr[0], 0.07, {
    //   scrollTrigger: {
    //     trigger: projectsArr[0],
    //     start: "top center",
    //     markers: true,
    //     // scrub: true
    //   },
    //   x: 80,
    //   stagger: 0.1,
    //   opacity: 0,
    // }, 0.1);

    for (const [key, value] of Object.entries(projectsArr)) {
      TweenMax.from(value.children[0], 0.3, {
        scrollTrigger: {
          trigger: value,
          start: "top center",
          markers: true,
          // scrub: true
        },
        y: "-5vw",
        stagger: 0.1,
        opacity: 0,
      }, 0.1);
      console.log(value.children, 'value object')
    }
  }, [])

  // const handleIconMouseEnter = (e) => {
  //   setSkill(e.target.attributes.getNamedItem("skillname").value)
  //   // skillLabel.classList.add('skills-animation')
  // }

  // const handleIconMouseLeave = (e) => {
  //   // skillLabel.classList.remove('skills-animation')
  // }

  return (
    <main ref={elem => main = elem} >
      {/* <SkillNamer skill={skill} skillLabelRef={skillLabel} /> */}
      {/* <div className="skill-namer" ref={elem => skillLabel = elem}>
      <p className="skill-text">{skill ? skill : ""}</p>
    </div> */}
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
      {/* <section className="section skills-section" ref={elem => skillSection = elem}> */}
        {/* <div className="container skills-wrapper"> */}
          <SkillIcons skillIconsRef={skillIcons}
            // handleIconMouseLeave={handleIconMouseLeave} 
            // handleIconMouseEnter={handleIconMouseEnter}
          />
        {/* </div> */}
      {/* </section > */}
      <section className="section" ref={elem => projects = elem}>
        <ProjectLink projectName="Swell" projectLink="swell.com" projectRepo="git.swell" skill={skill} />
        <ProjectLink projectName="Swell" projectLink="swell.com" projectRepo="git.swell" skill={skill} />
        <ProjectLink projectName="Swell" projectLink="swell.com" projectRepo="git.swell" skill={skill} />
        <ProjectLink projectName="Swell" projectLink="swell.com" projectRepo="git.swell" skill={skill} />
        <ProjectLink projectName="Swell" projectLink="swell.com" projectRepo="git.swell" skill={skill} />
        <ProjectLink projectName="Swell" projectLink="swell.com" projectRepo="git.swell" skill={skill} />
        <ProjectLink projectName="Swell" projectLink="swell.com" projectRepo="git.swell" skill={skill} />
        <ProjectLink projectName="Swell" projectLink="swell.com" projectRepo="git.swell" skill={skill} />
      </section>
      <section className="section">
        <div className="container contact-wrapper">
          <h1 className="contact">Contact</h1>
          <p className="about">
            I am currently looking for a Junior Software Engineer/Front-End/Fullstack role in London. Feel free to drop me a LinkedIn message or email at cuomantran@gmail.com.
          </p>
        </div>
      </section>
    </main >
  )
}
