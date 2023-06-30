import React from "react";
import smallline from "../assets/small-line-white.svg";
import img1 from "../assets/partners/p1.svg";
import img2 from "../assets/partners/p2.svg";
import img3 from "../assets/partners/p3.svg";
import img4 from "../assets/partners/p4.svg";
import img5 from "../assets/partners/p5.svg";
import img6 from "../assets/partners/p6.svg";
import img7 from "../assets/partners/p7.svg";

function Partners() {
  const data = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <article>
      <div className="container mb200">
        <div className="container-header">
          <div className="abc">
            <p className="body20">Partners</p>
            <img src={smallline} alt="" />
          </div>
          <h1 className="h1">✨ Trusted by All</h1>
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
