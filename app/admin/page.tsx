'use client';

import React, { useState, useEffect } from 'react';
import ClientNavigation from "../../components/ClientNavigation";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [syncStatus, setSyncStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Check if admin access is enabled (development mode only)
  useEffect(() => {
    // Only allow access in development mode
    if (process.env.NODE_ENV === 'development') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSync = async (force = false) => {
    setLoading(true);
    setSyncStatus('Syncing...');
    
    try {
      const response = await fetch('/api/quotes/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ force })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSyncStatus(`Sync completed! Synced: ${data.results.synced}, Skipped: ${data.results.skipped}, Errors: ${data.results.errors}`);
      } else {
        setSyncStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setSyncStatus(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  // Show access denied if not in development mode
  if (!isAuthenticated) {
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
              maxWidth: "500px",
              textAlign: "center"
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                margin: "0 0 30px 0",
                fontWeight: "300",
                color: "#333"
              }}
            >
              Access Denied
            </h1>
            
            <div
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                lineHeight: "1.6",
                marginBottom: "30px",
                color: "#666"
              }}
            >
              Admin access is only available in development mode.
            </div>

            <div
              style={{
                fontSize: "14px",
                color: "#888",
                textAlign: "left",
                backgroundColor: "#f0f0f0",
                padding: "15px",
                borderRadius: "8px"
              }}
            >
              <strong>Environment:</strong> {process.env.NODE_ENV}<br/>
              <strong>Status:</strong> Production mode detected<br/>
              <strong>Access:</strong> Restricted to development only
            </div>
          </div>
        </div>
      </>
    );
  }

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
              margin: "0 0 30px 0",
              fontWeight: "300",
              color: "#333"
            }}
          >
            Admin Panel
          </h1>
          
          <div
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
              lineHeight: "1.6",
              marginBottom: "30px",
              color: "#666"
            }}
          >
            Development Mode - Quote Management
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "30px",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <button
              onClick={() => handleSync(false)}
              disabled={loading}
              style={{
                padding: "12px 24px",
                backgroundColor: "#333",
                color: "white",
                border: "none",
                borderRadius: "25px",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "16px",
                fontWeight: "500",
                opacity: loading ? 0.6 : 1
              }}
            >
              {loading ? 'Syncing...' : 'Sync Quotes'}
            </button>
            
            <button
              onClick={() => handleSync(true)}
              disabled={loading}
              style={{
                padding: "12px 24px",
                backgroundColor: "#d32f2f",
                color: "white",
                border: "none",
                borderRadius: "25px",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "16px",
                fontWeight: "500",
                opacity: loading ? 0.6 : 1
              }}
            >
              {loading ? 'Force Syncing...' : 'Force Sync'}
            </button>
          </div>

          {syncStatus && (
            <div
              style={{
                backgroundColor: "#e8f5e8",
                padding: "15px",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#2d5a2d",
                textAlign: "left",
                whiteSpace: "pre-wrap"
              }}
            >
              {syncStatus}
            </div>
          )}

          <div
            style={{
              marginTop: "30px",
              fontSize: "12px",
              color: "#888",
              textAlign: "left"
            }}
          >
            <strong>Development Mode Features:</strong><br/>
            • <strong>Sync Quotes:</strong> Only updates if JSON has more quotes than DB<br/>
            • <strong>Force Sync:</strong> Always updates from JSON files<br/>
            • JSON files are in: <code>data/quotes/</code> folder<br/>
            • Themes: focus, motivation, dreams, plans, discipline<br/>
            • <strong>Environment:</strong> {process.env.NODE_ENV}
          </div>
        </div>
      </div>
    </>
  );
}