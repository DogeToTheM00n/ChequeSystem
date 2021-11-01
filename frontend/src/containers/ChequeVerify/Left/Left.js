import React, { Component } from "react";
import classes from "./Left.module.css";
import Div1 from "./Div1/Div1";
import Div2 from "./Div2/Div2";
import Div3 from "./Div3/Div3";
import { useState, useEffect } from "react";

const Left = (props) => {
  const [state, setState] = useState({
    accountVerify: 1,
    amount: "",
    accountNumber: "",
    err: "",
  })
  const [div, setDiv] = useState(1);
  useEffect(() => {
    if (state.err==="" && state.accountVerify === 1) {
      setDiv(3)
    }
  }, [state.err]);
  return (
    <div className={classes.Left}>
      {div === 1 && <Div1 setDiv={setDiv} />}
      {div === 2 && <Div2 setDiv={setDiv} state={state} setState={setState} />}
      {div === 3 && <Div3 setDiv={setDiv} />}
    </div>
  );
}

export default Left;
