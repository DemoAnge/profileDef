import "./heroMe.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import myphoto from "../../assets/me.jpeg"
import { useI18n } from "../../i18n/LanguageContext"

const HeroMe = () => {
  const { t } = useI18n()

  return (
    <section id="home" className="hero section">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker">{t.hero.kicker}</span>
          <h1 className="hero-name">Angel Pilamunga</h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">{t.hero.cta}</a>
            <a href="#project" className="btn-ghost">{t.hero.portfolio}</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/DemoAnge" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/angel-pilamunga-30a758133/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-frame">
            <img src={myphoto} alt="Angel Pilamunga" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroMe
