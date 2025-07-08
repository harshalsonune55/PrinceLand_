

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

export default function MainFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo & Label */}
        <div className="footer-logo">
          <img src="main.png" alt="Princeland" className="logo-img" />
        </div>

        {/* Middle: Description */}
        <div className="footer-description">
          <p>
            Princelands Developers is a trusted real estate company committed to delivering premium residential and commercial
             projects with integrity and innovation.
             We focus on creating timeless spaces that reflect quality, transparency, and customer satisfaction.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="social-icon" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2025 Princeland Developers. All Rights Reserved /{" "}
        <a href="#" className="footer-link">Privacy Policy</a> /{" "}
        <a href="#" className="footer-link">Cookies</a>
      </div>
    </footer>
  );
}

