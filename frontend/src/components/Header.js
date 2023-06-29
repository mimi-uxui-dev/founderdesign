import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);
  return (
    <header>
      <div
        className={
          scroll
            ? "container header bg-white"
            : "container header bg-transparent"
        }
      >
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <a
          className="button"
          target="_blank"
          href="https://calendly.com/founderdesign/15min"
          rel="noreferrer"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export default Header;
