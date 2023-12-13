import React from "react";

import backImg from "../assets/back.jpg";

import "./HomeStyles.css";

export default function Home() {
  return (
    <div className="home">
      <div className="wrap">
        <div className="mask">
          <img className="mask-img" src={backImg} alt="Ukraine in flowers" />
        </div>
        <div className="content">
          {/* <p>Ella Zolotarenko</p> */}
          {/* <h1>Ukrainian artist</h1> */}
          <p>Petrikivka style</p>
        </div>
      </div>
    </div>
  );
}
