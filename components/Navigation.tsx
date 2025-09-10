import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const pathname = usePathname();
  
  // Define all navigation links
  const navLinks = [
    { href: "/", label: "home" },
    { href: "/dreams", label: "dreams" },
    { href: "/plans", label: "plans" },
    { href: "/focus", label: "focus" },
    { href: "/discipline", label: "discipline" },
    { href: "/motivation", label: "motivation" },
    { href: "/about", label: "about" },
    { href: "/random-quote", label: "random quote" },
  ];

  // Determine current page
  const activePath = currentPath || pathname;

  return (
    <nav style={{
      position: "sticky",
      top: "0",
      left: "0",
      right: "0",
      zIndex: 1000,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      padding: "15px 0",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        rowGap: "5px",
        columnGap: "10px",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 10px",
      }}>
        {navLinks.map((link) => {
          const isActive = activePath === link.href;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                color: isActive ? "#333" : "#666",
                fontSize: "14px",
                fontWeight: isActive ? "bold" : "normal",
                opacity: isActive ? "1" : "0.8",
                transition: "all 0.3s ease",
                padding: "8px 12px",
                borderRadius: "20px",
                backgroundColor: isActive ? "rgba(0, 0, 0, 0.05)" : "transparent",
                border: isActive ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.opacity = "0.8";
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}