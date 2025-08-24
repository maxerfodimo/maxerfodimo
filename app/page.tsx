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
      <h1 style={{ marginBottom: "20px" }}>Max Erfodimo</h1>
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
        <div>Stay focused...</div>
        <div> the result will come</div>
      </div>
    </div>
  );
}
