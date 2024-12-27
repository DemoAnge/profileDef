import React from 'react'
import "./Contact.css"
import logo_pat from "../../assets/dragon.svg"
import loc from "../../assets/location.svg"



const Contact = () => {
  const [result, setResult] = React.useState("");  

  const onSubmit = async (event) => {  
    event.preventDefault();  
    setResult("Sending....");  
  
    const formData = new FormData(event.target);  
    
    // Lista de nombres de los campos que son obligatorios  
    const requiredFields = ["name", "email", "message"]; // Reemplaza con los nombres de tus campos  
  
    // Verifica si todos los campos requeridos tienen valores  
    const hasAllFields = requiredFields.every(field => {  
      return formData.get(field) && formData.get(field).trim() !== "";  
    });  
  
    if (hasAllFields) {  
      formData.append("access_key", "09c0e377-922b-46e0-b2d2-2f3d9b4fc71e");  
  
      try {  
        const response = await fetch("https://api.web3forms.com/submit", {  
          method: "POST",  
          body: formData,  
        });  
  
        const data = await response.json();  
  
        if (data.success) {  
          setResult("Form Submitted Successfully");  
          event.target.reset();  
          alert("Message sent Successfully");  
        } else {  
          setResult(data.message);  
          alert("Error: " + data.message);  
        }  
  
      } catch (error) {  
        setResult("An error occurred: " + error.message);  
        alert("Error sending message. Please try again later.");  
      }  
  
    } else {  
      setResult("Please fill out all required fields.");  
      alert("Please fill out all required fields.");  
    }  
  };
  return (
    <div id="contact" className='contact'>

      <div className="contact-title">
        <h1>Get in touch </h1>
        <img src={logo_pat} alt="dem" />
      </div>

        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to message me about anything you'd like me to work on. You can contact me anytime.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={loc} alt="" /><p>Ambato, Ecuador</p>

              </div>
            </div>
          </div>

              <form onSubmit={onSubmit}  className='contact-right'>
                <label htmlFor="">Your Name:</label>
                <input type="text" placeholder='Enter your name' name='name' required/>
                <label htmlFor="">Your Email:</label>
                <input type="email"  pattern=".+@example\.com" size="30" required placeholder='Enter your Email' name='email'/>
                <label htmlFor="">Write you message here</label>
                <textarea name="message" id="" rows={10} placeholder='Enter your message' requiredFields ></textarea>
                <button type='submit' className='contact-submit'>Send Message</button>


              </form>
              

            
          

        </div>


    </div>
  )
}

export default Contact