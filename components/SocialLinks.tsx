import React from "react";
import { socialLinks } from "../portfolio";

const links = [
  { key: "linkedin", href: socialLinks.linkedin, label: "Linkedin", icon: "fa fa-linkedin" },
  { key: "github", href: socialLinks.github, label: "Github", icon: "fa fa-github" },
  { key: "instagram", href: socialLinks.instagram, label: "Instagram", icon: "fa fa-instagram" },
  { key: "facebook", href: socialLinks.facebook, label: "Facebook", icon: "fa fa-facebook-square" },
  { key: "twitter", href: socialLinks.twitter, label: "Twitter", icon: "fa fa-twitter" },
];

const SocialLinks = ({ onDark = false }: { onDark?: boolean }) => {
  return (
    <div className={`social-links${onDark ? " social-links--on-dark" : ""}`}>
      {links
        .filter(link => link.href)
        .map(link => (
          <a
            key={link.key}
            className="social-links__item"
            href={link.href}
            aria-label={link.label}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className={link.icon} aria-hidden="true" />
          </a>
        ))}
    </div>
  );
};

export default SocialLinks;
