import React from 'react'
import {Link} from "react-router-dom"
import "./Invest.css";

const Invest = () => {
  return (
    <div>
       <section className="investment-cta">

      <div className="investment-overlay"></div>

      <div className="investment-container">

        <div className="investment-content">

          <span className="investment-tag">
            READY TO INVEST?
          </span>

          <h2>
            Find Your Dream Property
            <br />
            <span>At Shri Ram Film City</span>
          </h2>

          <p>
            Book your site visit today and discover premium residential
            plots, commercial spaces, and world-class amenities in
            Ayodhya's fastest-growing township.
          </p>

          <div className="investment-buttons">

            <a
              href="tel:+919452000042"
              className="investment-btn primary-btn"
            >
              <span>📞</span>
              Call Now
            </a>

            <Link
              to="/contact"
              className="investment-btn secondary-btn"
            >
              <span>📅</span>
              Book Site Visit
            </Link>

          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Invest
