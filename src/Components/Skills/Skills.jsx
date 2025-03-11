import React from "react";
import "./Skills.css";

// Skills data array
const skills = [
  { name: "HTML", icon: "/src/assets/html.svg" },
  { name: "CSS", icon: "/src/assets/css.svg" },
  { name: "JavaScript", icon: "/src/assets/javascript.svg" },
  { name: "React.js", icon: "/src/assets/react.svg" },
  { name: "Tailwind", icon: "/src/assets/tailwind.svg" },
  { name: "Styled Components", icon: "💅" },
  { name: "GitHub", icon: "/src/assets/github.svg" },
  { name: "Netlify", icon: "/src/assets/netlify.svg" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
        <p>Technologies I've worked with</p>
      </div>

      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon.includes("/") ? (
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
            ) : (
              <span className="skill-emoji">{skill.icon}</span>
            )}
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
