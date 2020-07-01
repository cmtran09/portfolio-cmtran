import React, { useRef, useEffect } from 'react'
import { TimelineLite, Power3 } from 'gsap'

export default function ProjectLink({ projectName, projectLink, projectRepo }) {
  let githubLink = useRef(null)
  let deployedLink = useRef(null)
  const tl = new TimelineLite()

  useEffect(() => {
    tl.from(deployedLink, { y: 10, opacity: 0, ease: Power3.easeOut })
      .from(githubLink, { y: 10, opacity: 0, ease: Power3.easeOut }, 0.3)
    tl.reversed(true)
  }, [])

  const projectAnimation = () => {
    tl.reversed(!tl.reversed())
  }
  return (
    <div className="container project-wrapper" onMouseOver={() => projectAnimation()} onMouseLeave={() => projectAnimation()}>
      <p className="project-name">{projectName}</p>
      <div ref={elem => deployedLink = elem} className="deployed-site">deployed</div>
      <div ref={elem => githubLink = elem} className="github-repo">github</div>
    </div>
  )
}
