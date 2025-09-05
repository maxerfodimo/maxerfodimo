import React from "react";
import Link from "next/link";

export default function PlansPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "90vh",
        fontFamily: "Georgia",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Navigation Links */}
      <div style={{ 
        position: "absolute", 
        top: "20px", 
        right: "20px",
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        maxWidth: "300px"
      }}>
        <Link href="/dreams" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "12px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}>
          dreams
        </Link>
        <Link href="/plans" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "12px",
          opacity: "1",
          fontWeight: "bold",
          transition: "opacity 0.3s ease"
        }}>
          plans
        </Link>
        <Link href="/focus" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "12px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}>
          focus
        </Link>
        <Link href="/discipline" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "12px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}>
          discipline
        </Link>
        <Link href="/motivation" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "12px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}>
          motivation
        </Link>
        <Link href="/about" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "12px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}>
          about
        </Link>
        <Link href="/inspiration" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "12px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}>
          more inspiration
        </Link>
        <Link href="/" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "12px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}>
          home
        </Link>
      </div>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "24px",
          gap: "20px",
          padding: "0 8px",
          textAlign: "center",
        }}
      >
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 5vw, 2.5rem)",
          lineHeight: "1.2",
          margin: "0",
          padding: "0 10px"
        }}>
          Plans
        </h1>
        
        <div style={{
          maxWidth: "600px",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#666"
        }}>
          <p>This page is coming soon...</p>
          <p>Here you will find content about planning and goal setting.</p>
        </div>
      </div>
    </div>
  );
}