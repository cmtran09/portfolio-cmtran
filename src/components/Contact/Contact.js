import React, { useRef, useEffect } from 'react'
import { TimelineLite, TweenMax, Power3 } from 'gsap'

import Underline from '../Underline/Underline'

export default function Contact() {
  let contactContainer = useRef(null)

  let tl = new TimelineLite()

  useEffect(() => {
    let contactHeader = contactContainer.children[0]
    let firstContactLine = contactHeader.nextSibling
    let secondContactLine = firstContactLine.nextSibling
    let thirdContactLine = secondContactLine.nextSibling
    console.log(contactHeader, 'contactHeader')
    console.log(firstContactLine, 'firstContactLine')
    console.log(firstContactLine.children[0], 'firstContactLineCHILDRE')
    console.log(secondContactLine, 'secondContactLine')
    console.log(thirdContactLine, 'thirdContactLine')
    // TweenMax.from([contactHeader.children[0], firstContactLine.children[0], secondContactLine.children[0], thirdContactLine.children[0]], 0.3, {
    //   scrollTrigger: {
    //     trigger: contactHeader,
    //     start: "top 80%",
    //     markers: true,
    //     // scrub: true
    //   },
    //   // display: 'hidden',
    //   y: "-5vw",
    //   // opacity: 0,
    // }, 0.1)


    // tl.from(firstContactLine.children[0], 0.3, {
    //   scrollTrigger: {
    //     trigger: contactHeader,
    //     start: "top 60%",
    //     markers: true,
    //     // scrub: true
    //   },
    // }, 0.1)

    // tl({
    //   scrollTrigger: {
    //     trigger: contactHeader,
    //     start: "top 60%",
    //   }
    // })
    //   // Contact header animation
    //   .from(contactHeader, 1.2, { y: 800, ease: Power3.easeOut }, 0.2)
    //   // Contact Line content animation
    //   .from(firstContactLine.children, 0.8, { y: "5vw", ease: Power3.easeOut }, 0.9)
    //   .from(secondContactLine.children, 0.8, { y: "5vw", ease: Power3.easeOut }, 0.9)
    //   .from(thirdContactLine.children, 0.8, { y: "5vw", ease: Power3.easeOut }, 0.9)

    TweenMax.from([contactHeader, firstContactLine.children, secondContactLine.children, thirdContactLine.children], 1, {
      scrollTrigger: {
        trigger: contactHeader,
        start: "top 60%",
        markers: true,
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
      <div className="contact-line-container"><p className="about">End/Fullstack role in London. Feel free to drop me a LinkedIn message </p></div>
      <div className="contact-line-container"><p className="about">or email at cuomantran@gmail.com.</p></div>
      {/* <p className="about">
        I am currently looking for a Junior Software Engineer/Front-End/Fullstack role in London. Feel free to drop me a LinkedIn message or email at cuomantran@gmail.com.
    </p> */}
      <Underline triggerElement="10px" viewport="100%" lineStyles={{ height: "15px" }} />
    </div>
  )
}