import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";
import classes from "./Div1.module.css";

class Div1 extends Component {
  render() {
    return (
      <div>
        <InputGroup className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Payer Name</p>
            <p className={classes.PDetail}>Ravi Chopra</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Payee Name</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Cheque Code</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Account Number</p>
            <p className={classes.PDetail}>12345678901234</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Date</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Amount</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <div className={classes.BtnGroup}>
          <button className={classes.DeclineBtn}>Decline</button>
          <button className={classes.NextBtn}>Next</button>
        </div>
      </div>
    );
  }
}

export default Div1;
