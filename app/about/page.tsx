import React from "react";
import ClientNavigation from "../../components/ClientNavigation";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Focus - The Importance of Staying Focused in the Digital Age | Max Erfodimo',
  description: 'Learn why focus is crucial in today\'s digital world. Discover how social media affects concentration and get practical tips for maintaining discipline and staying focused on your goals.',
  keywords: 'focus, discipline, concentration, productivity, social media distraction, digital focus, mental discipline, goal achievement, mindfulness, distraction management',
  openGraph: {
    title: 'About Focus - The Importance of Staying Focused in the Digital Age',
    description: 'Learn why focus is crucial in today\'s digital world. Discover how social media affects concentration and get practical tips for maintaining discipline.',
    type: 'article',
    url: 'https://maxerfodimo.com/about',
    images: [
      {
        url: 'https://maxerfodimo.com/images/maxerfodimo.jpg',
        width: 1200,
        height: 630,
        alt: 'About Focus - Importance of Concentration and Discipline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Focus - The Importance of Staying Focused in the Digital Age',
    description: 'Learn why focus is crucial in today\'s digital world. Discover how social media affects concentration and get practical tips for maintaining discipline.',
    images: ['https://maxerfodimo.com/images/maxerfodimo.jpg'],
  },
  alternates: {
    canonical: 'https://maxerfodimo.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <ClientNavigation />
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

        <p style={{ 
          marginTop: "30px", 
          fontStyle: "italic", 
          textAlign: "center",
          fontSize: "20px",
          color: "#666"
        }}>
          "Stay focused... the result will come"
        </p>
        
        <p style={{ 
          textAlign: "center", 
          marginTop: "10px",
          fontSize: "16px",
          color: "#888"
        }}>
          — Max Erfodimo
        </p>
      </div>
      </div>
    </>
  );
} 