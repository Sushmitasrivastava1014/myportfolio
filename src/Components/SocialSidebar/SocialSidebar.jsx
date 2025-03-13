import React, { useState } from "react";
import "./SocialSidebar.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaUser } from "react-icons/fa";

const SocialSidebar = () => {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    { id: "linkedin", text: "LinkedIn", icon: <FaLinkedin />, bgColor: "#0077b5" },
    { id: "github", text: "GitHub", icon: <FaGithub />, bgColor: "#24292e" },
    { id: "email", text: "Email", icon: <FaEnvelope />, bgColor: "#6fc3b2" },
    { id: "profile", text: "Profile", icon: <FaUser />, bgColor: "#4a5a6a" },
  ];

  return (
    <div className="sidebar">
      {socialLinks.map((link) => (
        <div
          key={link.id}
          className={`sidebar-item ${hovered === link.id ? "expand" : ""}`}
          style={{ backgroundColor: link.bgColor }}
          onMouseEnter={() => setHovered(link.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <span className="text">{link.text}</span>
          <span className="icon">{link.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialSidebar;
