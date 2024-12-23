import React from 'react'
import "./Experience.css"
import experience_data from '../../data/experience_data'

const Experience = () => {
  return (
<div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-list">
        {experience_data.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-year">{exp.year}</div>
            <div className="experience-details">
              <h2 className="experience-role">{exp.title}</h2>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-technologies">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Experience