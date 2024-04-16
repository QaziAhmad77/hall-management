import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      closeButton={true}
      autoClose={true}
      closeOnClick={false}
      newestOnTop={true}
      limit={1}
      className="toast-container"
    />
  </React.StrictMode>
);
