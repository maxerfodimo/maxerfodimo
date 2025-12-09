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
    { href: "/dreams", label: "dreams" },
    { href: "/plans", label: "plans" },
    { href: "/discipline", label: "discipline" },
    { href: "/motivation", label: "motivation" },
    { href: "/program", label: "program" },
    { href: "/author", label: "author" },
    { href: "/about", label: "about focus" },
  ];

  // Determine current page
  const activePath = currentPath || pathname;

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
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
    </nav>
  );
}