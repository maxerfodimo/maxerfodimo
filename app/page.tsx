import React from "react";
import ClientNavigation from "../components/ClientNavigation";

export default function Page() {
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
          marginTop: "100px",
        }}
      >
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "24px",
          gap: "10px",
          padding: "0 8px",
        }}
      >
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 5vw, 2.5rem)",
          lineHeight: "1.2",
          margin: "0",
          padding: "0 10px"
        }}>
          Stay focused...<br /> the result will come
        </h1>
        <h3 style={{ 
          marginTop: "20px", 
          marginLeft: "auto",
          fontSize: "clamp(1.5rem, 3vw, 2rem)"
        }}>
          Max Erfodimo
        </h3>
      </div>
      </div>
    </>
  );
}
