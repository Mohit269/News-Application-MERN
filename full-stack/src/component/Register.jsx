import React, { Component } from "react";
import "../styles/register_style.css";
const axios = require("axios");

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      success: false,
      status: false,
    };
    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }
  setName(e) {
    this.setState({ name: e.target.value });
    e.preventDefault();
  }
  setEmail(e) {
    this.setState({ email: e.target.value });
    e.preventDefault();
  }
  setPassword(e) {
    this.setState({ password: e.target.value });
    e.preventDefault();
  }
  registerUser(e) {
    e.preventDefault();
    const userObject = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userObject);
    axios
      .post("http://localhost:5000/register", userObject)
      .then(function (response1) {
        console.log(response1.data.status);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ name: "", email: "", password: "" });
  }
  render() {
    return (
      <div className="box">
        <h1>Register Here</h1>
        <form onSubmit={this.registerUser}>
          <input
            placeholder="Name"
            value={this.state.name}
            type="text"
            onChange={this.setName}
            className="name"
            required
          />
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
        {this.state.status && alert("USER ALREADY EXIST")}
      </div>
    );
  }
}

export default Register;
