import React from "react";
import classes from "./Auth.module.css";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Auth = (props) => {
    return (
      <div className={classes.Parent}>
        <Left />
        <Right />
      </div>
    );
}

export default Auth;
