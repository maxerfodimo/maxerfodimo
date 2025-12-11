import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Navigation.module.css';

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const pathname = usePathname();

  // Define all navigation links
  const navLinks = [
    { href: "/", label: "focus" },
    { href: "/quotes", label: "quotes" },
    { href: "/program", label: "program" },
    { href: "/contact", label: "contact" },
  ];

  // Determine current page
  const activePath = currentPath || pathname;

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <blockquote className={styles.mainQuote} cite="https://example.com/original-article">
          <p className={styles.mainQuote}>
            Stay focused, the result will come.
          </p>
          <footer className={styles.mainQuoteAuthor}>
            — <cite>Max Erfodimo</cite>
          </footer>
        </blockquote>
        <div>
          {navLinks.map((link) => {
            const isActive = activePath === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}