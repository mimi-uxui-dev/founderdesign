import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setTimeout(() => setOpen(false), 1200);

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
        <img className="menu" src={menu} alt="" onClick={openMenu} />
      </div>

      <div className={open ? `menu-content displayFlex` : `menu-content none`}>
        <span onClick={closeMenu}>X</span>

        <a onClick={closeMenu} href="#workflow">
          Workflow
        </a>
        <a onClick={closeMenu} href="#whatweoffer">
          What We Offer
        </a>
        <a onClick={closeMenu} href="#services">
          Services
        </a>
        <a onClick={closeMenu} href="#ourwork">
          Our Work
        </a>
        <a onClick={closeMenu} href="#plans">
          Pricing
        </a>
        <a onClick={closeMenu} href="#partners">
          Partners
        </a>
        <br />
        <a
          className="button"
          target="_blank"
          href="https://calendly.com/founderdesign/15min"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export default Header;
