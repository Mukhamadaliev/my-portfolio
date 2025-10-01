import React from 'react';
import './about.css';
import img2 from './img/image.png'
import { MdDownload } from "react-icons/md";

const About = ({ isDarkMode }) => {
  return (
    <div className={`background-about ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-width">
        <section id="about" className="section" data-aos="fade-up-left">
          <div className="about">
            <div className="about-left">
              <img src={img2} alt="Ibrohim" />
            </div>
            <div className="about-right">
              <h1>About Me</h1>
              <p>I'm Ibrohim, a passionate Frontend Developer with over 1 years of professional experience. I specialize in building modern, responsive, and user-friendly web applications using React, Tailwind CSS, and other cutting-edge technologies.</p>
              <br />
              <p>Throughout my career, I have successfully delivered multiple projects, ensuring clean code, performance optimization, and seamless user experience.</p>
              <div className="cards-container">
                <div className="card">
                  <div className="card-number">+1</div>
                  <div className="card-text">
                    <span>Years of</span>
                    <span>Experience</span>
                  </div>
                </div>

                <div className="card">
                  <div className="card-number">+16</div>
                  <div className="card-text">
                    <span>Happy</span>
                    <span>Customers</span>
                  </div>
                </div>

                <div className="card">
                  <div className="card-number">+2</div>
                  <div className="card-text">
                    <span>Completed</span>
                    <span>Projects</span>
                  </div>
                </div>

                <div className="card">
                  <div className="card-number">+10</div>
                  <div className="card-text">
                    <span>Total</span>
                    <span>school</span>
                  </div>
                </div>
              </div>
              <div className="home-buttons">
                <a
                  href="/CV.docx"
                  download="CV.docx"
                  className="btn-download"
                >
                  Download CV <MdDownload />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;