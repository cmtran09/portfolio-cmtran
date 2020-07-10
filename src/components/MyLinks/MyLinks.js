import React, { useEffect, useRef } from 'react'
import { gsap, TweenMax, TimelineLite, Power3, Sine } from 'gsap'


export default function MyLinks({ linkAddress, linkTo }) {
  let link = useRef(null)
  let tl = new TimelineLite({ paused: true })

  // Mouseenter function
  const enterAnimation = () => {
    tl.tweenFromTo(0, "midway")
  }

  // Mouseleave function
  const leaveAnimation = () => {
    tl.play()
  }

  useEffect(() => {
    const linkUnderline = link.children[0].children[0].children[0]
    console.log(linkUnderline, 'linkUnderline')
    tl.fromTo(linkUnderline, { width: "0%", left: "0%", }, { width: "100%", duration: 1, })
    tl.add("midway");
    tl.fromTo(linkUnderline, { width: "100%", left: "0%", }, { width: "0%", left: "100%", duration: 1, immediateRender: false })
  }, [])

  return (
    <div ref={elem => link = elem} className="link-container" onMouseEnter={() => enterAnimation()} onMouseLeave={() => leaveAnimation()}>
      <li>
        <a href={linkAddress}>{linkTo}
          <span className="underline"></span>
        </a>
      </li>
    </div>
  )
}
