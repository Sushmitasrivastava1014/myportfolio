import React, { useState } from "react";
import "./SocialSidebar.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaUser } from "react-icons/fa";


const SocialSidebar = () => {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    {
      id: "linkedin",
      text: "LinkedIn",
      icon: <FaLinkedin />,
      bgColor: "#0077b5",
      url: "https://www.linkedin.com/in/sushmita-srivastava-bb0b35344/",
    },
    {
      id: "github",
      text: "GitHub",
      icon: <FaGithub />,
      bgColor: "#24292e",
      url: "https://github.com/Sushmitasrivastava1014",
    },
    {
      id: "email",
      text: "Email",
      icon: <FaEnvelope />,
      bgColor: "#6fc3b2",
      url: "mailto:sushmitasrivastava1014@gmail.com", // Opens email client
    },
    {
      id: "profile",
      text: "Resume",
      icon: <FaUser />,
      bgColor: "#4a5a6a",
      url: "/resume.pdf",
    },
  ];

  return (
    <div className="sidebar">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`sidebar-item ${hovered === link.id ? "expand" : ""}`}
          style={{ backgroundColor: link.bgColor }}
          onMouseEnter={() => setHovered(link.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <span className="text">{link.text}</span>
          <span className="icon">{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
