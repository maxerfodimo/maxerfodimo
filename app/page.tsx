import React from "react";
import Link from "next/link";

export default function Page() {
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
      }}
    >
      {/* Navigation Links */}
      <div style={{ 
        position: "absolute", 
        top: "20px", 
        right: "20px",
        display: "flex",
        gap: "20px"
      }}>
        <Link href="/about" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "14px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}>
          about
        </Link>
        <Link href="/inspiration" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "14px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}>
          more inspiration
        </Link>
      </div>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "24px",
          gap: "10px",
        }}
      >
        <h1 style={{textAlign: "center"}}>Stay focused...<br /> the result will come</h1>
        <h3  style={{ marginTop: "20px", marginLeft: "auto" }}>Max Erfodimo</h3>
      </div>
    </div>
  );
}
