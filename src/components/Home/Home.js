import React, { useState, useEffect, useRef } from 'react'
import { gsap, TweenMax, TimelineLite, Power3, Sine } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import 'bulma/css/bulma.css'
// import '../styles/styles.scss'

import ProjectLink from '../ProjectLink/ProjectLink'
import SkillIcons from '../SkillIcons/SkillIcons'
import MyLinks from '../MyLinks/MyLinks'
import Underline from '../Underline/Underline'
import Contact from '../Contact/Contact'

export default function Home() {
  const [skill, setSkill] = useState('')
  let main = useRef(null)
  let header = useRef(null)
  let name = useRef(null)
  let aboutContent = useRef(null)
  let myLinks = useRef(null)

  let skillIcons = useRef(null)

  let projects = useRef(null)
  let tl = new TimelineLite()

  useEffect(() => {
    //Header vars
    const header1 = header.children[0].children[0].children[0]
    const header2 = header.children[0].children[1].children[0]
    const header3 = header.children[0].children[2].children[0]
    const headerUnderline = header.children[0].children[3]
    //Name vars
    const myName = name.firstElementChild
    //Link vars
    const firstLink = myLinks.children[0]
    const secondLink = firstLink.nextSibling
    const thirdLink = secondLink.nextSibling
    //About Line Vars
    const firstAboutLine = aboutContent.children[0]
    const secondAboutLine = firstAboutLine.nextSibling
    const thirdAboutLine = secondAboutLine.nextSibling
    const fourthAboutLine = thirdAboutLine.nextSibling
    const fifthAboutLine = fourthAboutLine.nextSibling

    //Remove Initial Flash
    TweenMax.to(main, 0, { css: { visibility: 'visible' } })
    // Name animation
    tl
      .from([header1, header2, header3], 0.8, { y: "5vw", ease: Power3.easeOut }, 0)
      .from(headerUnderline, 3, { width: 0, ease: Power3.easeOut }, 0)

      .from(myName, 2, { opacity: 0, ease: Sine.easeOut }, 0.1)
      .from(myName, 1.2, { y: 800, ease: Power3.easeOut }, 0.2)
      // About animation
      .from(firstAboutLine.children, 0.8, { y: "5vw", ease: Power3.easeOut }, 0.9)
      .from(secondAboutLine.children, 0.8, { y: "5vw", ease: Power3.easeOut }, 0.9)
      .from(thirdAboutLine.children, 0.8, { y: "5vw", ease: Power3.easeOut }, 0.9)
      .from(fourthAboutLine.children, 0.8, { y: "5vw", ease: Power3.easeOut }, 0.9)
      .from(fifthAboutLine.children, 0.8, { y: "5vw", ease: Power3.easeOut }, 0.9)
    // Links animation
    tl.staggerFrom([firstLink.children, secondLink.children, thirdLink.children], 0.9, {
      y: "5vw",
      ease: Power3.easeOut,
      delay: 0.3
    }, 0.3)

    //Projects Var
    const projectsArr = projects.children
    for (const [key, value] of Object.entries(projectsArr)) {
      TweenMax.from(value.children[0], 0.3, {
        scrollTrigger: {
          trigger: value,
          start: "top 80%",
          end: "+=100",
          onEnter: () => value.classList.remove('hidden'),
          // onEnterBack: () => value.classList.add('hidden')
          // markers: true,
          scrub: true
        },
        display: 'hidden',
        y: "-5vw",
        stagger: 0.1,
        opacity: 0,
      }, 0.1);
      // console.log(value.children, 'value object')
    }

    //Underline var
    const mainEndUnderline = main.children[0].children[0].lastChild
    console.log(mainEndUnderline)
    TweenMax.from(mainEndUnderline, 3, {
      scrollTrigger: {
        trigger: thirdAboutLine,
        start: "top center",
        // markers: true,
        // scrub: true
      },
      width: 0,
    }, 0.1);
  }, [])

  return (
    <main ref={elem => main = elem} >
      <div class="columns">
        <div class="column is-2 left-main-gutter is-hidden-mobile">
          First column
        </div>
        <div class="column is-10 main-gutter">
          <section className="section">
            <div className="container main-wrapper" >
              <div className="container header-wrapper" ref={elem => header = elem}>
                <div className="level header is-mobile">
                  <div className="header-container"><p className="level-left">Portfolio</p></div>
                  <div className="header-container"><p className="level-item">2020</p></div>
                  <div className="header-container"><p className="level-right">London</p></div>
                  <span className="header-underline"></span>
                </div>
              </div>
              <div className="name-container" ref={elem => name = elem}>
                <h1 className="name">
                  Cuong Tran
            </h1>
              </div>
              <div className="columns main-column is-mobile hero-content">
                <div className="column is-three-quarters is-one-quarter-mobile">
                  <div ref={elem => aboutContent = elem}>
                    <div className="about-line-container"><p className="about">I'm a Software Engineer from London,</p></div>
                    <div className="about-line-container"><p className="about">recently graduated at General Assembly.</p></div>
                    <div className="about-line-container"><p className="about">Here are some pieces of my work </p></div>
                    <div className="about-line-container"><p className="about">and the tech I've come across so far.</p></div>
                    <div className="about-line-container"><p className="about">Hope you enjoy having a look.</p></div>
                    {/* I'm a Software Engineer from London, recently graduated at General Assembly. */}
                    {/* Here are some pieces of my work and the tech I've come across so far. Hope you enjoy having a look. */}
                  </div>
                </div>
                <div className="column">
                  <ul className="links" ref={elem => myLinks = elem}>
                    <MyLinks linkTo="GitHub" linkAddress="https://github.com/cmtran09" />
                    <MyLinks linkTo="LinkedIn" linkAddress="https://uk.linkedin.com/in/cmtran09" />
                    <MyLinks linkTo="CodeWars" linkAddress="https://www.codewars.com/users/cmtran09" />
                  </ul>
                </div>
              </div>
              <span className="header-underline"></span>
              {/* <Underline /> */}
            </div>
          </section>
          <SkillIcons skillIconsRef={skillIcons} />
          <section className="section" ref={elem => projects = elem}>
            <ProjectLink projectName="System Monitor" dateComplete="2020" projectLink="" projectRepo="https://bit.ly/2Yfrk1e" projectVideo='../../video/system-monitor.mp4' projectImage='../../images/tetris.png' />
            <ProjectLink projectName="Socket.io Chatroom" dateComplete="2020" projectLink="https://bit.ly/30xceqU" projectRepo="https://bit.ly/3dTy1wH" projectVideo='../../video/chatroom.mp4' projectImage='' />
            <ProjectLink projectName="Scribble" dateComplete="2020" projectLink="https://bit.ly/2XOcrnG" projectRepo="https://bit.ly/2YfppK4" projectVideo='../../video/scribble.mp4' projectImage='' />
            <ProjectLink projectName="Swell" dateComplete="2019" projectLink="https://bit.ly/37hC43v" projectRepo="https://bit.ly/2XNvD58" projectVideo='../../video/swell.mp4' projectImage='' />
            <ProjectLink projectName="Text Translate" dateComplete="2019" projectLink="https://project-z-text-translate.herokuapp.com/" projectRepo="https://github.com/cmtran09/project-z-text-translate" projectVideo='../../video/text-translate.mp4' projectImage='../../images/tetris.png' />
            <ProjectLink projectName="NBA Comparison" dateComplete="2019" projectLink="https://bit.ly/2MKaMJp" projectRepo="https://bit.ly/2AyMtfk" projectVideo='../../video/nba.mp4' projectImage='../../images/tetris.png' />
            <ProjectLink projectName="PotterAPI Pair" dateComplete="2019" projectLink="https://bit.ly/2XPOQDa" projectRepo="https://bit.ly/3cKaYTK" projectVideo='../../video/potter-pair.mp4' projectImage='' />
            <ProjectLink projectName="Vanilla JS Tetris" dateComplete="2019" projectLink="https://bit.ly/3h9tCrD" projectRepo="https://bit.ly/2YjYJYY" projectVideo='../../video/tetris.mp4' projectImage='' />
          </section>
          <section className="section contact-section">
            <Contact />
          </section>
        </div>
      </div>
    </main >
  )
}
