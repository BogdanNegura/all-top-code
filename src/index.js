import React from "react";
import { render } from "react-dom";
import { App } from "./component/app/App";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);