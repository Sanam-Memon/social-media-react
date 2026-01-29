import React from "react";
import ReactDOM from "react-dom/client";
import AppQ from "./AppQ"; // <-- switch to your quiz
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppQ />
  </React.StrictMode>
);
