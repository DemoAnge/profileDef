import { useCallback, useEffect, useId, useRef, useState } from "react"
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

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

const Extras = () => {
  const [active, setActive] = useState(null)
  const openerRef = useRef(null)
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const titleId = useId()

  const closeModal = useCallback(() => {
    setActive(null)
  }, [])

  const openModal = (cert, event) => {
    openerRef.current = event.currentTarget
    setActive(cert)
  }

  useEffect(() => {
    if (!active) return undefined

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus()
    }, 0)

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeModal()
        return
      }

      if (e.key !== "Tab" || !dialogRef.current) return

      const nodes = dialogRef.current.querySelectorAll(FOCUSABLE)
      if (!nodes.length) return

      const first = nodes[0]
      const last = nodes[nodes.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)

    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = prevOverflow
      document.removeEventListener("keydown", onKeyDown)
      openerRef.current?.focus?.()
    }
  }, [active, closeModal])

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

      <div className="extras-zigzag" role="list">
        {certs.map((c, i) => (
          <div key={c.label} className="extras-step" role="listitem">
            {i > 0 && (
              <span className="extras-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M5 12h12m0 0l-4.5-4.5M17 12l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
            <button
              type="button"
              className="extras-diamond"
              onClick={(e) => openModal(c, e)}
              aria-label={`View certificate: ${c.label}`}
            >
              <span className="extras-diamond-outer" aria-hidden="true" />
              <span className="extras-diamond-inner">
                <span className="extras-diamond-media">
                  <img src={c.img} alt="" loading="lazy" />
                </span>
              </span>
              <span className="extras-diamond-caption">{c.label}</span>
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="extras-modal-overlay"
          onClick={closeModal}
          role="presentation"
        >
          <div
            ref={dialogRef}
            className="extras-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="extras-modal-bar">
              <h3 id={titleId} className="extras-modal-title">
                {active.label}
              </h3>
              <button
                ref={closeBtnRef}
                type="button"
                className="extras-modal-close"
                onClick={closeModal}
                aria-label="Close certificate preview"
              >
                ×
              </button>
            </div>
            <div className="extras-modal-body">
              <img src={active.img} alt={active.label} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Extras
