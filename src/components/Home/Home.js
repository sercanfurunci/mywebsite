import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="helloTitleContainer">
        <div className="helloTitle">HELLO</div>
        <div className="homeText">
          With a focus in Branding and Art Direction, I strive to create lasting
          connections with people through meaningful and deliberate design.
        </div>
        <div className="seeWorksButtonContainer">
          <button className="seeWorksButton">See Works</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
