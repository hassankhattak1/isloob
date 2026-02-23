// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT: BRAND INFO */}
        <div className="footer-left">
          <h2 className="footer-logo"><img src="/logo.png" alt="Isloob Logo" width="150" height="60" /></h2>
          <p className="footer-desc">
            Premium passenger transport services in Sharjah, UAE. Experience luxury, reliability, and comfort with every ride.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        {/* CENTER: QUICK LINKS */}
        <div className="footer-center">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="footer-right">
          <h3 className="footer-heading">Contact Us</h3>
          <p>Sharjah, UAE</p>
          <p>Phone: +971 56 144 6585</p>
          <p>Email: nayanawa.auto@gmail.com</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {currentYear} ISLOOB AL ALWAN TRANSPORT. All Rights Reserved.</p>
      </div>

      {/* STYLES */}
      <style>{`
        .footer {
          background: linear-gradient(135deg, #fffaf0, #ffffff, #fdf6e3); /* soft cream to white gradient */
          color: #333;
          padding: 60px 20px 20px 20px;
          font-family: 'Arial', sans-serif;
          box-shadow: inset 0 0 30px rgba(0,0,0,0.03);
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-left, .footer-center, .footer-right {
          flex: 1;
          min-width: 250px;
        }

        .footer-logo {
          font-size: 32px;
          font-weight: 900;
          color: #C2912E; /* subtle golden accent */
          margin-bottom: 15px;
        }

        .footer-desc {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
          color: #555;
        }

        .footer-socials a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #C2912E, #DBAB19); /* soft gold gradient */
          color: #fff;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(202,153,39,0.4);
        }

        .footer-socials a:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(202,153,39,0.6), 0 0 30px rgba(202,153,39,0.3);
        }

        .footer-heading {
          font-size: 18px;
          font-weight: 700;
          color: #C2912E;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .footer-links {
          list-style: none;
          
        
          display: flex;
            flex-direction: column;
        }

        

        .footer-links li a {
          color: #333;
          align-items: center;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-links li a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background: #C2912E;
          transition: 0.3s ease;
        }

        .footer-links li a:hover {
          color: #C2912E;
        }

        .footer-links li a:hover::after {
          width: 100%;
        }

        .footer-right p {
          margin-bottom: 10px;
          font-size: 14px;
          color: #555;
        }

        .footer-bottom {
          border-top: 1px solid #C2912E;
          margin-top: 30px;
          padding-top: 15px;
          text-align: center;
          font-size: 12px;
          color: #777;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .footer-container { flex-direction: column; gap: 30px; }
          .footer-left, .footer-center, .footer-right { min-width: 100%; }
          .footer-socials a { margin-right: 8px; }
        }
      `}</style>
    </footer>
  );
}