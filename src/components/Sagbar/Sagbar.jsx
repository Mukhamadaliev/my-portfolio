import React, { useState, useEffect } from "react";
import { MdHome, MdPerson, MdClose, MdMenu } from "react-icons/md";
import { FaListUl, FaBriefcase } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./sagbar.css";
import imgSagbar from "./assets/image.png";

const Sagbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = window.innerWidth <= 768;

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`sagbar-container ${isMobile ? "mobile" : "desktop"
          } ${collapsed ? "collapsed" : ""} ${isOpen ? "open" : ""}`}
      >
        <div className="sagbar-content">
          <div className="div" data-aos="fade-right">
            <div className="profile-section">
              <img src={imgSagbar} alt="Profile" className="profile-img" />
              {!collapsed && <h4 className="profile-name">Ibrohim</h4>}
            </div>

            <ul className="nav-list">
              <li>
                <NavLink to="/" onClick={closeSidebar}>
                  <MdHome className="icon" />
                  {!collapsed && <span>Home</span>}
                </NavLink>
                <hr />
              </li>
              <li>
                <NavLink to="/about" onClick={closeSidebar}>
                  <MdPerson className="icon" />
                  {!collapsed && <span>About</span>}
                </NavLink>
                <hr />
              </li>
              <li>
                <NavLink to="/skills" onClick={closeSidebar}>
                  <FaListUl className="icon" />
                  {!collapsed && <span>Skills</span>}
                </NavLink>
                <hr />
              </li>
              <li>
                <NavLink to="/projects" onClick={closeSidebar}>
                  <FaBriefcase className="icon" />
                  {!collapsed && <span>Projects</span>}
                </NavLink>
                <hr />
              </li>
              <li>
                <NavLink to="/contact" onClick={closeSidebar}>
                  <IoMdChatboxes className="icon" />
                  {!collapsed && <span>Contact</span>}
                </NavLink>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button className={`toggle-btn ${isOpen ? "open" : ""}`} onClick={toggleSidebar}>
        {isMobile ? (isOpen ? <MdClose /> : <MdMenu />) : <RiMenu2Fill />}
      </button>

      {isMobile && isOpen && (
        <div className="sagbar-overlay" onClick={closeSidebar}></div>
      )}
    </>
  );
};

export default Sagbar;