'use client';

import React from "react";
import ClientNavigation from "../../components/ClientNavigation";

export default function ProgramPage() {
    return (
        <>
            <ClientNavigation />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "Georgia",
                    padding: "40px",
                    maxWidth: "1000px",
                    margin: "0 auto",
                    lineHeight: "1.6",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        fontSize: "2.5rem",
                        color: "#333",
                    }}
                >
                    Focus Programs
                </h1>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
                    }}
                >
                    {/* Focus Basic - 12 */}
                    <div
                        style={{
                            border: "2px solid #333",
                            borderRadius: "8px",
                            padding: "30px",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <h2
                            style={{
                                marginTop: "0",
                                marginBottom: "20px",
                                fontSize: "2rem",
                                color: "#333",
                                borderBottom: "2px solid #333",
                                paddingBottom: "10px",
                            }}
                        >
                            Focus Basic - 12 ( days )
                        </h2>
                        <div style={{ fontSize: "18px", color: "#444" }}>
                            <p style={{ marginBottom: "15px" }}>
                                This program guides you day by day toward your one true goal.
                            </p>
                            <p style={{ marginBottom: "15px" }}>
                                Eliminate distractions and create a focused environment
                            </p>
                        </div>
                    </div>

                    {/* Focus Advanced - 123 */}
                    <div
                        style={{
                            border: "2px solid #333",
                            borderRadius: "8px",
                            padding: "30px",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <h2
                            style={{
                                marginTop: "0",
                                marginBottom: "20px",
                                fontSize: "2rem",
                                color: "#333",
                                borderBottom: "2px solid #333",
                                paddingBottom: "10px",
                            }}
                        >
                            Focus Advanced - 123 ( days )
                        </h2>
                        <div style={{ fontSize: "18px", color: "#444" }}>
                            <p style={{ marginBottom: "15px" }}>
                                <strong>Step 1:</strong> Set your primary goal for the day
                            </p>
                            <p style={{ marginBottom: "15px" }}>
                                <strong>Step 2:</strong> Eliminate distractions and create a focused environment
                            </p>
                            <p style={{ marginBottom: "15px" }}>
                                <strong>Step 3:</strong> Break down your goal into actionable tasks and execute with discipline
                            </p>
                        </div>
                    </div>

                    {/* Focus Pro - 1234 */}
                    <div
                        style={{
                            border: "2px solid #333",
                            borderRadius: "8px",
                            padding: "30px",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <h2
                            style={{
                                marginTop: "0",
                                marginBottom: "20px",
                                fontSize: "2rem",
                                color: "#333",
                                borderBottom: "2px solid #333",
                                paddingBottom: "10px",
                            }}
                        >
                            Focus Pro - 1234 ( days )
                        </h2>
                        <div style={{ fontSize: "18px", color: "#444" }}>
                            <p style={{ marginBottom: "15px" }}>
                                <strong>Step 1:</strong> Set your primary goal for the day
                            </p>
                            <p style={{ marginBottom: "15px" }}>
                                <strong>Step 2:</strong> Eliminate distractions and create a focused environment
                            </p>
                            <p style={{ marginBottom: "15px" }}>
                                <strong>Step 3:</strong> Break down your goal into actionable tasks and execute with discipline
                            </p>
                            <p style={{ marginBottom: "15px" }}>
                                <strong>Step 4:</strong> Review progress, maintain consistency, and build momentum for long-term success
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

