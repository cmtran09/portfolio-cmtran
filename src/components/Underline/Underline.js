import React, { useRef, useEffect } from 'react'
import { TweenMax } from 'gsap'

export default function Underline({triggerElement, viewport}) {
  let underline = useRef(null)

  useEffect(() => {
    TweenMax.from(underline, 2.5, {
      scrollTrigger: {
        trigger: underline,
        start: `${triggerElement} ${viewport}`,
        markers: true,
        // scrub: true
      },
      width: 0,
    }, 0.1)
  }, [])
  return (
    <span ref={elem => underline = elem} className="header-underline"></span>
  )
}
