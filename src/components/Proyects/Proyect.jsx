import React, { useState, useEffect } from "react";
import projects_data from "../../data/projects";
import github from "../../assets/socialmedia/git2.png";
import "./Proyect.css";
import logo_path from "../../assets/dragon.svg";

const Proyect = () => {
  return (
    <div id="project" className="proyects-container">
      <div className="proyects-title">
        <h1>Projects</h1>
        <img src={logo_path} alt="Logo" />
      </div>

      <div className="proyects-grid">
        {projects_data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.img && project.img.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.img.length);
      }, 3000); // Cambia la imagen cada 3 segundos
      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
  }, [project.img]);

  return (
    <div className="proyect-card">
      <div className="proyect-titlecard">
        <h1>{project.title}</h1>
      </div>
      <div className="proyect-image-container">
        {project.img && project.img.length > 0 ? (
          <img
            src={project.img[currentImageIndex]}
            alt={`Project ${project.title} - Image ${currentImageIndex + 1}`}
            className="proyect-image"
          />
        ) : (
          <p>No images available</p>
        )}
      </div>
      <div className="proyect-content">
        <h1>Description:</h1>
        <p className="proyect-description">{project.description}</p>
        <h1>Participation:</h1>
        <p className="proyect-participation">{project.participation}</p>
        <h1>Technologies:</h1>
        <div className="proyect-technologies">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="pro-technology-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="proyect-links">
          <div className="links-title">
          <h1>Code:</h1>

          </div>
          
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon"
            >
              <img src={github} alt="GitHub Link" />
            </a>
          ) : (
            <h3 className="no-url-message">
              Due to institutional security policies, no further information can be provided.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proyect;
