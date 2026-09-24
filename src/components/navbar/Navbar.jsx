import "./navbar.css"
import { useRef, useState, useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { HiBars3, HiXMark } from "react-icons/hi2"
import { useI18n } from "../../i18n/LanguageContext"

const linkItems = [
  { id: "home", offset: 0 },
  { id: "about", offset: 50 },
  { id: "project", offset: 50 },
  { id: "experience", offset: 50 },
  { id: "skill", offset: 50 },
  { id: "services", offset: 50 },
  { id: "extras", offset: 50 },
  { id: "contact", offset: 50 },
]

const Navbar = () => {
  const { t, lang, setLang } = useI18n()
  const [menu, setMenu] = useState("home")
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setMenu(entry.target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (id) => {
    setMenu(id)
    setOpen(false)
  }

  return (
    <header className="navbar">
      <a href="#home" className="nav-brand" title="Angel Pilamunga">
        <span className="nav-brand-mark">AP</span>
        <span className="nav-brand-text">Angel Pilamunga</span>
      </a>

      <nav ref={menuRef} className={`nav-menu${open ? " open" : ""}`} aria-label="Primary">
        <ul>
          {linkItems.map(({ id, offset }) => {
            const label = t.nav[id]
            return (
              <li key={id}>
                <AnchorLink
                  className={`nav-link${menu === id ? " active" : ""}`}
                  offset={offset}
                  href={`#${id}`}
                  onClick={() => handleNav(id)}
                  title={label}
                >
                  {label}
                </AnchorLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="nav-end">
        <div className="lang-switch" role="group" aria-label={t.nav.lang}>
          <button
            type="button"
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <button
            type="button"
            className={lang === "es" ? "active" : ""}
            onClick={() => setLang("es")}
            aria-pressed={lang === "es"}
          >
            ES
          </button>
        </div>

        <AnchorLink className="nav-cta" offset={50} href="#contact" title={t.nav.cta}>
          {t.nav.cta}
        </AnchorLink>

        <button
          type="button"
          className="nav-burger"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiXMark size={22} /> : <HiBars3 size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
