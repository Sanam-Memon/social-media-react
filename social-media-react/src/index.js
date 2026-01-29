import React from "react";
import ReactDOM from "react-dom/client";
import AppQ from "./AppQ"; // <-- import your main app
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppQ />  {/* render AppQ component */}
  </React.StrictMode>
);
