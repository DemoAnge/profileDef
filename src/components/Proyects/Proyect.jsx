import { useState, useEffect } from "react"
import projects_data from "../../data/projects"
import { FaGithub } from "react-icons/fa"
import "./Proyect.css"
import { useI18n } from "../../i18n/LanguageContext"

const Proyect = () => {
  const { t } = useI18n()

  return (
    <section id="project" className="proyects section">
      <div className="section-head center">
        <span className="section-kicker">{t.projects.kicker}</span>
        <h2 className="section-title">
          {t.projects.title} <span className="accent">{t.projects.accent}</span>
        </h2>
        <p className="section-sub">{t.projects.sub}</p>
      </div>
      <div className="proyects-grid">
        {projects_data.map((project) => (
          <ProjectCard key={project.id} project={project} copy={t.projects} />
        ))}
      </div>
    </section>
  )
}

const hasRepoUrl = (url) => typeof url === "string" && url.trim().length > 0

const ProjectCard = ({ project, copy }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const item = copy.items[project.id]

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
            alt={`${item.title} screenshot`}
            className="proyect-image"
          />
        ) : (
          <p className="proyect-no-img">{copy.noImages}</p>
        )}
      </div>
      <div className="proyect-content">
        <h3 className="proyect-name">{item.title}</h3>
        <p className="proyect-description">{item.description}</p>
        <p className="proyect-participation">
          <span className="label">{copy.role}</span> {item.participation}
        </p>
        <div className="proyect-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="proyect-links">
          {hasRepoUrl(project.url) ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="github-link" title={copy.code}>
              <FaGithub size={16} />
              <span>{copy.code}</span>
            </a>
          ) : (
            <p className="no-url-message">{copy.private}</p>
          )}
        </div>
      </div>
    </article>
  )
}

export default Proyect
