'use client';
import React from "react";
import ClientNavigation from "../../components/ClientNavigation";


export default function ContactPage() {
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
          padding: "8px",
          minHeight: "70vh"
        }}
      >
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e0e0e0",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            maxWidth: "600px",
            textAlign: "center"
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              margin: "0 0 20px 0",
              fontWeight: "300",
              color: "#333"
            }}
          >
            Max Erfodimo
          </h1>

          <div
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
              lineHeight: "1.6",
              marginBottom: "30px",
              color: "#666"
            }}
          >
            Author & Creator
          </div>

          <div
            style={{
              marginTop: "20px"
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
                margin: "0 0 20px 0",
                color: "#333",
                fontWeight: "400"
              }}
            >
              Connect with me
            </h2>

            <a
              href="https://instagram.com/maxerfodimo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#333",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "25px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#555";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#333";
              }}
            >
              @maxerfodimo
            </a>
          </div>

          <div
            style={{
              marginTop: "30px",
              fontSize: "14px",
              color: "#888",
              fontStyle: "italic"
            }}
          >
            "Stay focused, the result will come."
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Georgia",
          padding: "40px",
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >

        <h1 style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.5rem",
          color: "#333"
        }}>
          About Focus
        </h1>

        <div style={{ fontSize: "18px", color: "#444" }}>
          <p style={{ marginBottom: "20px" }}>
            In today's digital age, maintaining focus has become one of the most challenging yet crucial skills for success and personal fulfillment.
          </p>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", color: "#333" }}>
            The Social Media Distraction
          </h2>

          <p style={{ marginBottom: "20px" }}>
            Social media platforms are designed to capture and hold our attention. They create endless streams of content that can consume hours of our time,
            often leaving us feeling drained and unproductive. While these platforms can be valuable for connection and information, they frequently
            become a barrier to achieving our most important goals.
          </p>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", color: "#333" }}>
            Why Focus Matters
          </h2>

          <p style={{ marginBottom: "20px" }}>
            True success comes from consistent, focused effort toward meaningful objectives. When we lose focus, we scatter our energy across
            countless distractions, making it nearly impossible to make significant progress in any area of our lives.
          </p>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", color: "#333" }}>
            The Power of Intentional Focus
          </h2>

          <p style={{ marginBottom: "20px" }}>
            This project serves as a simple reminder: <strong>Stay focused on what truly matters.</strong> It's about remembering where you're going,
            what you want to achieve, and what you need in your life. It's about not losing sight of your purpose amid the noise of modern life.
          </p>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", color: "#333" }}>
            Practical Steps to Maintain Focus
          </h2>

          <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Set clear, specific goals for each day</li>
            <li style={{ marginBottom: "10px" }}>Limit social media usage to specific times</li>
            <li style={{ marginBottom: "10px" }}>Create distraction-free work environments</li>
            <li style={{ marginBottom: "10px" }}>Practice mindfulness and presence</li>
            <li style={{ marginBottom: "10px" }}>Regularly review and realign with your core values</li>
          </ul>

        </div>
      </div>
    </>
  );
} 