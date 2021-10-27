import React, { Component } from "react";
import classes from "./Left.module.css";
import Div1 from "./Div1/Div1";
import Div2 from "./Div2/Div2";
import Div3 from "./Div3/Div3";

class Left extends Component {
  state = {
    div: 3,
  };
  render() {
    return (
      <div className={classes.Left}>
        {this.state.div === 1 && <Div1 />}
        {this.state.div === 2 && <Div2 />}
        {this.state.div === 3 && <Div3 />}
      </div>
    );
  }
}

export default Left;
