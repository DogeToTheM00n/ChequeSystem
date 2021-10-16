import {useState} from 'react'
import classes from './UploadChequeModal.module.css'
import {Modal, Form, Button} from 'react-bootstrap'

const UploadChequeModal = (props) => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            console.log("yes");
        }
        setValidated(true);
    };
    return (
        <Modal
            show={props.showDepositModal}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
            style={{ border: 'none' }}
        >
            <Modal.Header className={classes.ModalHeader} style={{ borderColor: "#871f42" }}>
                <Modal.Title>Deposit Cheque</Modal.Title>
                <i className="fa fa-times" aria-hidden="true" onClick={props.handleClose}></i>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Cheque Number</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Cheque Number" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Front Image</Form.Label>
                        <Form.Control required type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Back Image</Form.Label>
                        <Form.Control required type="file" />
                    </Form.Group>
                    <Button type="submit" className={classes.BootstrapButton}>Deposit</Button>
                    {/* <input type="submit" className={classes.Button}>Deposit</input> */}
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UploadChequeModal
