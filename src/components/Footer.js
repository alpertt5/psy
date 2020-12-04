import React from "react";
import "./Footer.css";
import gmailIcon from "../icons/gmail.svg";
import linkedinIcon from "../icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="first-icon">
          <img src={gmailIcon} alt="gmail-icon" />
          <span>psikologecemnadir@gmail.com</span>
        </div>
        <div className="linkedin-icon">
          <img src={linkedinIcon} />
          <span></span>
          <a href="https://www.linkedin.com/in/ecemnadir/">
            www.linkedin.com/in/ecemnadir/
          </a>
        </div>
      </div>

      <div className="copy-right">
        &#169;Copyright {new Date().getFullYear()} | All rights reserved |
      </div>
    </footer>
  );
};

export default Footer;
