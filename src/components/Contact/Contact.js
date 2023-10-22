import React from "react";
import "./contact.css";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Contact() {
  return (
    <div className="contact" id="section-4">
      <div className="contactTitleContainer">
        <div className="contactInput">
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
        <div className="rightContact">
          <div className="contactTitle">Contact</div>
          <div className="contactText">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </div>
          <div className="contactIcons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoFacebook size={40} />
            </a>
            <a href="" target="_blank" rel="npreferrer">
              <AiOutlineTwitter size={40} />
            </a>
            <a href="" target="_blank" rel="npreferrer">
              <AiFillLinkedin size={40} />
            </a>
          </div>
        </div>
      </div>
      <div className="sendButtonContainer">
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Contact;
