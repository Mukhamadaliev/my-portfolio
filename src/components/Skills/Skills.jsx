// import React from 'react';
// import './Skills.css';

// const Skills = () => {
//     const skills = [
//         { name: 'HTML5', percentage: 85, icon: 'bxl-html5', color: '#e44d26' },
//         { name: 'CSS', percentage: 80, icon: 'bxl-css3', color: '#264de4' },
//         { name: 'Bootstrap', percentage: 70, icon: 'bxl-bootstrap', color: '#563d7c' },
//         { name: 'JavaScript', percentage: 73, icon: 'bxl-javascript', color: '#f0db4f' },
//         { name: 'React', percentage: 75, icon: 'bxl-react', color: '#61dbfb' },
//         { name: 'Figma', percentage: 70, icon: 'bxl-figma', color: '#f24e1e' },
//     ];

//     <br />
//     return (
//         <div className="background-skills" data-aos="fade-up-left">
            
//             <section id='Skills' className='section'>

//                 <div className="skills-container">
//                     <div className="div-skills-max">
//                         <h1 className='h1-skills'>Skills</h1>

//                         <div className="skills-row">
//                             {skills.map((skill, index) => (
//                                 <div key={index} className="skill-item">
//                                     <i className={`bx ${skill.icon}`} style={{ color: skill.color }}></i>
//                                     <div className="skill-name">{skill.name}</div>
//                                     <div className="skill-percentage">{skill.percentage}%</div>
//                                     <div className="skill-bar">
//                                         <div
//                                             className="skill-progress"
//                                             style={{
//                                                 width: `${skill.percentage}%`,
//                                                 background: skill.color
//                                             }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Skills;












// import React, { useState } from 'react';
// import './Skills.css';

// // Hard skill iconlari
// import { FaHtml5, FaCss3Alt, FaReact, FaJs } from 'react-icons/fa';
// import { FaSass } from "react-icons/fa";
// import { RiBootstrapLine } from "react-icons/ri";
// import { PiFigmaLogoDuotone } from "react-icons/pi";

// // Soft skill iconlari
// import { FaComments, FaUsers, FaLightbulb, FaClock, FaBrain, FaPuzzlePiece } from 'react-icons/fa6';

// const Skills = ({ isDarkMode, t }) => {
//   // Agar t funksiya bo'lmasa, fallback yaratamiz
//   const translate = (key) => {
//     if (typeof t === 'function') {
//       return t(key);
//     }
//     // Agar t funksiya bo'lmasa, inglizcha default qiymatlar
//     const translations = {
//       'Communication': 'Communication',
//       'Teamwork': 'Teamwork',
//       'Creativity': 'Creativity',
//       'Time Management': 'Time Management',
//       'Problem Solving': 'Problem Solving',
//       'Critical Thinking': 'Critical Thinking',
//       'My Skills': 'My Skills',
//       'Hard Skills': 'Hard Skills',
//       'Soft Skills': 'Soft Skills'
//     };
//     return translations[key] || key;
//   };

//   const hardSkills = [
//     { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
//     { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
//     { name: 'Bootstrap', icon: <RiBootstrapLine />, level: 80 },
//     { name: 'SCSS', icon: <FaSass />, level: 85 },
//     { name: 'JavaScript', icon: <FaJs />, level: 85 },
//     { name: 'React', icon: <FaReact />, level: 90 },
//     { name: 'Figma', icon: <PiFigmaLogoDuotone />, level: 75 },
//   ];

//   const softSkills = [
//     { name: translate('Communication'), icon: <FaComments />, level: 90 },
//     { name: translate('Teamwork'), icon: <FaUsers />, level: 85 },
//     { name: translate('Creativity'), icon: <FaLightbulb />, level: 80 },
//     { name: translate('Time Management'), icon: <FaClock />, level: 85 },
//     { name: translate('Problem Solving'), icon: <FaPuzzlePiece />, level: 80 },
//     { name: translate('Critical Thinking'), icon: <FaBrain />, level: 75 },
//   ];

//   const [activeTab, setActiveTab] = useState('hard');
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleCardClick = (index) => {
//     setActiveIndex(index);
//   };

//   const currentSkills = activeTab === 'hard' ? hardSkills : softSkills;

//   return (
//     <section id="skills" className={`skills-section ${isDarkMode ? "dark" : ""}`}>
//       <div className="container">
//         <h2 className="section-title">{translate("My Skills")}</h2>

//         <div className="types-of-skills">
//           <h3
//             className={activeTab === 'hard' ? 'tab active-tab' : 'tab'}
//             onClick={() => {
//               setActiveTab('hard');
//               setActiveIndex(null);
//             }}
//           >
//             {translate("Hard Skills")}
//           </h3>
//           <h3
//             className={activeTab === 'soft' ? 'tab active-tab' : 'tab'}
//             onClick={() => {
//               setActiveTab('soft');
//               setActiveIndex(null);
//             }}
//           >
//             {translate("Soft Skills")}
//           </h3>
//         </div>

//         <div className="skills-grid">
//           {currentSkills.map((skill, index) => (
//             <div
//               key={index}
//               className={`skill-card ${activeIndex === index ? 'active' : ''}`}
//               onClick={() => handleCardClick(index)}
//             >
//               {skill.icon && <div className="skill-icon">{skill.icon}</div>}
//               <h4>{skill.name}</h4>
//               <div className="progress-bar">
//                 <div
//                   className="progress"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//               <span className="skill-level">{skill.level}%</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
























// src/components/Skills/Skills.jsx
import React, { useState } from "react";
import "./Skills.css";

// Hard skill iconlari
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { PiFigmaLogoDuotone } from "react-icons/pi";

// Soft skill iconlari (fa6 import ishlamay qolsa, Fa6 o'rniga Fa ishlatish mumkin)
import { FaComments, FaUsers, FaLightbulb, FaClock, FaBrain, FaPuzzlePiece } from "react-icons/fa";

const Skills = ({ isDarkMode = false, t }) => {
  // Fallback tarjima funksiyasi
  const translate = (key) => {
    if (typeof t === "function") return t(key);
    const translations = {
      "Communication": "Communication",
      "Teamwork": "Teamwork",
      "Creativity": "Creativity",
      "Time Management": "Time Management",
      "Problem Solving": "Problem Solving",
      "Critical Thinking": "Critical Thinking",
      "My Skills": "My Skills",
      "Hard Skills": "Hard Skills",
      "Soft Skills": "Soft Skills"
    };
    return translations[key] || key;
  };

  const hardSkills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#e44d26" },
    { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "#264de4" },
    { name: "Bootstrap", icon: <RiBootstrapLine />, level: 80, color: "#563d7c" },
    { name: "SCSS", icon: <FaSass />, level: 85, color: "#cc6699" },
    { name: "JavaScript", icon: <FaJs />, level: 85, color: "#f0db4f" },
    { name: "React", icon: <FaReact />, level: 90, color: "#61dbfb" },
    { name: "Figma", icon: <PiFigmaLogoDuotone />, level: 75, color: "#f24e1e" }
  ];

  const softSkills = [
    { name: translate("Communication"), icon: <FaComments />, level: 90 },
    { name: translate("Teamwork"), icon: <FaUsers />, level: 85 },
    { name: translate("Creativity"), icon: <FaLightbulb />, level: 80 },
    { name: translate("Time Management"), icon: <FaClock />, level: 85 },
    { name: translate("Problem Solving"), icon: <FaPuzzlePiece />, level: 80 },
    { name: translate("Critical Thinking"), icon: <FaBrain />, level: 75 }
  ];

  const [activeTab, setActiveTab] = useState("hard");
  const [activeIndex, setActiveIndex] = useState(null);

  const currentSkills = activeTab === "hard" ? hardSkills : softSkills;

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">{translate("My Skills")}</h2>

        <div className="types-of-skills">
          <h3
            className={activeTab === "hard" ? "tab active-tab" : "tab"}
            onClick={() => { setActiveTab("hard"); setActiveIndex(null); }}
          >
            {translate("Hard Skills")}
          </h3>
          <h3
            className={activeTab === "soft" ? "tab active-tab" : "tab"}
            onClick={() => { setActiveTab("soft"); setActiveIndex(null); }}
          >
            {translate("Soft Skills")}
          </h3>
        </div>

        <div className="skills-grid">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {skill.icon && <div className="skill-icon" style={skill.color ? { color: skill.color } : {}}>{skill.icon}</div>}
              <h4 className="skill-name">{skill.name}</h4>

              <div className="progress-bar" aria-hidden>
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
