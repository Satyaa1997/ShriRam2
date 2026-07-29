
import "./Home.css";
import React, { useEffect, useState } from "react";
import heroVideo from "../assets/video.mp4";
import Aminities from "./Aminities";
import Footer from "./Footer";
import Invest from "./Invest";

const Home = () => {

    const [hideContent, setHideContent] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setHideContent(true);
  }, 5000);

  return () => clearTimeout(timer);
}, []);
  return (
  <>
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

       <div className={`hero-content ${hideContent ? "hide-content" : ""}`}>

        <span>Premium Township</span>

        <h1>Shri Ram Film City</h1>

        <p>
          Experience luxury living surrounded by nature,
          world-class amenities and thoughtfully planned. spaces.
        </p>


      </div>

    </section>


<section className="why-choose">

  <div className="overlay"></div>

  <div className="why-container">

    <div className="why-left">

      <span>WHY CHOOSE US</span>

      <h2>
        Why Invest In <br />
        Shri Ram Film City?
      </h2>

      <p>
        Shri Ram Film City is designed to provide an exceptional lifestyle
        with modern infrastructure, premium amenities, and high investment
        potential. Whether you are looking for your dream home or a smart
        investment, we offer the perfect opportunity.
      </p>

      <a href="/project" className="explore-btn">
        Explore Projects
      </a>

    </div>

    <div className="why-right">

      <div className="feature-card card1">
  <h3> Premium Township</h3>
  <p>Beautifully planned residential and commercial development.</p>
</div>

<div className="feature-card card2">
  <h3> Wide Roads</h3>
  <p>Modern road network with proper drainage and street lights.</p>
</div>

<div className="feature-card card3">
  <h3> Green Environment</h3>
  <p>Parks, gardens and eco-friendly surroundings for families.</p>
</div>

<div className="feature-card card4">
  <h3> 24×7 Security</h3>
  <p>Gated community with CCTV surveillance.</p>
</div>

<div className="feature-card card5">
  <h3> High Returns</h3>
  <p>Excellent future appreciation and investment potential.</p>
</div>

<div className="feature-card card6">
  <h3>Prime Location</h3>
  <p>Excellent connectivity to Ayodhya city and highways.</p>
</div>
    </div>

  </div>

</section>

    <section className="achievement-section">

  <div className="achievement-heading">
    <span>WHY SHRI RAM FILM CITY</span>
    <h2>Future-Ready Living</h2>
    <p>
      A premium township designed with modern infrastructure,
      green spaces and world-class amenities.
    </p>
  </div>

  <div className="achievement-grid">

    <div className="achievement-card">
      <div className="number">50+</div>
      <div className="card-content">
        <h3>Acres</h3>
        <p>Premium Township Spread Across a Vast Landscape.</p>
      </div>
    </div>

    <div className="achievement-card">
      <div className="number">24×7</div>
      <div className="card-content">
        <h3>Security</h3>
        <p>Advanced Security with CCTV & Gated Community.</p>
      </div>
    </div>

    <div className="achievement-card">
      <div className="number">100%</div>
      <div className="card-content">
        <h3>Green Zone</h3>
        <p>Beautiful Parks, Landscapes & Eco-Friendly Living.</p>
      </div>
    </div>

    <div className="achievement-card">
      <div className="number">25+</div>
      <div className="card-content">
        <h3>Amenities</h3>
        <p>Club House, Gym, Temple, Shopping & More.</p>
      </div>
    </div>

    <div className="achievement-card">
      <div className="number">1st</div>
      <div className="card-content">
        <h3>Film City</h3>
        <p>One of the Most Unique Township Concepts in the Region.</p>
      </div>
    </div>

  </div>

</section>




{/*-----------------Aminities--------------------*/}

<Aminities />

{/*-----------------Invest--------------------*/}

<Invest />


{/*-----------------Footer--------------------*/}

<Footer />
  </>
  );
};

export default Home;