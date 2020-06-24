import React from 'react'

import 'bulma/css/bulma.css'
// import '../styles/styles.scss'

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <div className="container">
          <div className="level header">
            <p className="level-left">Portfolio</p>
            <p className="level-item">2020</p>
            <p className="level-right">London</p>
          </div>
        </div>
        <h1 className="name">
          Cuong Tran
        </h1>
        <p className="title">
          I am a Junior Software Engineer from London, recently graduated from General Assembly. Here are pieces of my work up to this point. I hope you enjoy having a look.
        </p>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>CodeWars</li>
        </ul>
      </div>
    </section>
  )
}
