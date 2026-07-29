import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo & About */}

        <div className="footer-box">

          <img src={logo} alt="Shri Ram Film City" className="footer-logo" />

          <p>
            Welcome to Shri Ram Film City, a premium township project in
            Ayodhya offering residential plots, commercial spaces, and
            world-class amenities for modern living.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/project">Projects</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p>📍 Raftar Group Building 5/71, Vikas Nagar, Lucknow - 226022</p>

          <p>📞 +91 9452000042</p>

          <p>📞 +91 9455000053</p>

          <p>✉️ shriramfilmcity@gmail.com</p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Shri Ram Film City | All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer
