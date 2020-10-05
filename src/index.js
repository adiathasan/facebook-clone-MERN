import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import ContextApiProvider from "./data/ContextApiProvider";

ReactDom.render(
  <ContextApiProvider>
    <App />
  </ContextApiProvider>,
  document.getElementById("root")
);
