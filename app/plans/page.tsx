import React from "react";
import ClientNavigation from "../../components/ClientNavigation";

export default function PlansPage() {
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
          Plans
        </h1>
        
        <div style={{
          maxWidth: "600px",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#666"
        }}>
          <p>Dreams can turn into reality if you think over a plan on how to achieve it.</p>
        </div>
      </div>
      </div>
    </>
  );
}