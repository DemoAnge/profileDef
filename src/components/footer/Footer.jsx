import "./Footer.css"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>Full-stack web apps with React, Angular, Node.js, and Django.</p>
            </div>
            <div className="footer-top-right">

            </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"> <span>©2026 Angel.</span>    All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>

        </div>
    </div>
  )
}

export default Footer
