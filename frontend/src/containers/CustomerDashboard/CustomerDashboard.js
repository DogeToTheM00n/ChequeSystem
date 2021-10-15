import classes from './CustomerDashboard.module.css'
import { useState } from 'react'
import UploadChequeModal from '../../components/UploadChequeModal/UploadChequeModal'
import ChequeList from '../../components/ChequeList/ChequeList'
const CustomerDashboard = () => {
    const [showDepositModal, setShowDepositModal] = useState(false);
    const handleClose = () => setShowDepositModal(false);
    const handleShow = () => setShowDepositModal(true);
 
    return (
        <div>
            <UploadChequeModal showDepositModal={showDepositModal} handleClose={handleClose} />
            <div className={classes.Parent}>
                <ChequeList/>
                <div className={classes.Options}>
                    <div className={classes.ButtonDeposit} onClick={handleShow}><i className="fas fa-upload"></i>&nbsp;Deposit</div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDashboard