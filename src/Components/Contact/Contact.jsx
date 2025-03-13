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
                    {/* <div className="contact-detail">
                        <img src={github} alt=""/>
                        <p>Github</p>
                    </div>
                    <div className="contact-detail">
                        <img src={linkedin} alt=""/>
                        <p>Linkedin</p>
                    </div> */}
                    
                </div>
            </div>
            
            
        </div>
      
    </div>
  )
}

export default Contact
