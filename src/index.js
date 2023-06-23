import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./App";

// let element = <button className="btn btn-danger">Hello World</button>;
ReactDOM.render(<NavBar></NavBar>, document.getElementById("root"));
