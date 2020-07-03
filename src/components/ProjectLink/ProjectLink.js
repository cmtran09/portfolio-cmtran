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
      {demoIsActive && <ReactPlayer url={projectVideo} />}
      {/* <img src={projectImage} alt=""/> */}
      <div ref={elem => videoContainer = elem} className="video-container"
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
      </div>
    </div>
  )
}
