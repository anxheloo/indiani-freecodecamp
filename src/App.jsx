import React, { Component } from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" exact Component={Login}></Route>
          <Route path="/dashboard" exact Component={Dashboard}></Route>
          <Route path="/customers" exact Component={CustomersList}></Route>
          <Route path="/cart" exact Component={ShoppingCart}></Route>
          <Route path="*" Component={NoMatchPage}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
