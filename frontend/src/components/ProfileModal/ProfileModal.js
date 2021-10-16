import { Modal } from "react-bootstrap"
import { useState } from "react"
import classes from './ProfileModal.module.css'

const ProfileModal = (props) => {
    const [state, setState] = useState({accountNumber: '347534', ifscCode: 'SBIN0009', mobileNumber: '9887318328'})
    return (
        <>
            <Modal
                show={props.showProfileModal}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className={classes.ModalHeader}>
                    <Modal.Title>Profile</Modal.Title>
                    <i className="fa fa-times" aria-hidden="true" onClick={props.handleClose}></i>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <table>
                            <tr>
                                <td>Username</td>
                                <td>Sarthak12</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Sarthak</td>
                            </tr>
                            <tr>
                                <td>Account Number</td>
                                <td>{state.accountNumber}</td>
                            </tr>
                            <tr>
                                <td>IFSC Code</td>
                                <td>{state.ifscCode}</td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td>{state.mobileNumber}</td>
                            </tr>
                        </table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProfileModal