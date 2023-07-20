import React from "react";
import smallline from "../assets/small-line.svg";
import img1 from "../assets/project/1.png";
import img2 from "../assets/project/2.png";
import img3 from "../assets/project/3.png";
import img4 from "../assets/project/4.png";
import { useTranslation } from "react-i18next";

function SelectedProjects() {
  const { t } = useTranslation();

  const data = [img1, img2, img3, img4];

  return (
    <article id="ourwork" className="container mt200 mb200">
      <div className="container-header">
        <div className="abc">
          <p className="body20">{t("Our Work")}</p>
          <img src={smallline} alt="" />
        </div>
        <h1 className="h1">{t("Selected Projects")}</h1>
      </div>

      <div className="projects-grid mt120">
        {data.map((d) => (
          <img key={d} src={d} alt="" />
        ))}
      </div>
    </article>
  );
}

export default SelectedProjects;
