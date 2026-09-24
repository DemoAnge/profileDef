import { useState } from "react"
import "./Contact.css"
import { HiOutlineMapPin, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { useI18n } from "../../i18n/LanguageContext"

const ACCESS_KEY = "09c0e377-922b-46e0-b2d2-2f3d9b4fc71e"
const EMAIL = "angelpilamunga2098@gmail.com"
const PHONE = "+593 962 984 732"
const PHONE_HREF = "tel:+593962984732"
const GITHUB_URL = "https://github.com/DemoAnge"
const LINKEDIN_URL = "https://www.linkedin.com/in/angel-pilamunga-30a758133/"

const Contact = () => {
  const { t } = useI18n()
  const [status, setStatus] = useState("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus("sending")
    setStatusMessage(t.contact.sending)

    const formData = new FormData(event.target)
    const requiredFields = ["name", "email", "message"]
    const hasAllFields = requiredFields.every((field) => {
      const value = formData.get(field)
      return value && String(value).trim() !== ""
    })

    if (!hasAllFields) {
      setStatus("error")
      setStatusMessage(t.contact.required)
      return
    }

    formData.append("access_key", ACCESS_KEY)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setStatus("success")
        setStatusMessage(t.contact.success)
        event.target.reset()
      } else {
        setStatus("error")
        setStatusMessage(data.message || t.contact.error)
      }
    } catch {
      setStatus("error")
      setStatusMessage(t.contact.network)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="section-head">
        <span className="section-kicker">{t.contact.kicker}</span>
        <h2 className="section-title">
          {t.contact.title} <span className="accent">{t.contact.accent}</span>
        </h2>
      </div>

      <div className="contact-section">
        <aside className="contact-left card">
          <div className="contact-left-top">
            <h3 className="contact-headline">{t.contact.headline}</h3>
            <p className="contact-lead">{t.contact.lead}</p>
            <div className="contact-chips">
              <span className="contact-chip contact-chip--live">
                <span className="contact-chip-dot" aria-hidden />
                {t.contact.chip}
              </span>
            </div>
          </div>

          <div className="contact-meta">
            <div className="contact-detail">
              <HiOutlineMapPin size={16} aria-hidden />
              <span>{t.contact.location}</span>
            </div>
            <a className="contact-detail contact-mailto" href={PHONE_HREF}>
              <HiOutlinePhone size={16} aria-hidden />
              <span>{PHONE}</span>
            </a>
            <a className="contact-detail contact-mailto" href={`mailto:${EMAIL}`}>
              <HiOutlineEnvelope size={16} aria-hidden />
              <span>{EMAIL}</span>
            </a>
          </div>

          <div className="contact-social">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="contact-right card" noValidate>
          <div className="contact-field">
            <label htmlFor="name">{t.contact.name}</label>
            <input
              id="name"
              type="text"
              placeholder={t.contact.namePh}
              name="name"
              required
              autoComplete="name"
              disabled={status === "sending"}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="email">{t.contact.email}</label>
            <input
              id="email"
              type="email"
              required
              placeholder={t.contact.emailPh}
              name="email"
              autoComplete="email"
              disabled={status === "sending"}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="message">{t.contact.message}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t.contact.messagePh}
              required
              disabled={status === "sending"}
            />
          </div>

          {status !== "idle" && (
            <p
              className={`contact-result contact-result--${status}`}
              role="status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
