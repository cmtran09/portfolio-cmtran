import React, { useRef, useEffect } from 'react'
import { TimelineLite, TweenMax, Power3 } from 'gsap'

import Underline from '../Underline/Underline'

export default function Contact() {
  let contactContainer = useRef(null)

  useEffect(() => {
    let contactHeader = contactContainer.children[0]
    let firstContactLine = contactHeader.nextSibling
    let secondContactLine = firstContactLine.nextSibling
    let thirdContactLine = secondContactLine.nextSibling

    console.log(contactContainer,'contactContainer')

    TweenMax.from([contactHeader, firstContactLine.children, secondContactLine.children, thirdContactLine.children], 1, {
      scrollTrigger: {
        trigger: contactContainer,
        start: "20vw 90%",
        end: "+=120vw",
        // markers: true,
        scrub: 1
      },
      x: 80,
      stagger: 0.1,
      opacity: 0,
    }, 0.1)
  }, [])

  return (
    <div ref={elem => contactContainer = elem} className="container contact-wrapper">
      <h1 className="contact">Contact</h1>
      <div className="contact-line-container"><p className="about">I am currently looking for a Junior Software Engineer/Front-</p></div>
      <div className="contact-line-container"><p className="about">End/Fullstack role in London. Feel free to drop me a LinkedIn  </p></div>
      <div className="contact-line-container"><p className="about">message or email at cuomantran@gmail.com.</p></div>
      {/* <p className="about">
        I am currently looking for a Junior Software Engineer/Front-End/Fullstack role in London. Feel free to drop me a LinkedIn message or email at cuomantran@gmail.com.
    </p> */}
      <Underline triggerElement="-100vw" viewport="90%" lineStyles={{ height: "15px" }} last={true}/>
    </div>
  )
}