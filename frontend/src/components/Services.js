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
import img from "../assets/Frame .png";

function Services() {
  const data = [
    {
      id: 1,
      imgURL: img1,
      content: "Websites",
    },
    {
      id: 2,
      imgURL: img2,
      content: "PitchDecks",
    },
    {
      id: 3,
      imgURL: img3,
      content: "Apps",
    },
    {
      id: 4,
      imgURL: img4,
      content: "MVP & Clickable Prototypes",
    },
    {
      id: 5,
      imgURL: img5,
      content: "Logo & CorporateDesigns",
    },
    {
      id: 6,
      imgURL: img6,
      content: "Social Media & AdDesigns",
    },
    {
      id: 7,
      imgURL: img7,
      content: "PrintDesigns",
    },
    {
      id: 8,
      imgURL: img8,
      content: "UI/UX Design for Games",
    },
  ];

  return (
    <article className="container mt200 mb200">
      <div className="container-header">
        <div className="abc">
          <p className="body20">SERVICES</p>
          <img src={smallline} alt="" />
        </div>
        <h1 className="h1">
          We offer a wide range
          <br /> of design services
        </h1>
      </div>

      <div className="services-content">
        {data.map((d) => (
          <div key={d.id}>
            <img src={d.imgURL} alt="" />
            <p>{d.content}&nbsp;</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Services;
