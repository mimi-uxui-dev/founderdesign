import React from "react";
import smallline from "../assets/small-line-white.svg";
import img1 from "../assets/b1.png";
import img2 from "../assets/b2.png";
import img3 from "../assets/b3.png";
import img4 from "../assets/b4.png";
import img5 from "../assets/b5.png";
import img6 from "../assets/b6.png";

function Benefits() {
  const data = [
    {
      id: 1,
      imgURL: img1,
      title: "Infinity Design",
      content: "Unlock infinite design requests",
    },
    {
      id: 2,
      imgURL: img2,
      title: "Fixed monthly price",
      content: "No surprises! Enjoy a fixed monthly price",
    },
    {
      id: 3,
      imgURL: img3,
      title: "Rockstar quality",
      content:
        "Unleash remarkable design quality whenever you need it, just a click away.",
    },
    {
      id: 4,
      imgURL: img4,
      title: "Flexible",
      content: "Cancel your subscription at any time",
    },

    {
      id: 5,
      imgURL: img5,
      title: "Fast delivery",
      content:
        "Receive your designs individually, typically within a few days on average",
    },
    {
      id: 6,
      imgURL: img6,
      title: "It’s all yours",
      content:
        "Every design is uniquely crafted just for you, ensuring that it belongs exclusively to you, with all rights.",
    },
  ];

  return (
    <article className="darkbg pb pt ">
      <div className="container">
        <div className="container-header">
          <div className="abc">
            <p className="body20">What we offer</p>
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
          See plans
        </a>
      </div>
    </article>
  );
}
export default Benefits;
