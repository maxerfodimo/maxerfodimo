'use client';

import React from "react";
import styles from "./styles/ProgramPage.module.css"
import ClientNavigation from "../../components/ClientNavigation";

export default function ProgramPage() {
    return (
        <>
            <ClientNavigation />
            <div
                className={styles.content}
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
                        className={styles.card}
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

                            <p>
                                <strong>Focus Basic – 12 Days</strong> is a simple focus practice designed to help you clarify your goal and take consistent steps toward it.
                            </p>

                            <p>
                                For <strong>12 days</strong>, you commit to focusing on <strong>one clear goal</strong>.
                            </p>

                            <h3>How it works:</h3>
                            <ul>
                                <li>Choose one goal you want to achieve.</li>
                                <li>
                                    Every day for 12 days, write this goal down — in a notebook, on your phone,
                                    or anywhere convenient.
                                </li>
                                <li>After writing it, take <strong>1 minute</strong> to focus only on this goal.</li>
                            </ul>

                            <p>During that minute, think about:</p>
                            <ul>
                                <li>Why this goal matters to you</li>
                                <li>What small step you can take today to move closer to it</li>
                            </ul>

                            <h3>The key rule:</h3>
                            <ul>
                                <li>Focus on action, not just dreaming.</li>
                                <li>Even a small step counts.</li>
                            </ul>

                            <p>
                                This short daily practice helps train your mind to stay focused, build discipline,
                                and turn intentions into real progress.
                            </p>

                            <hr />

                            <p><strong>Duration:</strong> 12 days</p>
                            <p><strong>Daily time:</strong> 1 minute</p>
                            <p><strong>Level:</strong> Basic</p>
                            <p><strong>Goal:</strong> Clarity, focus, and consistent action</p>

                        </div>
                    </div>

                    {/* Focus Advanced - 123 */}
                    <div
                        className={styles.card}

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
                            Focus Advanced - 31 ( days )
                        </h2>
                        <div style={{ fontSize: "18px", color: "#444" }}>
                            <h2>Focus Advanced – 31 Days</h2>

                            <p>
                                <strong>Focus Advanced – 31 Days</strong> is a deeper focus practice designed to strengthen concentration,
                                clarity, and long-term commitment to your goal.
                            </p>

                            <p>
                                For <strong>31 days</strong>, you commit to working with <strong>one meaningful goal</strong> and
                                visualizing its achievement.
                            </p>

                            <h3>How it works:</h3>
                            <ul>
                                <li>Choose one clear and important goal you want to achieve.</li>
                                <li>
                                    Every day for 31 days, write this goal down — in a notebook, on your phone,
                                    or anywhere convenient.
                                </li>
                                <li>
                                    Spend <strong>2 minutes</strong> writing and thinking about this goal.
                                </li>
                            </ul>

                            <p>During these 2 minutes:</p>
                            <ul>
                                <li>Stay calm and fully focused.</li>
                                <li>Think about <strong>why this goal matters</strong>.</li>
                                <li>Visualize <strong>how you achieve this goal</strong>.</li>
                                <li>Notice what actions or decisions can move you closer to it.</li>
                            </ul>

                            <h3>The key rules:</h3>
                            <ul>
                                <li>Be calm, present, and focused.</li>
                                <li>Focus on progress and execution, not distractions.</li>
                                <li>Consistency is more important than intensity.</li>
                            </ul>

                            <p>
                                This advanced daily practice helps you build mental discipline,
                                deepen focus, and turn long-term goals into real results.
                            </p>

                            <hr />

                            <p><strong>Duration:</strong> 31 days</p>
                            <p><strong>Daily time:</strong> 2 minutes</p>
                            <p><strong>Level:</strong> Advanced</p>
                            <p><strong>Goal:</strong> Deep focus, visualization, and consistent progress</p>

                        </div>
                    </div>

                    {/* Focus Pro - 1234 */}
                    <div
                        className={styles.card}

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
                            Focus Pro - 123 ( days )
                        </h2>
                        <div style={{ fontSize: "18px", color: "#444" }}>
                            <p style={{ marginBottom: "15px" }}>
                                <strong>Comming soon...</strong>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

