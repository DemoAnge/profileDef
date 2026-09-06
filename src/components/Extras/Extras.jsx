import "./Extras.css"
import cert1 from "../../assets/certificate/auditor.png"
import cert2 from "../../assets/certificate/iaelements.png"
import cert3 from "../../assets/certificate/tecnic.png"
import cert4 from "../../assets/certificate/redes.png"
import cert5 from "../../assets/certificate/eticalhac.png"
import cert6 from "../../assets/certificate/hack.png"

const certs = [
  { img: cert1, label: "Auditor ISO 27001" },
  { img: cert2, label: "Elements of AI" },
  { img: cert3, label: "Technical Certificate" },
  { img: cert4, label: "Network Configuration" },
  { img: cert5, label: "Ethical Hacking" },
  { img: cert6, label: "Hacking Wi-Fi" },
]

const Extras = () => {
  return (
    <section id="extras" className="extras section">
      <div className="section-head center">
        <span className="section-kicker">Extras</span>
        <h2 className="section-title">
          Certificates <span className="accent">& credentials</span>
        </h2>
        <p className="section-sub">
          Professional certifications across security, networking, AI fundamentals, and technical training.
        </p>
      </div>

      <div className="extras-gallery">
        {certs.map((c) => (
          <article key={c.label} className="extras-card card">
            <div className="extras-thumb">
              <img src={c.img} alt={c.label} loading="lazy" />
              <div className="extras-overlay">
                <span className="extras-label">{c.label}</span>
              </div>
            </div>
            <p className="extras-caption">{c.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Extras