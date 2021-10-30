import { InputGroup } from "react-bootstrap";
import classes from "./Div1.module.css";
import { useState } from "react";

const Div1 = (props) => {
    const [checkboxCount, setCheckBoxCount] = useState(0);
    const [err, setErr] = useState("")
    const changeHandler = (evt) => {
      if(evt.target.checked){
        setCheckBoxCount(checkboxCount+1)
      }
      else{
        setCheckBoxCount(checkboxCount-1);
      }
      console.log(checkboxCount)
    }

    const nextHandler = () => {
      if(checkboxCount===6){
        props.setDiv(2)
      }
      else{
        setErr("*Please verify all details")
      }
    }
    return (
      <div>
        <InputGroup onChange={changeHandler} className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Payer Name</p>
            <p className={classes.PDetail}>Ravi Chopra</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup onChange={changeHandler} className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Payee Name</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup onChange={changeHandler} className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Cheque Code</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup onChange={changeHandler} className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Account Number</p>
            <p className={classes.PDetail}>12345678901234</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup onChange={changeHandler} className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Date</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <InputGroup onChange={changeHandler} className={classes.Row} size="lg">
          <div>
            <p className={classes.PTitle}>Amount</p>
          </div>
          <InputGroup.Checkbox className={classes.Checkbox} />
        </InputGroup>
        <div className = {classes.Error}>
          {err?err:null}
        </div>
        <div className={classes.BtnGroup}>
          <button className={classes.DeclineBtn}>Decline</button>
          <button className={classes.NextBtn} onClick={nextHandler}>Next</button>
        </div>
      </div>
    );
}

export default Div1;
