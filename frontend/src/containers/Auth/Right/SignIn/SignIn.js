import React, { Component } from "react";
import encryptWithServerPublicKey from "../../../../utilities/encrypt";
import classes from "./SignIn.module.css";
import { connect } from "react-redux";
import axios from "../../../../chequeAxios";
import Form from "react-bootstrap/Form";
import decrypt from "../../../../utilities/decrypt";
import { withRouter } from "react-router";

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
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      encryptWithServerPublicKey(data, this.props.server_public_key).then(
        (encryptedData) => {
          const req = async () => {
            const res = await axios.post("/api/login", {
              obj: encryptedData,
              public_key: this.props.clientPublicKey,
            });
            if (res.data) {
              // decrypt(res.data.encrypted_aes_key).then((decryptedData) => {
              //   console.log(JSON.parse(decryptedData));
              // });
              const user = {
                mobileNumber: res.data.mobileNumber,
                name: res.data.name,
                username: res.data.username,
              }
              this.props.setAuthTrue(user)
              this.props.setAesKey(res.data.encrypted_aes_key)
              this.props.history.push('/')
            }
          };
          req();
        }
      );
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

const mapStateToProps = (state) => {
  return {
    server_public_key: state.key,
    clientPublicKey: state.clientPublicKey,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthTrue: (user) => dispatch({ type: 'True_Auth', user: user }),
    setAesKey: (key) => dispatch({ type: 'SET_AES_KEY', key: key })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
