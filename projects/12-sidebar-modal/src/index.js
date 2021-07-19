import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { SiteProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <SiteProvider>
      <App />
    </SiteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
