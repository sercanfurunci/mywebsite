import React from "react";
import "./navbar.css";
function Navbar() {
  const handleClickScroll1 = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScroll2 = () => {
    const element = document.getElementById("section-2");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScroll3 = () => {
    const element = document.getElementById("section-3");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScroll4 = () => {
    const element = document.getElementById("section-4");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar">
      <div className="navbarName">Sercan F.</div>
      <div className="navbarmenu">
        <div style={{ cursor: "pointer" }} onClick={handleClickScroll1}>
          HOME
        </div>
        <div style={{ cursor: "pointer" }} onClick={handleClickScroll2}>
          SKILLS
        </div>
        <div style={{ cursor: "pointer" }} onClick={handleClickScroll3}>
          PROJECTS
        </div>
        <div style={{ cursor: "pointer" }} onClick={handleClickScroll4}>
          CONTACT
        </div>
      </div>
    </div>
  );
}

export default Navbar;
