import "./navbar.css"
import { useRef, useState, useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { HiBars3, HiXMark } from "react-icons/hi2"

const links = [
  { id: "home", label: "Home", offset: 0 },
  { id: "about", label: "About", offset: 50 },
  { id: "services", label: "Services", offset: 50 },
  { id: "project", label: "Portfolio", offset: 50 },
  { id: "extras", label: "Extras", offset: 50 },
  { id: "experience", label: "Experience", offset: 50 },
  { id: "contact", label: "Contact", offset: 50 },
]

const Navbar = () => {
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

      <button
        type="button"
        className="nav-burger"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <HiXMark size={22} /> : <HiBars3 size={22} />}
      </button>

      <nav ref={menuRef} className={`nav-menu${open ? " open" : ""}`} aria-label="Primary">
        <ul>
          {links.map(({ id, label, offset }) => (
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
          ))}
        </ul>
      </nav>

      <AnchorLink className="nav-cta" offset={50} href="#contact" title="Get in touch">
        Get in touch
      </AnchorLink>
    </header>
  )
}

export default Navbar