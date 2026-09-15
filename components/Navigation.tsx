import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { greetings } from "../portfolio";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <header className="site-nav">
      <nav className="site-nav__inner" aria-label="Primary">
        <Link href="/" className="site-nav__brand">
          {greetings.name}
        </Link>
        <ul className="site-nav__links">
          {links.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`site-nav__link${isActive ? " site-nav__link--active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
