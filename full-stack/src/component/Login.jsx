import React, { Component } from "react";
import "../styles/register_style.css";
const axios = require("axios");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      success: false,
    };
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }
  setEmail(e) {
    this.setState({ email: e.target.value });
    e.preventDefault();
  }
  setPassword(e) {
    this.setState({ password: e.target.value });
    e.preventDefault();
  }
  loginUser(e) {
    e.preventDefault();
    const userObject = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userObject);
    axios
      .post("http://localhost:5000/login", userObject)
      .then(function (response1) {
        console.log(response1);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ email: "", password: "", success: true });
  }
  render() {
    return (
      <div className="box">
        <h1>Login</h1>
        <form onSubmit={this.loginUser}>
          <input
            placeholder="Email"
            value={this.state.email}
            type="email"
            onChange={this.setEmail}
            className="email"
            required
          />
          <input
            placeholder="Password"
            value={this.state.password}
            type="password"
            onChange={this.setPassword}
            className="password"
            required
          />
          <br />
          <input type="submit" value="Submit" className="submit" />
        </form>
        {this.state.success && (
          <div>
            <img
              className="success"
              src="https://www.citypng.com/public/uploads/preview/-316225907691vr4nvazfz.png"
            ></img>
            <h3>Successfully Registered</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
