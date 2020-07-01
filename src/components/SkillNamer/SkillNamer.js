import React, { useEffect } from 'react'

export default function SkillNamer({ skill, skillLabelRef }) {
  return (
    <div className="skill-namer" ref={skillLabelRef}>
      <p className="skill-text">{skill ? skill : ""}</p>
    </div>
  )
}
