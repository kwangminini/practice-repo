import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
const container = document.getElementById("root");
if (!container) {
  throw new Error("error");
}
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
