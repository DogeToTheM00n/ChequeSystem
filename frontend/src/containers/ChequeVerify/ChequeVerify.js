import React from "react";
import classes from "./ChequeVerify.module.css";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Left from "./Left/Left";

const ChequeVerify = (props) => {
  return (
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
  );
};

export default ChequeVerify;
