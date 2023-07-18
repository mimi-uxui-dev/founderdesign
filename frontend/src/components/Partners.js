import React from "react";
import smallline from "../assets/small-line.svg";
import img1 from "../assets/partners/p1.svg";
import img2 from "../assets/partners/p2.svg";
import img3 from "../assets/partners/p3.svg";
import img4 from "../assets/partners/p4.svg";
import img5 from "../assets/partners/p5.svg";
import img6 from "../assets/partners/p6.svg";
import img7 from "../assets/partners/p7.svg";
import { useTranslation } from "react-i18next";

function Partners() {
  const data = [img1, img2, img3, img4, img5, img6, img7];
  const { t } = useTranslation();

  return (
    <article id="partners" className="mt120">
      <div className="container mb200">
        <div className="container-header">
          <div className="abc">
            <p className="body20">{t("Partners")}</p>
            <img src={smallline} alt="" />
          </div>
          <h1 className="h1">✨ {t("Trusted by all")}</h1>
        </div>

        <div className="partners-content mt120">
          {data.map((d) => (
            <img key={d} src={d} alt="" />
          ))}
        </div>
      </div>
    </article>
  );
}

export default Partners;
