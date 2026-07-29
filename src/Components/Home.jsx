import React from "react";
import "./Home.css";
import heroVideo from "../assets/video.mp4";

const Home = () => {
  return (
    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span>Premium Township</span>

        <h1>Shri Ram Film City</h1>

        <p>
          Experience luxury living surrounded by nature,
          world-class amenities and thoughtfully planned spaces.
        </p>

        <a href="/contact" className="hero-btn">
          Contact Now
        </a>

      </div>

    </section>
  );
};

export default Home;