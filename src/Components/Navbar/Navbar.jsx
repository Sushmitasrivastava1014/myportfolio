import React from 'react'
import logo from "/src/assets/logo.svg"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact Me</li>
      </ul>
      <div className="nav-connect">Connect Me</div>
    </div>
  )
}

