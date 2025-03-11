import React from 'react'
import "./Hero.css"
import profile_img from "/src/assets/about_profile.jpg"

const Hero = () => {
  return (
    <div className="hero">
        <img src={profile_img} alt="profile_img" />
        <h1><span>Sushmita Srivastava</span><br/>A Frontend Developer</h1>
        <p>Specialized in building exceptional digital experiences. Currently, focused on building responsive and user-friendly React.js web applications.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
