import React from "react";
import video from "../assets/video.mp4";

function Hero() {
  return (
    <article className="hero mbhero">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1">Design as a Subscription - Simple as that!</h1>
          <p className="body">
            An outstanding design is crucial for you to win longterm! With over
            12 years experiences in design, entrepreneurship and business
            development, we help you to skyrocket your ideas.
          </p>
        </div>
        <div className="video-container">
          <video
            className="video"
            loop="loop"
            muted="muted"
            controls={false}
            autoPlay={true}
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
          <svg viewBox="0 0 1276.67 1100" fill="none">
            <defs>
              <clipPath id="mask">
                <rect
                  id="rect"
                  x="301.177"
                  y="80"
                  width="907.563"
                  height="301.176"
                  rx="150.588"
                  transform="rotate(90 301.177 80)"
                  fill="#CDE1E8"
                />
                <rect
                  id="rect"
                  x="951.53"
                  y="120"
                  width="907.563"
                  height="301.176"
                  rx="150.588"
                  transform="rotate(90 951.53 120)"
                  fill="#CDE1E8"
                />
                <rect
                  id="rect"
                  x="626.353"
                  y="200"
                  width="907.563"
                  height="301.176"
                  rx="150.588"
                  transform="rotate(90 626.353 200)"
                  fill="#CDE1E8"
                />
                <rect
                  id="rect"
                  x="1276.71"
                  width="907.563"
                  height="301.176"
                  rx="150.588"
                  transform="rotate(90 1276.71 0)"
                  fill="#CDE1E8"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </article>
  );
}

export default Hero;
