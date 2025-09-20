'use client';

import React from 'react';
import ClientNavigation from "../../components/ClientNavigation";

export default function AuthorPage() {
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
    </>
  );
}