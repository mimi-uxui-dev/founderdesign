import React from "react";
import smallline from "../assets/small-line.svg";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

function SelectedProjects() {
  const data = [
    {
      id: 1,
      img: img1,
      title: "FounderStudio",
      content: "VideoPitch App to grow and fundraise with the crowd",
    },
    {
      id: 2,
      img: img2,
      title: "LevelHeroes",
      content:
        "Building games together We intends to bridge the gap between centralized gaming communities to bring them decentralized assets.",
    },
    {
      id: 3,
      img: img3,
      title: "Oniwa",
      content:
        "Daily positive activity is key for your mental health. We encourage our clients to learn living in the present and live their fullest",
    },
  ];

  return (
    <article className="container mt200 mb200">
      <div className="container-header">
        <div className="abc">
          <p className="body20">Our Work</p>
          <img src={smallline} alt="" />
        </div>
        <h1 className="h1">Selected Projects</h1>
      </div>

      <div className="projects-grid mt120">
        {data.map((d) => (
          <div key={d.id} className="project-card">
            <img src={d.img} alt="" />
            <div className="project-content">
              <h3>{d.title}</h3>
              <p>{d.content}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default SelectedProjects;
