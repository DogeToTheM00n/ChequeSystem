import {useState} from 'react'
import classes from './UploadChequeModal.module.css'
import {Modal, Form, Button} from 'react-bootstrap'

const UploadChequeModal = (props) => {
    const [validated, setValidated] = useState(false);
    const [chequeNumber, setChequeNumber] = useState("")
    const [frontImage, setFrontImage] = useState()
    const [backImage, setBackImage] = useState()
    const onFrontImageChange = (event) => {
        setFrontImage(event.target.files[0]);
    }
    const onBackImageChange = (event) => {
        setBackImage(event.target.files[0]);
    }
    const onChangeChequeNumber = (event) => {
        setChequeNumber(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            console.log("yes");
            console.log(chequeNumber)
            console.log(frontImage)
            console.log(backImage)
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
                        <Form.Control required type="text" placeholder="Enter Cheque Number" value={chequeNumber} onChange={onChangeChequeNumber}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Front Image</Form.Label>
                        <Form.Control required type="file" onChange={onFrontImageChange}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Back Image</Form.Label>
                        <Form.Control required type="file" onChange={onBackImageChange}/>
                    </Form.Group>
                    <Button type="submit" className={classes.BootstrapButton}>Deposit</Button>
                    {/* <input type="submit" className={classes.Button}>Deposit</input> */}
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UploadChequeModal
