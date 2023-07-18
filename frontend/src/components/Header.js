import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
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
        <div className="rightnav">
          <div className="lang">
            <span
              onClick={() => i18next.changeLanguage("en")}
              style={i18next.language !== "en" ? { opacity: ".5" } : {}}
            >
              EN
            </span>
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <span
              onClick={() => i18next.changeLanguage("de")}
              style={i18next.language !== "de" ? { opacity: ".5" } : {}}
            >
              DE
            </span>
          </div>
          <a
            className="button"
            target="_blank"
            href="https://calendly.com/founderdesign/15min"
            rel="noreferrer"
          >
            {t("getInTouch")}
          </a>
          <img className="menu" src={menu} alt="" onClick={openMenu} />
        </div>
      </div>

      <div className={open ? `menu-content displayFlex` : `menu-content none`}>
        <span onClick={closeMenu}>X</span>
        <a onClick={closeMenu} href="#workflow">
          {t("Workflow")}
        </a>
        <a onClick={closeMenu} href="#whatweoffer">
          {t("What We Offer")}
        </a>
        <a onClick={closeMenu} href="#services">
          {t("Services")}
        </a>
        <a onClick={closeMenu} href="#ourwork">
          {t("Our Work")}
        </a>
        <a onClick={closeMenu} href="#plans">
          {t("Pricing")}
        </a>
        <a onClick={closeMenu} href="#partners">
          {t("Partners")}
        </a>
        <br />
        <div className="lang1">
          <div
            onClick={() => i18next.changeLanguage("en")}
            style={i18next.language !== "en" ? { opacity: ".5" } : {}}
          >
            EN
          </div>
          &nbsp;&nbsp;/&nbsp;&nbsp;
          <div
            onClick={() => i18next.changeLanguage("de")}
            style={i18next.language !== "de" ? { opacity: ".5" } : {}}
          >
            DE
          </div>
        </div>
        <br />

        <a
          className="button"
          target="_blank"
          href="https://calendly.com/founderdesign/15min"
          rel="noreferrer"
          onClick={closeMenu}
        >
          {t("getInTouch")}
        </a>
      </div>
    </header>
  );
}

export default Header;
