import "./Experience.css"
import experience_data from "../../data/experience_data"

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="section-head">
        <span className="section-kicker">04</span>
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="experience-list">
        {experience_data.map((exp, index) => (
          <article key={index} className="experience-item glass-card">
            <div className="experience-year mono">{exp.year}</div>
            <div className="experience-details">
              <h3 className="experience-role">{exp.title}</h3>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-technologies">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag mono">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
