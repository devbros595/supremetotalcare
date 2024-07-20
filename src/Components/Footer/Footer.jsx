import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <span>Explore</span>
      </div>
      <ul className="footer-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/shipping">Shipping</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/terms-of-service">Terms of Service</Link></li>
      </ul>
      <div className="footer-sm-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram fa-lg"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook fa-lg"></i>
        </a>
        <a href="https://whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-whatsapp fa-lg"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-twitter fa-lg"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-youtube fa-lg"></i>
        </a>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
}