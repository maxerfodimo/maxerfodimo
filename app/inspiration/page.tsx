import React from "react";
import Link from "next/link";

export default function InspirationPage() {
  const quotes = [
    {
      text: "Don't take the fear of failure on your trip for success.",
      author: "Max Erfodimo"
    },
    {
      text: "To be strong means to be brave, to accept defeat. After all, it is our defeats that make us stronger.",
      author: "Max Erfodimo"
    },
    {
      text: "Quite often, success does not come just like that, it comes after 1000 attempts to achieve it.",
      author: "Max Erfodimo"
    },
    {
      text: "Discipline can turn chaos into an incredible result.",
      author: "Max Erfodimo"
    },
    {
      text: "Sometimes you need to continue your work, but you have no energy, no inspiration, no motivation for it. Take discipline. That’s what helps you.",
      author: "Max Erfodimo"
    },
    {
      text: "Discipline is a secret on the way to success. When your brain says, “I can’t. It is not for me. I am not capable,” discipline will help to go ahead",
      author: "Max Erfodimo"
    },
    {
      text: "Close your eyes and think if you have done everything to get your goal. Keep focusing on your goal. You are at the right way.",
      author: "Max Erfodimo"
    },
    {
      text: "When you have motivation, you will start moving toward your goal; when you have discipline, you will keep going until you reach it; when you have focus, you will not lose your direction; and when you combine all of them, nothing in this world will be beyond your reach.",
      author: "Max Erfodimo"
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Georgia",
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      {/* Navigation */}
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <Link href="/" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "14px",
          marginRight: "20px"
        }}>
          ← Home
        </Link>
        <Link href="/about" style={{ 
          textDecoration: "none", 
          color: "#333", 
          fontSize: "14px"
        }}>
          About
        </Link>
      </div>

      <h1 style={{ 
        textAlign: "center", 
        marginBottom: "40px",
        fontSize: "2.5rem",
        color: "#333"
      }}>
        More Inspiration
      </h1>

      <div style={{ fontSize: "18px", color: "#444" }}>
        <p style={{ 
          marginBottom: "30px", 
          textAlign: "center",
          fontSize: "20px",
          fontStyle: "italic"
        }}>
          "Stay focused... the result will come" — Max Erfodimo
        </p>

        <h2 style={{ 
          marginTop: "40px", 
          marginBottom: "25px", 
          color: "#333",
          textAlign: "center"
        }}>
          Quotes on Focus & Success
        </h2>

        <div style={{ 
          display: "grid", 
          gap: "30px",
          marginTop: "30px"
        }}>
          {quotes.map((quote, index) => (
            <div
              key={index}
              style={{
                padding: "25px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              <p style={{ 
                fontSize: "20px", 
                fontStyle: "italic",
                marginBottom: "15px",
                color: "#555"
              }}>
                "{quote.text}"
              </p>
              <p style={{ 
                textAlign: "right", 
                fontWeight: "bold",
                color: "#777"
              }}>
                — {quote.author}
              </p>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: "50px", 
          padding: "30px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "2px solid #e9ecef"
        }}>
          <h3 style={{ 
            marginBottom: "20px", 
            color: "#333",
            textAlign: "center"
          }}>
            Daily Focus Reminder
          </h3>
          <p style={{ 
            fontSize: "18px", 
            textAlign: "center",
            color: "#555"
          }}>
            Remember: Every moment of focused effort brings you closer to your goals. 
            The distractions will always be there, but your determination to stay focused 
            is what will set you apart and lead you to success.
          </p>
        </div>

        <div style={{ 
          marginTop: "40px", 
          textAlign: "center"
        }}>
          <Link href="/" style={{ 
            textDecoration: "none", 
            color: "#333", 
            fontSize: "16px",
            padding: "10px 20px",
            border: "1px solid #333",
            borderRadius: "5px",
            transition: "all 0.3s ease"
          }}>
            ← Back to Focus
          </Link>
        </div>
      </div>
    </div>
  );
} 