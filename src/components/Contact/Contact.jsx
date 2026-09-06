import { useState } from "react"
import "./Contact.css"
import { HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"

const ACCESS_KEY = "09c0e377-922b-46e0-b2d2-2f3d9b4fc71e"
const EMAIL = "angelpilamunga2098@gmail.com"
const GITHUB_URL = "https://github.com/DemoAnge"
const LINKEDIN_URL = "https://www.linkedin.com/in/angel-pilamunga-30a758133/"

const Contact = () => {
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus("sending")
    setStatusMessage("Sending…")

    const formData = new FormData(event.target)
    const requiredFields = ["name", "email", "message"]
    const hasAllFields = requiredFields.every((field) => {
      const value = formData.get(field)
      return value && String(value).trim() !== ""
    })

    if (!hasAllFields) {
      setStatus("error")
      setStatusMessage("Please fill out all required fields.")
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
        setStatusMessage("Message sent successfully. I'll get back to you soon.")
        event.target.reset()
      } else {
        setStatus("error")
        setStatusMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setStatusMessage("Error sending message. Please try again later.")
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="section-head">
        <span className="section-kicker">Contact</span>
        <h2 className="section-title">
          Let&apos;s <span className="accent">work together</span>
        </h2>
      </div>

      <div className="contact-section">
        <aside className="contact-left card">
          <div className="contact-left-top">
            <h3 className="contact-headline">
              Have a role or project in mind?
            </h3>
            <p className="contact-lead">
              Tell me about the opportunity — I read every message and reply as soon as I can.
            </p>
            <div className="contact-chips">
              <span className="contact-chip contact-chip--live">
                <span className="contact-chip-dot" aria-hidden />
                Open to Junior / Semi-Senior full-stack roles
              </span>
            </div>
          </div>

          <div className="contact-meta">
            <div className="contact-detail">
              <HiOutlineMapPin size={16} aria-hidden />
              <span>Ambato, Ecuador</span>
            </div>
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
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="contact-right card" noValidate>
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              name="name"
              required
              autoComplete="name"
              disabled={status === "sending"}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@email.com"
              name="email"
              autoComplete="email"
              disabled={status === "sending"}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="How can I help?"
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
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
