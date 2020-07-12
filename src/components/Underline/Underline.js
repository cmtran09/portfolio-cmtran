import React, { useRef, useEffect } from 'react'
import { TweenMax } from 'gsap'

export default function Underline({ triggerElement, viewport, lineStyles, last }) {
  let underline = useRef(null)

  useEffect(() => {
    TweenMax.from(underline, 2.5, {
      scrollTrigger: {
        trigger: underline,
        start: `${triggerElement} ${viewport}`,
        end: "+=40vw",
        // markers: !last ? false : true,
        // scrub: !last ? true : 1
        scrub:  1
      },
      width: 0,
    }, 0.1)
  }, [])
  return (
    <span
      style={lineStyles}
      ref={elem => underline = elem} className="header-underline"></span>
  )
}
