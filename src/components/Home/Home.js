import React from "react";
import "./home.css";

function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById("section-3");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="home" id="section-1">
      <div className="helloTitleContainer">
        <div className="helloTitle">HELLO</div>
        <div className="homeText">
          With a focus in Branding and Art Direction, I strive to create lasting
          connections with people through meaningful and deliberate design.
        </div>
        <div className="seeWorksButtonContainer">
          <button className="seeWorksButton" onClick={handleClickScroll}>
            See Works
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
