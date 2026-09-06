import "./Services.css"
import { HiOutlineCodeBracket, HiOutlineServerStack, HiOutlineCircleStack } from "react-icons/hi2"

const capabilities = [
  {
    title: "Front-end",
    text: "I bring React and Angular UI work to a team — clear components, accessible layouts, and features that are ready for review and handover.",
    Icon: HiOutlineCodeBracket,
  },
  {
    title: "Back-end",
    text: "I contribute Node.js and Django API work — authentication, validation, and reliable server-side logic that supports product and internal tools.",
    Icon: HiOutlineServerStack,
  },
  {
    title: "APIs & databases",
    text: "I connect REST APIs to relational data (MySQL, Oracle) — models, queries, and end-to-end delivery from UI through data layer.",
    Icon: HiOutlineCircleStack,
  },
]

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="section-head center">
        <span className="section-kicker">Capabilities</span>
        <h2 className="section-title">
          How I <span className="accent">work</span>
        </h2>
        <p className="section-sub">
          What I bring to an engineering team — full-stack delivery from UI to API and data, with honest scope.
        </p>
      </div>

      <div className="services-grid">
        {capabilities.map(({ title, text, Icon }) => (
          <article key={title} className="service-card card">
            <div className="service-icon-wrap" aria-hidden>
              <div className="service-diamond">
                <Icon size={22} />
              </div>
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-text">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services