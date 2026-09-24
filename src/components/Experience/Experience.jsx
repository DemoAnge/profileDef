import "./Experience.css"
import experience_data from "../../data/experience_data"
import { useI18n } from "../../i18n/LanguageContext"

const Experience = () => {
  const { t } = useI18n()

  return (
    <section id="experience" className="experience section">
      <div className="section-head">
        <span className="section-kicker">{t.experience.kicker}</span>
        <h2 className="section-title">
          {t.experience.title} <span className="accent">{t.experience.accent}</span>
        </h2>
      </div>
      <div className="experience-timeline">
        {experience_data.map((exp) => {
          const copy = t.experience.items[exp.id]
          const trackLabel = t.experience.tracks[exp.track]
          return (
            <article key={exp.id} className="experience-item">
              <div className="experience-marker" aria-hidden />
              <div className="experience-year">{exp.year}</div>
              <div className="experience-details card">
                <div className="experience-heading">
                  <h3 className="experience-role">{copy.title}</h3>
                  {trackLabel && (
                    <span className={`experience-badge track-${exp.track}`}>
                      {trackLabel}
                    </span>
                  )}
                </div>
                <p className="experience-description">{copy.description}</p>
                <div className="experience-technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
