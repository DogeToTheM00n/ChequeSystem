import classes from "./CustomerDashboard.module.css";
import { useState } from "react";
import UploadChequeModal from "../../components/UploadChequeModal/UploadChequeModal";
import ChequeList from "../../components/ChequeList/ChequeList";
const CustomerDashboard = () => {
  const [showDepositModal, setShowDepositModal] = useState(false);
  const handleClose = () => setShowDepositModal(false);
  const handleShow = () => setShowDepositModal(true);
  const [reload, setReload] = useState(false);
  return (
    <div>
      <UploadChequeModal
        showDepositModal={showDepositModal}
        handleClose={handleClose}
        setReload={setReload}
        reload={reload}
      />
      <div className={classes.Parent}>
        <ChequeList reload={reload} />
        <div className={classes.Options}>
          <div className={classes.ButtonDeposit} onClick={handleShow}>
            <i className="fas fa-upload"></i>&nbsp;Deposit
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
