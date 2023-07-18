import React from "react";
import smallline from "../assets/small-line.svg";
import img1 from "../assets/w1.png";
import img2 from "../assets/w2.png";
import img3 from "../assets/w3.png";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

function Workflow() {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      imgURL: img1,
      content: t("w1"),
    },
    {
      id: 2,
      imgURL: img2,
      content: t("w2"),
    },
    {
      id: 3,
      imgURL: img3,
      content: t("w3"),
    },
  ];

  return (
    <article id="workflow" className="container mb200 mt120 workflow">
      <div className="container-header">
        <div className="abc">
          <p className="body20">Workflow</p>
          <img src={smallline} alt="" />
        </div>
        <h1 className="h1">{parse(t("WorkflowP"))} </h1>
      </div>

      <div className="workflow-content">
        {data.map((d) => (
          <div key={d.id}>
            <img src={d.imgURL} alt="" />
            <p>{d.content}</p>
          </div>
        ))}
      </div>

      <a className="button flexcentercenterbtn" href="#plans">
        {t("seePlans")}
      </a>
    </article>
  );
}

export default Workflow;
