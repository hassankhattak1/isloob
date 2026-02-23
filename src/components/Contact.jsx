import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Contact() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      success: "✓ Sent Successfully",
      phone: "+971 56 144 6585",
      emailText: "nayanawa.auto@gmail.com",
      location: "Sharjah, UAE",
      mapTitle: "ISLOOB Location",
    },
    ar: {
      heading: "اتصل بنا",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال",
      success: "✓ تم الإرسال بنجاح",
      phone: "585 144 56 971+",
      emailText: "nayanawa.auto@gmail.com",
      location: "الشارقة، الإمارات",
      mapTitle: "موقع ISLOOB",
    },
  };

  const t = content[lang];

  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_jyefsol",
        "template_j5b0mmj",
        formRef.current,
        "GufJTDNhG5qjzVwt7"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setLoading(false);
      });
  };

  return (
    <section
      className="contact-section"
      id="contact"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 className="heading text-4xl md:text-5xl font-bold mb-6">{t.heading}</h2>
          <div className="divider"></div>
          <div className="info leading-10">
            <div className="info-item">
              <div className="icon-circle"><FaPhoneAlt /></div>
              <span className="info-text">{t.phone}</span>
            </div>
            <div className="info-item">
              <div className="icon-circle"><FaEnvelope /></div>
              <span className="info-text">{t.emailText}</span>
            </div>
            <div className="info-item">
              <div className="icon-circle"><FaMapMarkerAlt /></div>
              <span className="info-text">{t.location}</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right glass-card">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className={`input-group ${focused === "name" ? "active" : ""}`}>
              <input
                type="text"
                name="user_name"
                required
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
              <label>{t.name}</label>
            </div>
            <div className={`input-group ${focused === "email" ? "active" : ""}`}>
              <input
                type="email"
                name="user_email"
                required
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
              <label>{t.email}</label>
            </div>
            <div className={`input-group ${focused === "message" ? "active" : ""}`}>
              <textarea
                name="message"
                required
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              ></textarea>
              <label>{t.message}</label>
            </div>
            <button type="submit" className="contactbutton" disabled={loading}>
              {loading ? <span className="spinner"></span> : success ? t.success : t.submit}
            </button>
          </form>
        </div>
      </div>

      {/* MAP */}
      <div className="map-section">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.785273896278!2d55.44218367514156!3d25.31141742706532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f00312dd191%3A0x5cd2804678b31dfd!2sISLOOB%20ALWAN%20PASSENGER%20BUS%20LEASED%20L.L.C.SP!5e0!3m2!1sen!2s!4v1771841167529!5m2!1sen!2s"
            loading="lazy"
            allowFullScreen
            title={t.mapTitle}
          ></iframe>
        </div>
      </div>

     

      <style>{`
        .contact-section { padding: 120px 20px 0; background: linear-gradient(135deg,#f9f6ef,#ffffff,#f3e6c8);}
        .contact-container { display: flex; gap: 80px; max-width: 1200px; margin: auto; align-items: flex-start; }
        .contact-left { flex: 1; }
        .contact-right { flex: 1; width: 100%; }
        .glass-card { backdrop-filter: blur(20px); background: rgba(255,255,255,0.35); border-radius: 20px; padding: 50px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); width: 100%; }
        form { display: flex; flex-direction: column; gap: 30px; width: 100%; }
        .input-group { position: relative; width: 100%; }
        .input-group input, .input-group textarea { width: 100%; padding: 16px; border: 2px solid #ddd; border-radius: 8px; background: transparent; outline: none; }
        .input-group textarea { height: 140px; resize: none; }
        .input-group label { position: absolute; left: 16px; top: 16px; color: #777; transition: 0.3s ease; pointer-events: none; }
        .input-group input:focus + label, .input-group textarea:focus + label, .input-group input:valid + label, .input-group textarea:valid + label { top: -10px; left: 12px; font-size: 12px; color: #C2912E; background: white; padding: 0 5px; }
        .contactbutton { padding: 14px; border-radius: 999px; border: none; background: linear-gradient(90deg,#C2912E,#DBAB19,#CA9927); font-weight: 700; cursor: pointer; display: flex; justify-content: center; align-items: center; }
        .spinner { width: 18px; height: 18px; border: 3px solid rgba(0,0,0,0.2); border-top: 3px solid black; border-radius: 50%; animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .map-section { margin-top: 100px; }
        .map-wrapper { position: relative; height: 450px; width: 100%; }
        .map-wrapper iframe { width: 100%; height: 100%; border: 0; filter: grayscale(100%); transition: 0.4s ease; }
        .map-wrapper:hover iframe { filter: grayscale(0%); }

        .footer { margin-top: 80px; padding: 40px 20px; background: linear-gradient(135deg,#f9f6ef,#ffffff,#f3e6c8); border-top: 2px solid #C2912E; }
        .footer-content { max-width: 1200px; margin: auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
        .footer p { font-weight: 600; color: #333; }
        .footer-links { display: flex; gap: 25px; flex-wrap: wrap; }
        .footer-links a { text-decoration: none; font-weight: 600; color: #C2912E; transition: 0.3s ease; }
        .footer-links a:hover { color: #000; }

        @media (max-width: 900px) {
          .contact-container { flex-direction: column; gap: 40px; width: 100%; }
          .contact-left, .glass-card { width: 100%; }
          .glass-card { padding: 40px; }
          form { gap: 25px; }
          .map-wrapper { height: 400px; }
          .footer-content { flex-direction: column; align-items: flex-start; gap: 15px; }
          .footer-links { gap: 15px; }

        }
          /* INFO ITEMS - DESKTOP */
.info-item {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
}

.icon-circle {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C2912E, #DBAB19, #CA9927);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 10px 25px rgba(194,145,46,0.35);
  transition: 0.3s ease;
  flex-shrink: 0;
}

.icon-circle:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 30px rgba(194,145,46,0.5);
}

.info-text {
  font-weight: 700;
  font-size: 17px;
  color: #333;
}

/* MOBILE VIEW: SINGLE ROW */
@media (max-width: 900px) {
  .info {
    
    justify-content: space-between;
    gap: 10px;
    flex-wrap: nowrap;
    text-align: center;
  }

  .info-item {
    
    margin-bottom: 20px;
    gap: 8px;
  }

  .info-text {
    font-size: 12px; /* smaller to fit in one row */
    color: #333;
  }

  .icon-circle {
    width: 45px;
    height: 45px;
  }
}
      `}</style>
    </section>
  );
}