import React from "react";
import classes from "./ChequeVerify.module.css";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Left from "./Left/Left";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const ChequeVerify = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  if (!auth) {
    history.push("/admin");
  }else{
    if(user.name!==null){
      history.push("/");
    }
  }
  return (
    auth && user.name===null && (
      <div className={classes.ChequeVerify}>
        <p className={classes.P}>MICR Code</p>
        <div className={classes.Parent}>
          <div className={classes.Left}>
            <Left />
          </div>
          <div className={classes.Right}>
            <ImageCarousel />
          </div>
        </div>
      </div>
    )
  );
};

export default ChequeVerify;
