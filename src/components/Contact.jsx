import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
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
        "service_jyefsol",      // NEW SERVICE ID
        "template_j5b0mmj",     // NEW TEMPLATE ID
        formRef.current,
        "GufJTDNhG5qjzVwt7"      // NEW PUBLIC KEY
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setLoading(false);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 className="heading mb-16 text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Contact Us
        </h2>
         

          <div className="divider"></div>
<div className="info leading-10">

  <div className="info-item">
    <div className="icon-circle">
      <FaPhoneAlt className="circle-icon" />
    </div>
    <span className="info-text">+971 50 123 4567</span>
  </div>

  <div className="info-item">
    <div className="icon-circle">
      <FaEnvelope className="circle-icon" />
    </div>
    <span className="info-text">isloob@gmail.com</span>
  </div>

  <div className="info-item">
    <div className="icon-circle">
      <FaMapMarkerAlt className="circle-icon" />
    </div>
    <span className="info-text">Sharjah, UAE</span>
  </div>

</div>
        </div>

        {/* RIGHT SIDE */}
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
              <label>Name</label>
            </div>

            <div className={`input-group ${focused === "email" ? "active" : ""}`}>
              <input
                type="email"
                name="user_email"
                required
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
              <label>Email</label>
            </div>

            <div className={`input-group ${focused === "message" ? "active" : ""}`}>
              <textarea
                name="message"
                required
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              ></textarea>
              <label>Message</label>
            </div>

            <button type="submit" className="contactbutton" disabled={loading}>
              {loading ? (
                <span className="spinner"></span>
              ) : success ? (
                "✓ Sent Successfully"
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

      </div>

      {/* MAP SECTION */}
      <div className="map-section">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.785273896278!2d55.44218367514156!3d25.31141742706532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f00312dd191%3A0x5cd2804678b31dfd!2sISLOOB%20ALWAN%20PASSENGER%20BUS%20LEASED%20L.L.C.SP!5e0!3m2!1sen!2s!4v1771841167529!5m2!1sen!2s"
            loading="lazy"
            allowFullScreen
            title="ISLOOB Location"
          ></iframe>
        </div>
      </div>
            {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} ISLOOB AL ALWAN TRANSPORT. All Rights Reserved.
          </p>

          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>

      <style>{`
      /* FOOTER */
.footer {
  margin-top: 80px;
  padding: 40px 20px;
  background: linear-gradient(135deg,#f9f6ef,#ffffff,#f3e6c8);
  border-top: 2px solid #C2912E;
}

.footer-content {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer p {
  font-weight: 600;
  color: #333;
}

.footer-links {
  display: flex;
  gap: 25px;
}

.footer-links a {
  text-decoration: none;
  font-weight: 600;
  color: #C2912E;
  transition: 0.3s ease;
}

.footer-links a:hover {
  color: #000;
}
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
  background: linear-gradient(135deg,#C2912E,#DBAB19,#CA9927);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(194,145,46,0.35);
  transition: 0.3s ease;
}

.icon-circle img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: brightness(0) invert(1); /* makes icon white */
}

.info-text {
  font-weight: 700;
  font-size: 17px;
  color: #333;
}

.info-item:hover .icon-circle {
  transform: scale(1.1);
  box-shadow: 0 15px 30px rgba(194,145,46,0.5);
}
        .contact-section {
          padding: 120px 60px 0 60px;
          background: linear-gradient(135deg,#f9f6ef,#ffffff,#f3e6c8);
        }

        .contact-container {
          display: flex;
          gap: 80px;
          max-width: 1200px;
          margin: auto;
          align-items: center;
        }

        .contact-left {
          flex: 1;
        }

        .gradient-heading {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(90deg,#C2912E,#DBAB19,#CA9927);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }

        .glass-card {
          flex: 1;
          backdrop-filter: blur(20px);
          background: rgba(255,255,255,0.35);
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .input-group {
          position: relative;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 16px;
          border: 2px solid #ddd;
          background: transparent;
          border-radius: 8px;
          outline: none;
        }

        .input-group textarea {
          height: 140px;
          resize: none;
        }

        .input-group label {
          position: absolute;
          left: 16px;
          top: 16px;
          color: #777;
          transition: 0.3s ease;
          pointer-events: none;
        }

        .input-group input:focus + label,
        .input-group textarea:focus + label,
        .input-group input:valid + label,
        .input-group textarea:valid + label {
          top: -10px;
          left: 12px;
          font-size: 12px;
          color: #C2912E;
          background: white;
          padding: 0 5px;
        }

        .contactbutton {
          padding: 14px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(90deg,#C2912E,#DBAB19,#CA9927);
          font-weight: 700;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 3px solid rgba(0,0,0,0.2);
          border-top: 3px solid black;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* MAP */
        .map-section {
          margin-top: 100px;
        }

        .map-wrapper {
          position: relative;
          height: 450px;
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(100%);
          transition: 0.4s ease;
        }

        .map-wrapper:hover iframe {
          filter: grayscale(0%);
        }

        .direction-btn {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg,#C2912E,#DBAB19,#CA9927);
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: bold;
          text-decoration: none;
          color: black;
        }

        @media (max-width: 900px) {
          .contact-container {
            flex-direction: column;
          }

          .glass-card {
            width: 100%;
          }

          .map-wrapper {
            height: 350px;
          }
        }

      `}</style>
    </section>
  );
}