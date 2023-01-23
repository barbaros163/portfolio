import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import Github from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/yasin-yavuz-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>

        <a href="mailto:barbaros1675@gmail.com?body=My custom mail body">
          <Email />
        </a>

        <a
          href="https://github.com/barbaros163"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>
      {/* <p>&copy; 2023 Yasin Yavuz BA </p> */}
    </div>
  );
};

export default Footer;
