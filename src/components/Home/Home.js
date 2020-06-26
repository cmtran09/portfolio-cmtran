import React from 'react'

import 'bulma/css/bulma.css'
// import '../styles/styles.scss'

export default function Home() {
  return (
    <section className="section">
      <div className="container main-wrapper">
        <div className="container header-wrapper">
          <div className="level header is-mobile">
            <p className="level-left">Portfolio</p>
            <p className="level-item">2020</p>
            <p className="level-right">London</p>
          </div>
        </div>
        <h1 className="name">
          Cuong Tran
        </h1>
        <div class="columns main-column is-mobile">
          <div class="column is-three-quarters">
            <p className="about">
              I'm a Junior Software Engineer from London, recently graduated at General Assembly.
              Here are some pieces of my work. Hope you enjoy having a look.
            </p>
          </div>
          <div class="column">
            <ul className="social-links">
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>CodeWars</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
