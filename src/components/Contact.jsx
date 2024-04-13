import React from "react";
import { SiLinkedin } from "react-icons/si";
import { ImStackoverflow } from "react-icons/im";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONNECT WITH ME📱</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/riaj_tech/" target="_blank" className="items">
            < SiLinkedin  className="icons" />
          </a>
          <a href="https://stackoverflow.com/users/19841047/riaj-ikbal?tab=profile" target="_blank" className="items">
            <ImStackoverflow className="icons" />
          </a>
          <a href="https://linkedin.com/in/riaj-ikbal" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/extran401?t=ntOjPcxFw2RKtqM16LLjYw&s=09" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/RIAJ-GIT" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:extran401@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
