import React from 'react'
import { projectDecorations } from '../data.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className={'project-card card-' + project.number}>
      <div className="project-bg">{projectDecorations[project.number]}</div>
      <div className="project-top"><span>{project.number}</span><span>SELECTED WORK</span></div>
      <div className="project-shape"><i></i><b></b><em></em></div>
      <h3>{project.name}<strong>.</strong></h3>
      <p className="project-type">{project.type}</p>
      <p className="project-text">{project.text}</p>
      <div className="card-links"><a href={project.github} target="_blank" rel="noreferrer">GITHUB ↗</a>{project.live ? <a href={project.live} target="_blank" rel="noreferrer">LIVE SITE ↗</a> : <span>LIVE: NOT DEPLOYED</span>}</div>
    </article>
  )
}
