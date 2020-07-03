import React, { useRef, useEffect, useState } from 'react'
import { TimelineLite, Power3 } from 'gsap'
import ReactPlayer from 'react-player'

export default function ProjectLink({ projectName, projectLink, projectRepo, projectImage, projectVideo }) {
  let githubLink = useRef(null)
  let deployedLink = useRef(null)
  let demoPlay = useRef(null)
  let projectContainer = useRef(null)
  let videoContainer = useRef(null)
  const tl = new TimelineLite()

  const [demoIsActive, setDemoIsActive] = useState(false)

  useEffect(() => {
    tl.from(deployedLink, { y: 10, opacity: 0, ease: Power3.easeOut })
      .from(githubLink, { y: 10, opacity: 0, ease: Power3.easeOut }, 0.3)
      .from(demoPlay, { y: 10, opacity: 0, ease: Power3.easeOut }, 0.6)
    tl.reversed(true)
    // console.log(projectContainer, 'projectContainer inside'
  }, [])

  console.log(projectContainer, 'projectContainer')

  const projectAnimation = () => {
    if (projectContainer.classList.contains('hidden') !== true) {
      tl.reversed(!tl.reversed())
    } return
  }
  return (
    <div style={{
      position: 'relative'
    }} ref={elem => projectContainer = elem} className="container project-wrapper hidden" onMouseEnter={() => projectAnimation()} onMouseLeave={() => projectAnimation()}>
      <p className="project-name">{projectName}</p>
      <div ref={elem => deployedLink = elem} className="deployed-site">deployed</div>
      <div ref={elem => githubLink = elem} className="github-repo">github</div>
      <div ref={elem => demoPlay = elem} onClick={() => setDemoIsActive(!demoIsActive)} className="github-repo">demo</div>
      {demoIsActive &&
        <div className="demo-wrapper" onClick={() => setDemoIsActive(!demoIsActive)} style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "9",
          background: "rgba(0, 0, 0, 0.5)"
        }}>
          <div style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "25vh"
            // transform: "translateY(-50%)",
          }}>
            <ReactPlayer url={projectVideo} playing loop />
          </div>
        </div>
      }
      {/* <img src={projectImage} alt=""/> */}
      {/* <div ref={elem => videoContainer = elem} className="video-container"
        style={{
          position: 'absolute',
          // top: '0px'
          top: '0px',
          right: '-650px',
          minHeight: '100px',
          zIndex: -1,
        }}>
        <video autoPlay loop>
          <source src={projectVideo} type="video/mp4" />
        </video>
      </div> */}
    </div >
  )
}
