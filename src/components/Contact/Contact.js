import React from "react";
import "./contact.css";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Contact() {
  return (
    <div className="contact">
      <div className="contactTitleContainer">
        <div className="contactText">
          <div>YOUR NAME</div>
          <input type="text" placeholder="NAME" className="contactName"></input>
          <div>YOUR EMAIL</div>
          <input
            type="email"
            placeholder="e.g example@email.com"
            className="contactMail"
          ></input>
          <div>MESSAGE</div>
          <textarea
            placeholder="YOUR MESSAGE"
            className="contactMessage"
          ></textarea>
        </div>
        <div className="contactTitle">Contact</div>
        <div className="contactText">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium
        </div>
        <div contactIcons>
          <BiLogoFacebook size={40} />
          <AiOutlineTwitter size={40} />
          <AiFillLinkedin size={40} />
        </div>
      </div>
      <div className="sendButtonContainer">
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Contact;
