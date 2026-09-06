import { useState, useEffect } from "react"
import projects_data from "../../data/projects"
import { FaGithub } from "react-icons/fa"
import "./Proyect.css"

const Proyect = () => {
  return (
    <section id="project" className="proyects section">
      <div className="section-head center">
        <span className="section-kicker">Portfolio</span>
        <h2 className="section-title">
          Selected <span className="accent">projects</span>
        </h2>
        <p className="section-sub">
          Product and research work across inventory, document management, and academic systems.
        </p>
      </div>
      <div className="proyects-grid">
        {projects_data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (project.img && project.img.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.img.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [project.img])

  return (
    <article className="proyect-card card">
      <div className="proyect-image-container">
        {project.img && project.img.length > 0 ? (
          <img
            src={project.img[currentImageIndex]}
            alt={`${project.title} screenshot`}
            className="proyect-image"
          />
        ) : (
          <p className="proyect-no-img">No images</p>
        )}
      </div>
      <div className="proyect-content">
        <h3 className="proyect-name">{project.title}</h3>
        <p className="proyect-description">{project.description}</p>
        <p className="proyect-participation">
          <span className="label">Role</span> {project.participation}
        </p>
        <div className="proyect-technologies">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="proyect-links">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="github-link" title="View code">
              <FaGithub size={16} />
              <span>Code</span>
            </a>
          ) : (
            <p className="no-url-message">Private / institutional — source unavailable.</p>
          )}
        </div>
      </div>
    </article>
  )
}

export default Proyect
