import React from "react";
import * as ReactDOMClien from "react-dom/client";
import App from "./App";
import "./css/main.css";

const app = ReactDOMClien.createRoot(document.getElementById("app"));
app.render(<App></App>);

//
//
// ReactDOM.render(
//   React.createElement("input", {
//     placeholder: "help text",
//     onClick: () => console.log("clicked"),
//     onBlur: () => console.log("lost focus"),
//     onMouseEnter: () => console.log("mouse over"),
//   }),
//   document.getElementById("app")
// );
