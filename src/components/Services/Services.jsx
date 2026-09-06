import "./Services.css"
import { HiOutlineCodeBracket, HiOutlineServerStack, HiOutlineCircleStack } from "react-icons/hi2"

const services = [
  {
    title: "Front-end",
    text: "Responsive UIs with React and Angular — clean components, accessible layouts, and polished user flows for web apps.",
    Icon: HiOutlineCodeBracket,
  },
  {
    title: "Back-end",
    text: "APIs and business logic with Node.js and Django — authentication, validation, and reliable server-side workflows.",
    Icon: HiOutlineServerStack,
  },
  {
    title: "APIs & databases",
    text: "REST integrations and relational data with MySQL and Oracle — models, queries, and end-to-end feature delivery.",
    Icon: HiOutlineCircleStack,
  },
]

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="section-head center">
        <span className="section-kicker">Services</span>
        <h2 className="section-title">
          What I <span className="accent">build for you</span>
        </h2>
        <p className="section-sub">
          Full-stack delivery from UI to API and data — focused on reliable web apps for product and internal tools.
        </p>
      </div>

      <div className="services-grid">
        {services.map(({ title, text, Icon }) => (
          <article key={title} className="service-card card">
            <div className="service-icon-wrap" aria-hidden>
              <div className="service-diamond">
                <Icon size={22} />
              </div>
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-text">{text}</p>
            <a href="#contact" className="service-link">
              Discuss <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
