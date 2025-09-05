import React from "react";
import ClientNavigation from "../../components/ClientNavigation";

export default function FocusPage() {
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
          Focus
        </h1>
        
        <div style={{
          maxWidth: "600px",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#666"
        }}>
          <p>Close your eyes at the end of your day and think if you have done everything to get your goal. Keep focusing on your goal.</p>
          <br/>
          <p>When you have motivation, you will start moving toward your goal; when you have discipline, you will keep going until you reach it; when you have focus, you will not lose your direction; and when you combine all of them, nothing in this world will be beyond your reach.</p>
        </div>
      </div>
      </div>
    </>
  );
}