import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./main.css";
import "mobx-react-lite/batchingForReactDom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
