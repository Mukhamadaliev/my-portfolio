// // // import React from 'react';
// // // import './contact.css';

// // // const Contact = () => {
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Handle form submission logic here
// // //     alert('Message sent!');
// // //   };

// // //   return (
// // //     <section id="contact" className="section contact-section" data-aos="fade-up">
// // //       <div className="container">
// // //         <h2 className="section-title">Let's work together</h2>

// // //         <div className="section-text">
// // //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
// // //           <p>Nescunt sit illo esse commodi.</p>
// // //         </div>

// // //         <div className="contact-grid">


// // //           <form onSubmit={handleSubmit} className="contact-form">
// // //             <div className="form-group">
// // //               <label htmlFor="name" className="info-label">Name</label>
// // //               <input
// // //                 type="text"
// // //                 id="name"
// // //                 name="name"
// // //                 className="form-input"
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="form-group">
// // //               <label htmlFor="email" className="info-label">Email</label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 name="email"
// // //                 className="form-input"
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="form-group">
// // //               <label htmlFor="message" className="info-label">Your Message</label>
// // //               <textarea
// // //                 id="message"
// // //                 name="message"
// // //                 className="message-area"
// // //                 rows="5"
// // //                 required
// // //               ></textarea>
// // //             </div>

// // //             <button type="submit" className="send-button">
// // //               Send message
// // //             </button>
// // //           </form>

// // //           <div className="contact-info">
// // //             <div className="info-block">
// // //               <h3 className="info-label">Phone</h3>
// // //               <p className="info-value">
// // //                 <a href="tel:+998947238850">+998-(94)-723-88-50</a>
// // //               </p>
// // //             </div>

// // //             <div className="info-block">
// // //               <h3 className="info-label">Email</h3>
// // //               <p className="info-value">
// // //                 muxamadaliyevibrohim2009@gmail.com
// // //               </p>
// // //             </div>

// // //             <div className="info-block">
// // //               <h3 className="info-label">Address</h3>
// // //               <p className="info-value">
// // //                 Samarqand, O`zbekiston
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Contact;




























import React, { useState } from "react";
import './contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (text) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body = {
      chat_id: chatId,
      text,
      parse_mode: 'HTML'
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("✅ Xabaringiz muvaffaqiyatli yuborildi!");
        setFormData({ name: "", email: "", message: "", number: "" });
      } else {
        setStatus("❌ Xatolik yuz berdi.");
      }
    } catch (error) {
      setStatus("❌ Xatolik yuz berdi.");
      console.error("Telegram API error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, message } = formData;

    if (!name || !email || !number || !message) {
      setStatus("⚠️ Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    setIsLoading(true);

    const text = `
<b>📥 Yangi xabar keldi!</b>
————————
<b>👤 Ism:</b> ${name}
<b>📧 Email:</b> ${email}
<b>📱 Telefon:</b> <a href="tel:${number}">${number}</a>
————————
<b>💬 Xabar:</b> 
${message}
`;

    sendMessage(text);
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">Let's work together</h2>

        <div className="section-text">
          <p>Menga aloqaga chiqish uchun quyidagi ma'lumotlardan foydalaning yoki formani to'ldiring.</p>
          <p>Loyiha g'oyalari yoki takliflaringizni kutaman.</p>
        </div>

        <div className="contact-grid">
          {/* Kontakt ma'lumotlari */}
          <div className="contact-info">
            <div className="info-block">
              <h3 className="info-label"><FaPhoneAlt /> Phone</h3>
              <p className="info-value">
                <a href="tel:+998947238850">+998 94 723 88 50</a>
              </p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaEnvelope /> Email</h3>
              <p className="info-value">muxamadaliyevibrohim2009@gmail.com</p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaMapMarkerAlt /> Address</h3>
              <p className="info-value">Samarkand, Uzbekistan</p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaTelegramPlane /> Telegram</h3>
              <p className="info-value">
                <a href="https://t.me/Mukhamadaliyev20" target="_blank" rel="noreferrer">
                  @Mukhamadaliyev20
                </a>
              </p>
            </div>
          </div>

          {/* Kontakt formasi */}
          <form className="contact-form" onSubmit={handleSubmit}>
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
                placeholder="Ismingizni kiriting"
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
                placeholder="Email manzilingiz"
              />
            </div>

            <div className="form-group">
              <label htmlFor="number" className="info-label">Phone Number</label>
              <input
                type="tel"
                id="number"
                name="number"
                className="form-input"
                value={formData.number}
                onChange={handleChange}
                required
                placeholder="Telefon raqamingiz"
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
                placeholder="Xabaringizni yozing..."
              />
            </div>

            <button type="submit" className="send-button" disabled={isLoading}>
              {isLoading ? "Yuborilmoqda..." : "Send Message"}
            </button>
            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;