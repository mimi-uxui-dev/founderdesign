import React from "react";
import smallline from "../assets/small-line.svg";
import img1 from "../assets/001.png";
import img2 from "../assets/002.png";
import img3 from "../assets/003.png";
import img4 from "../assets/004.png";
import img5 from "../assets/005.png";
import img6 from "../assets/006.png";
import img7 from "../assets/007.png";
import img8 from "../assets/008.png";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

function Services() {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      imgURL: img1,
      content: "Websites",
      duration: "~ 5 Days",
    },
    {
      id: 2,
      imgURL: img2,
      content: "PitchDecks",
      duration: "~ 3 Days",
    },
    {
      id: 3,
      imgURL: img3,
      content: "Apps",
      duration: "~ 5 Days",
    },
    {
      id: 4,
      imgURL: img4,
      content: "MVP & Clickable Prototypes",
      duration: "~ 3 Days",
    },
    {
      id: 5,
      imgURL: img5,
      content: "Logo & CorporateDesigns",
      duration: "~ 3 Days",
    },
    {
      id: 6,
      imgURL: img6,
      content: "Social Media & AdDesigns",
      duration: "~ 3 Days",
    },
    {
      id: 7,
      imgURL: img7,
      content: "PrintDesigns",
      duration: "~ 4 Days",
    },
    {
      id: 8,
      imgURL: img8,
      content: "UI/UX Design for Games",
      duration: "~ 7 Days",
    },
  ];

  return (
    <article id="services" className="container mt200 mb200">
      <div className="container-header">
        <div className="abc">
          <p className="body20"> {t("Services")} </p>
          <img src={smallline} alt="" />
        </div>
        <h1 className="h1">{parse(t("WorkflowP"))}</h1>
      </div>

      <div className="services-content">
        {data.map((d) => (
          <div key={d.id}>
            <img src={d.imgURL} alt="" />
            <p>
              {d.content} <br /> <b>{d.duration}</b>
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Services;
