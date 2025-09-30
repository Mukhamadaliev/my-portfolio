// import React from 'react';
// import './contact.css';

// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     alert('Message sent!');
//   };

//   return (
//     <section id="contact" className="section contact-section" data-aos="fade-up">
//       <div className="container">
//         <h2 className="section-title">Let's work together</h2>

//         <div className="section-text">
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//           <p>Nescunt sit illo esse commodi.</p>
//         </div>

//         <div className="contact-grid">


//           <form onSubmit={handleSubmit} className="contact-form">
//             <div className="form-group">
//               <label htmlFor="name" className="info-label">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="form-input"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email" className="info-label">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="form-input"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message" className="info-label">Your Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="message-area"
//                 rows="5"
//                 required
//               ></textarea>
//             </div>

//             <button type="submit" className="send-button">
//               Send message
//             </button>
//           </form>

//           <div className="contact-info">
//             <div className="info-block">
//               <h3 className="info-label">Phone</h3>
//               <p className="info-value">
//                 <a href="tel:+998947238850">+998-(94)-723-88-50</a>
//               </p>
//             </div>

//             <div className="info-block">
//               <h3 className="info-label">Email</h3>
//               <p className="info-value">
//                 muxamadaliyevibrohim2009@gmail.com
//               </p>
//             </div>

//             <div className="info-block">
//               <h3 className="info-label">Address</h3>
//               <p className="info-value">
//                 Samarqand, O`zbekiston
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;



























import React, { useState } from "react";
import "./contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // 🔑 O‘z tokeningizni yozing
  const token = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"; 
  // 🔑 Faqat ID raqam bo‘lishi kerak
  const chatId = "7768379398";  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (text) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body = { chat_id: chatId, text };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("✅ Xabaringiz yuborildi!");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setStatus("❌ Xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Telegram API error:", error);
      setStatus("❌ Xatolik yuz berdi.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, message } = formData;

    if (!name || !email || !number || !message) {
      setStatus("⚠️ Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    const text = `
📥 Yangi xabar:
👤 Ism: ${name}
📧 Email: ${email}
📱 Raqam: ${number}
💬 Xabar: ${message}
    `;
    sendMessage(text);
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">Let's work together</h2>

        <div className="section-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Nescunt sit illo esse commodi.</p>
        </div>

        <div className="contact-grid">
          {/* Chap qism */}
          <div className="contact-info">
            <div className="info-block">
              <h3 className="info-label">Phone</h3>
              <p className="info-value">
                <a href="tel:+998947238850">+998 94 723 88 50</a>
              </p>
            </div>
            <div className="info-block">
              <h3 className="info-label">Email</h3>
              <p className="info-value">muxamadaliyevibrohim2009@gmail.com</p>
            </div>
            <div className="info-block">
              <h3 className="info-label">Address</h3>
              <p className="info-value">Samarkand, Uzbekistan</p>
            </div>
            <div className="info-block">
              <h3 className="info-label">Telegram</h3>
              <p className="info-value">
                <a href="https://t.me/Mukhamadaliyev20" target="_blank" rel="noreferrer">
                  @ibrohim
                </a>
              </p>
            </div>
          </div>

          {/* O‘ng qism – Forma */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="info-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="info-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="number" className="info-label">Number</label>
              <input
                type="number"
                id="number"
                name="number"
                className="form-input"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="info-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="message-area"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="send-button">
              Send Message
            </button>
            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
