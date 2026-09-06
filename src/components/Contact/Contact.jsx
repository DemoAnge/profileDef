import { useState } from "react"
import "./Contact.css"
import { HiOutlineMapPin } from "react-icons/hi2"

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")

    const formData = new FormData(event.target)
    const requiredFields = ["name", "email", "message"]
    const hasAllFields = requiredFields.every((field) => {
      return formData.get(field) && formData.get(field).trim() !== ""
    })

    if (!hasAllFields) {
      setResult("Please fill out all required fields.")
      alert("Please fill out all required fields.")
      return
    }

    formData.append("access_key", "09c0e377-922b-46e0-b2d2-2f3d9b4fc71e")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setResult("Form Submitted Successfully")
        event.target.reset()
        alert("Message sent Successfully")
      } else {
        setResult(data.message)
        alert("Error: " + data.message)
      }
    } catch (error) {
      setResult("An error occurred: " + error.message)
      alert("Error sending message. Please try again later.")
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="section-head">
        <span className="section-kicker">05</span>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact-section">
        <div className="contact-left glass-card">
          <h3>Let&apos;s talk</h3>
          <p>
            I&apos;m currently available to take on new projects, so feel free to message me about anything you&apos;d like me to work on. You can contact me anytime.
          </p>
          <div className="contact-detail">
            <HiOutlineMapPin size={16} aria-hidden />
            <span>Ambato, Ecuador</span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right glass-card">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" name="name" required />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required placeholder="you@email.com" name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={7} placeholder="How can I help?" required />
          {result && <p className="contact-result mono">{result}</p>}
          <button type="submit" className="contact-submit">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
