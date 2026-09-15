import React from "react";
import { socialLinks } from "../portfolio";

const Footer = () => {
  return (
    <footer className="site-footer">
      <span>&copy; {new Date().getFullYear()} Vincent Cavanna</span>
      {socialLinks.email && (
        <>
          {" · "}
          <a href={socialLinks.email}>Email</a>
        </>
      )}
      {socialLinks.github && (
        <>
          {" · "}
          <a href={socialLinks.github} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </>
      )}
      {socialLinks.linkedin && (
        <>
          {" · "}
          <a href={socialLinks.linkedin} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
        </>
      )}
    </footer>
  );
};

export default Footer;
