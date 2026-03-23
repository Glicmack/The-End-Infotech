"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/site/index.html";
  }, []);

  return (
    <div
      style={{
        background: "#020202",
        color: "#fff",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>Loading...</p>
    </div>
  );
}
