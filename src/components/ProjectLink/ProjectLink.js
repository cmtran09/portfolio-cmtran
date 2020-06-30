import React from 'react'

export default function ProjectLink(props) {
  console.log('props',props)
  return (
    <div className="container project-wrapper">
      <p className="project-name">{props.projectName}</p>
    </div>
  )
}
