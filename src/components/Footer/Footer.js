import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="legal">
        <span>© 2018 BaseballCloud</span>
        <span>
          <a href="/">Terms of Services</a>
        </span>
        <span>
          <a href="/">Privacy Policy</a>
        </span>
      </div>
      <div className="socialMedia">
        <span>
          <a href="/">Blog</a>
        </span>
        <span>
          <a href="/">Twitter</a>
        </span>
        <span>
          <a href="/">Instagram</a>
        </span>
        <span>
          <a href="/">Facebook</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
