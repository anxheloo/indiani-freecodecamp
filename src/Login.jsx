import React, { Component } from "react";
import NavBar from "./NavBar";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div className="container col-lg-9">
        <h4 className="m-3 p-2 border-bottom">Login</h4>

        {/* Email starts: */}
        <div className="form-group form-row p-3">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>
        </div>
        {/* Email ends: */}

        {/* Password starts: */}
        <div className="form-group form-row p-3">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
        </div>
        {/* Password ends: */}

        {this.state.message}

        <div className="text-right m-1">
          <button className="btn btn-primary" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }

  onLoginClick = async () => {
    console.log(this.state);

    let response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );
    let body = await response.json();
    console.log(body);

    if (body.length > 0) {
      //success
      this.setState({
        message: <span className="text-success">Successfully Logged-In!</span>,
      });
    } else {
      //error
      this.setState({
        message: (
          <span className="text-success">Invalid Login, please try again!</span>
        ),
      });
    }
  };
}
