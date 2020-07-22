import React, { useRef, useEffect, useState, useMemo } from 'react'
import { TimelineLite, Power3 } from 'gsap'
import ReactPlayer from 'react-player'

import Underline from '../Underline/Underline'

export default function ProjectLink({ projectName, projectLink, projectRepo, projectImage, projectVideo, dateComplete }) {
  const [demoIsActive, setDemoIsActive] = useState(false)
  let githubLink = useRef(null)
  let deployedLink = useRef(null)
  let demoPlay = useRef(null)
  let projectContainer = useRef(null)

  const tl = useMemo(() => new TimelineLite(), [])

  useEffect(() => {
    tl
      .to(demoPlay, { y: 10, opacity: 0, ease: Power3.easeOut })
      .to(githubLink, { y: 10, opacity: 0, ease: Power3.easeOut }, 0.2)
      .to(deployedLink, { y: 10, opacity: 0, ease: Power3.easeOut }, 0.4)
    // tl.reversed(true)
    // console.log(projectContainer, 'projectContainer inside'
  }, [])

  const projectAnimation = () => {
    if (projectContainer.classList.contains('hidden') !== true && demoIsActive === false) {
      console.log("enter")
      return tl.reversed(!tl.reversed())
    }
  }

  const handleMouseLeave = () => {
    console.log("left")
    if (!demoIsActive && projectContainer.classList.contains('hidden') !== true) return tl.reversed(!tl.reversed())
  }

  return (
    <div style={{
      position: 'relative'
    }} ref={elem => projectContainer = elem} className="container project-wrapper hidden" onMouseEnter={() => projectAnimation()} onMouseLeave={() => handleMouseLeave()}>
      <p className="project-name">{projectName} <sup>{dateComplete}</sup></p>
      <div ref={elem => deployedLink = elem} className="deployed-site">
        {projectLink ? <a href={projectLink} target="_blank">Deployed Project</a> : ""}
      </div>
      <div ref={elem => githubLink = elem} className="github-repo">
        {projectRepo ? <a href={projectRepo} target="_blank">GitHub Repo</a> : ""}
      </div>
      <div
        ref={elem => demoPlay = elem}
        onClick={() => {
          setDemoIsActive(!demoIsActive)
          tl.reversed(!tl.reversed())
          // setDemoIsActive(true)
          // tl.pause()
          // // !demoIsActive ? tl.pause() : tl.resume()
          // tl.reversed(false)
        }}
        className="demo-link" style={{ cursor: "pointer" }}>Video Demo
      </div>
      {demoIsActive &&
        <div
          className="demo-wrapper"
          onClick={() => {
            setDemoIsActive(!demoIsActive)
            tl.reversed()
            // tl.resume()
          }}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "9",
            background: "rgba(0, 0, 0, 0.5)"
          }}>
          <span style={{ cursor: "pointer", zIndex: "1222" }} onClick={() => {
            setDemoIsActive(false)
            tl.reversed()
            // tl.resume()
            // tl.reversed(false)
          }}
            className="icon is-large">
            <i className="fas fa-2x fa-times-circle"></i>
          </span>
          <div className="player-wrapper" style={{}}>
            <div className="player-inner" style={{}}>
              <img className="loading-image" src="https://raw.githubusercontent.com/cmtran09/portfolio-cmtran/master/src/images/loading.svg" alt="" />
              <ReactPlayer width='160%' height='160%' className='react-player' url={projectVideo} playing loop />
            </div>
          </div>
        </div>
      }
      <Underline triggerElement="10%" viewport="95%" />
    </div >
  )
}
