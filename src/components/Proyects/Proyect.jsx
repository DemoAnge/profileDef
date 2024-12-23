import React from 'react'
import projects_data from "../../data/projects"
import github from "../../assets/github.svg"
import "./Proyect.css"

const Proyect = () => {
  return (
    <div className="proyects-container">
      <h1 className="proyects-title">Projects</h1>
      <div className="proyects-grid">
        {projects_data.map((project, index) => (
          <div key={index} className="proyect-card">
            <div className="proyect-image-container">
            <div className="proyect-title-overlay">
                <h2>{project.title}</h2>
              </div>

              <img
                src={project.img[0]}
                alt={project.title}
                className="proyect-image"
              />
              
            </div>
            <div className="proyect-content">
              <p className="proyect-description">{project.description}</p>
              <p className="proyect-participation">{project.participation}</p>
              <div className="proyect-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="proyect-links">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon"
                  >
                    <img src={github} alt="GitHub Link" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proyect