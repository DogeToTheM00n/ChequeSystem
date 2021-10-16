import React, { Component } from "react";
import classes from "./Div2.module.css";
import Form from "react-bootstrap/Form";

class Div2 extends Component {
  render() {
    return (
      <div>
          <p className={classes.P2}><i class="fas fa-chevron-left"></i> Back</p>
          <Form.Group
            className="mb-4"
            controlId="account"
            style={{ width: "80%", margin: "auto" }}
          >
            <Form.Label>Payee Account Number</Form.Label>
            <div className={classes.VerifyAccount}>
            <Form.Control
              type="text"
              required
              placeholder="Payee Account Number"
              className={classes.Input}
              autoFocus
              name="account"
            />
            <button className={classes.VerifyBtn}>Verify</button>
            </div>
          </Form.Group>
        <Form.Group
          className="mb-4"
          controlId="amount"
          style={{ width: "80%", margin: "auto" }}
        >
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter amount"
            className={classes.Input}
            name="amount"
          />
        </Form.Group>
        <div className={classes.BtnGroup}>
          <button className={classes.DeclineBtn}><i className="fas fa-times"></i> Decline</button>
          <button className={classes.NextBtn}><i className="fas fa-check"></i> Next</button>
        </div>
      </div>
    );
  }
}

export default Div2;
