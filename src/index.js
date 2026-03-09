import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap";

// Ramadan Confetti
import { RamadanOverlay } from "ramadan-overlay/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RamadanOverlay
      variant="sparkles"
      position="both"
      opacity={0.5}
      confetti="off"
      locale="en"
      colors={["#c9a84c", "#e8c96b", "#8b4513", "#2d5a27", "#1a3a1a"]}
      glowColor="#c9a84c"
      ceilingColor="#c9a84c"
      ropeColor="#c9a84c"
      region="saudi"
    />
    <App />
  </React.StrictMode>,
);
