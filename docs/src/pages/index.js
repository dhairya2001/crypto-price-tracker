import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout title="Welcome">
      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>🚀 Welcome to Crypto Price Tracker Docs</h1>
        <p>Your guide to integrating and using the Crypto Price Tracker.</p>

        <a href="/docs" style={{
          display: "inline-block",
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          marginTop: "20px"
        }}>
          📖 Go to Documentation
        </a>
      </main>
    </Layout>
  );
}
