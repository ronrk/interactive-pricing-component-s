import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SliderContextProvider } from "./context/SliderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SliderContextProvider>
    <App />
  </SliderContextProvider>
);
