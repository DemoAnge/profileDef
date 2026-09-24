import "./Services.css"
import { HiOutlineCodeBracket, HiOutlineServerStack, HiOutlineCircleStack } from "react-icons/hi2"
import { useI18n } from "../../i18n/LanguageContext"

const capabilityMeta = [
  { id: "frontend", Icon: HiOutlineCodeBracket },
  { id: "apis", Icon: HiOutlineServerStack },
  { id: "data", Icon: HiOutlineCircleStack },
]

const Services = () => {
  const { t } = useI18n()

  return (
    <section id="services" className="services section">
      <div className="section-head center">
        <span className="section-kicker">{t.services.kicker}</span>
        <h2 className="section-title">
          {t.services.title} <span className="accent">{t.services.accent}</span>
        </h2>
        <p className="section-sub">{t.services.sub}</p>
      </div>

      <div className="services-grid">
        {capabilityMeta.map(({ id, Icon }) => {
          const item = t.services.items[id]
          return (
            <article key={id} className="service-card card">
              <div className="service-icon-wrap" aria-hidden>
                <div className="service-diamond">
                  <Icon size={22} />
                </div>
              </div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-text">{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
