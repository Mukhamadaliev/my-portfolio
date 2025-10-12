import React, { useState } from "react";
import './contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';

const Contact = ({ isDarkMode, t }) => {
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
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", number: "" });
      } else {
        setStatus("Error occurred");
      }
    } catch (error) {
      setStatus("Error occurred");
      console.error("Telegram API error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, message } = formData;

    if (!name || !email || !number || !message) {
      setStatus("Please fill all fields");
      return;
    }

    setIsLoading(true);

    const text = `
<b>📥 Yangi xabar keldi!</b>
————————
<b>👤 ${t('Name')}:</b> ${name}
<b>📧 ${t('Email')}:</b> ${email}
<b>📱 ${t('Phone')}:</b> <a href="tel:${number}">${number}</a>
————————
<b>💬 ${t('Your Message')}:</b> 
${message}
`;

    sendMessage(text);
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">{t("Let's work together")}</h2>

        <div className="section-text">
          <p>{t("contactText1")}</p>
          <p>{t("contactText2")}</p>
        </div>
        

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-block">
              <h3 className="info-label"><FaPhoneAlt /> {t("Phone")}</h3>
              <p className="info-value">
                <a href="tel:+998947238850">+998 94 723 88 50</a>
              </p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaEnvelope /> {t("Email")}</h3>
              <p className="info-value">muxamadaliyevibrohim2009@gmail.com</p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaMapMarkerAlt /> {t("Address")}</h3>
              <p className="info-value">Samarkand, Uzbekistan</p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaTelegramPlane /> {t("Telegram")}</h3>
              <p className="info-value">
                <a href="https://t.me/Mukhamadaliyev20" target="_blank" rel="noreferrer">
                  @Mukhamadaliyev20
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="info-label">{t("Name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("Enter your name")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="info-label">{t("Email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("Enter your email")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="number" className="info-label">{t("Phone Number")}</label>
              <input
                type="tel"
                id="number"
                name="number"
                className="form-input"
                value={formData.number}
                onChange={handleChange}
                required
                placeholder={t("Enter your phone number")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="info-label">{t("Your Message")}</label>
              <textarea
                id="message"
                name="message"
                className="message-area"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t("Write your message...")}
              />
            </div>

            <button type="submit" className="send-button" disabled={isLoading}>
              {isLoading ? t("Sending...") : t("Send Message")}
            </button>
            {status && <p className="status-msg">{t(status)}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;