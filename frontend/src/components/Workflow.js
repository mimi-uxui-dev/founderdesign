import React from "react";
import smallline from "../assets/small-line.svg";
import img1 from "../assets/w1.png";
import img2 from "../assets/w2.png";
import img3 from "../assets/w3.png";

function Workflow() {
  const data = [
    {
      id: 1,
      imgURL: img1,
      content: "Unlock limitless design requests with our subscriptions",
    },
    {
      id: 2,
      imgURL: img2,
      content: "Receive your design within 1 - 3 business days",
    },
    {
      id: 3,
      imgURL: img3,
      content: "We’ll revise the designs until you’re 100% satisfied",
    },
  ];

  return (
    <article className="container mb200 workflow">
      <div className="container-header">
        <div className="abc">
          <p className="body20">Workflow</p>
          <img src={smallline} alt="" />
        </div>
        <h1 className="h1">
          A simple & effective
          <br />
          three step process
        </h1>
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
        See plans
      </a>
    </article>
  );
}

export default Workflow;
