import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="container mb200">
      <div className="footer-top">
        <div>
          <h6> {t("contact")} </h6>
          <a
            href="mailto:team@founderdesign.io"
            target="_blank"
            rel="noreferrer"
          >
            team@founderdesign.io
          </a>
        </div>
        <p>
          FounderDesign.io, Gubelstrasse 15, <br />
          6300 Zug, Switzerland
        </p>
      </div>

      <div className="footer-bottom">
        <div>
          <a href="/policies/privacy">Privacy Policy</a>
          <a href="/policies/terms">Terms of Service</a>
          <a href="/policies/imprint">Impressum</a>
        </div>
        <p>©FounderDesign</p>
      </div>
    </footer>
  );
}

export default Footer;
