import React from "react";

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
        }}
      >
        <h1 style={{textAlign: "center"}}>Stay focused...<br /> the result will come</h1>
        <h3  style={{ marginTop: "20px", marginLeft: "auto" }}>Max Erfodimo</h3>
      </div>
    </div>
  );
}
