import React from "react";
import v from "../assets/v.gif";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <article className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1">{t("designAsSubs")}</h1>
          <p className="body">{t("designAsSubsP")}</p>
        </div>

        <img className="video" src={v} alt="" />
      </div>
    </article>
  );
}

export default Hero;
