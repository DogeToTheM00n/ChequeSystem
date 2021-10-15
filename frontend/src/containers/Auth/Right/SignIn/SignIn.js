import React, { Component } from "react";
import classes from "./SignIn.module.css";
import Form from "react-bootstrap/Form";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
  };
  change = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submit = (event) => {
    if (this.state.username !== "" && this.state.password !== "") {
      event.preventDefault();
    }
  };
  render() {
    return (
      <>
        <h1>Sign In to Apna Cheques</h1>
        <Form className={classes.SignIn}>
          <p style={{ color: "#dc3546" }}>*All fields are required</p>
          <Form.Group className="mb-4" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter username"
              className={classes.Input}
              autoFocus
              name="username"
              value={this.state.username}
              onChange={this.change}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              className={classes.Input}
              name="password"
              value={this.state.password}
              onChange={this.change}
              minLength="7"
            />
          </Form.Group>
          <p className={classes.P} onClick={this.props.changeAuthMethod}>
            New User?
          </p>
          <button
            className={classes.Button}
            type="submit"
            onClick={this.submit}
          >
            Sign In <i className="fas fa-chevron-right"></i>
          </button>
        </Form>
      </>
    );
  }
}

export default SignIn;
