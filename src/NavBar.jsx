import { Component } from "react";
import React, { Fragment } from "react";
import { Router, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-style">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
              eCommerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link text-white">
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/customers" className="nav-link text-white">
                    Customers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/cart" className="nav-link text-white">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
