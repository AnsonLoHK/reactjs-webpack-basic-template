require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const appElement = ReactDOM.createRoot(document.getElementById("app"));
appElement.render(<App />);
