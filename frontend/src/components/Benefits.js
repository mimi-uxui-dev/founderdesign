import React from "react";
import smallline from "../assets/small-line-white.svg";
import img1 from "../assets/b1.png";
import img2 from "../assets/b2.png";
import img3 from "../assets/b3.png";
import img4 from "../assets/b4.png";
import img5 from "../assets/b5.png";
import img6 from "../assets/b6.png";
import { useTranslation } from "react-i18next";

function Benefits() {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      imgURL: img1,
      title: t("b01"),
      content: t("b1"),
    },
    {
      id: 2,
      imgURL: img2,
      title: t("b02"),
      content: t("b2"),
    },
    {
      id: 3,
      imgURL: img3,
      title: t("b03"),
      content: t("b3"),
    },
    {
      id: 4,
      imgURL: img4,
      title: t("b04"),
      content: t("b4"),
    },

    {
      id: 5,
      imgURL: img5,
      title: t("b05"),
      content: t("b5"),
    },
    {
      id: 6,
      imgURL: img6,
      title: t("b06"),
      content: t("b6"),
    },
  ];

  return (
    <article id="whatweoffer" className="darkbg pb pt ">
      <div className="container">
        <div className="container-header">
          <div className="abc">
            <p className="body20"> {t("What We Offer")} </p>
            <img src={smallline} alt="" />
          </div>
          <h1 className="h1">✨ How do you benefit?</h1>
        </div>

        <div className="benefits-content">
          {data.map((d) => (
            <div key={d.id} className="benefits-content-a">
              <img src={d.imgURL} alt="" />
              <div className="benefits-content-c">
                <b>{d.title}</b>
                <p>{d.content}</p>
              </div>
            </div>
          ))}
        </div>

        <a className="button flexcentercenterbtn" href="#plans">
          {t("seePlans")}
        </a>
      </div>
    </article>
  );
}
export default Benefits;
