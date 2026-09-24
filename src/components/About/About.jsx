import "./About.css"
import me from "../../assets/me.jpeg"
import { useI18n } from "../../i18n/LanguageContext"

const About = () => {
  const { t } = useI18n()

  return (
    <section id="about" className="about section">
      <div className="section-head">
        <span className="section-kicker">{t.about.kicker}</span>
        <h2 className="section-title">
          {t.about.title} <span className="accent">{t.about.accent}</span>
        </h2>
      </div>

      <div className="about-layout">
        <div className="about-photo-wrap">
          <img src={me} alt="Angel Pilamunga" className="about-photo" />
        </div>

        <div className="about-body card">
          <div className="about-para">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <div className="about-meta">
            <span className="meta-chip">{t.about.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
