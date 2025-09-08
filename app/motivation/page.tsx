import React from "react";
import ClientNavigation from "../../components/ClientNavigation";

export default function MotivationPage() {
  return (
    <>
      <ClientNavigation />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Georgia",
          padding: "20px",
        }}
      >
      
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
          Motivation
        </h1>
        
        <div style={{
          maxWidth: "600px",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#666"
        }}>
          <p>Use motivation for your goals. If you don't have it, use discipline, but never— "maybe later".</p>
        <br />
        <p>If you don't know why you wake up in the morning, maybe you should sleep a bit longer.</p>
        <br />
        <p>Don't take the fear of failure on your trip for success.</p>
        </div>
      </div>
      </div>
    </>
  );
}