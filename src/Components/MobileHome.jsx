import React from "react";
import "./MobileHome.css";
import heroVideo from "../assets/video.mp4";

const MobileHome = () => {
  return (
    <section className="mobileHero">

      <video
        className="mobileVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="mobileOverlay"></div>

      <div className="mobileContent">

        <span>Premium Township</span>

        <h1>Shri Ram Film City</h1>

        <p>
          Luxury living with modern amenities,
          green landscapes and peaceful lifestyle.
        </p>

        <a href="/contact" className="mobileBtn">
          Contact Now
        </a>

      </div>

    </section>
  );
};

export default MobileHome;