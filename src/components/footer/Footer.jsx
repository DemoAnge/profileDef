import "./Footer.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">AP</span>
          <p>Full-stack web apps with React, Angular, Node.js, and Django.</p>
        </div>
        <div className="footer-social">
          <a href="https://github.com/DemoAnge" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/angel-pilamunga-30a758133/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={16} />
          </a>
        </div>
        <p className="footer-copy">
          © 2026 Angel Pilamunga · All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
