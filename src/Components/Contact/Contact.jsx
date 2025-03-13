import React from 'react'
import "./Contact.css"
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location from "../../assets/location_icon.svg"
// import github from "../../assets/github_icon.svg"
// import linkedin from "../../assets/linkedin_icon.svg"
const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to work on new projects or get hired, so feel free to send me a message about anything. You can connect me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=""/>
                        <p>sushmitasrivastava1014@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt=""/>
                        <p>9318381497</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt=""/>
                        <p>Bangalore</p>
                    </div>
                
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type="email" placeholder="enter your email" name='email'/>
                <label htmlFor=''>Write your message here.</label>
                <textarea name="message" id=""  rows="8" placeholder="Enter your message"/>
                <button type="submit" className="contact-submit">Submit</button>

            </form>
            
            
            
        </div>
      
    </div>
  )
}

export default Contact
