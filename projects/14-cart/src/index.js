import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import "../node_modules/font-awesome/css/font-awesome.css";
import { CartProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
