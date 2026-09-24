import "./Skills.css"
import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa"
import { SiAngular, SiDjango, SiTailwindcss, SiMysql } from "react-icons/si"
import { useI18n } from "../../i18n/LanguageContext"

const tools = [
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
  { name: "Django", Icon: SiDjango, color: "#44B78B" },
  { name: "Python", Icon: FaPython, color: "#3776AB" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
]

const Skills = () => {
  const { t } = useI18n()

  return (
    <section id="skill" className="skills section">
      <div className="section-head center">
        <span className="section-kicker">{t.skills.kicker}</span>
        <h2 className="section-title">
          {t.skills.title} <span className="accent">{t.skills.accent}</span>
        </h2>
        <p className="section-sub">{t.skills.sub}</p>
      </div>

      <div className="skills-icons">
        {tools.map(({ name, Icon, color }) => (
          <div key={name} className="skill-icon-card card" title={name}>
            <Icon className="skill-icon" size={28} style={{ color }} aria-hidden />
            <span className="skill-icon-label">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
