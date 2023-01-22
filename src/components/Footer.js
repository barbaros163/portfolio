import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import Github from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <Email />
        <Github />
      </div>
      <p>&copy; 2023 Yasin Yavuz BA </p>
    </div>
  );
};

export default Footer;
