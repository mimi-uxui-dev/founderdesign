import React from "react";
import v from "../assets/v.gif";

function Hero() {
  return (
    <article className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1">Design as a Subscription - Simple as that!</h1>
          <p className="body">
            An outstanding design is crucial for you to win longterm! With over
            12 years experiences in design, entrepreneurship and business
            development, we help you to skyrocket your ideas.
          </p>
        </div>

        <img className="video" src={v} alt="" />
      </div>
    </article>
  );
}

export default Hero;
