import { useState } from "react";
import classes from "./UploadChequeModal.module.css";
import { Modal, Form, Button } from "react-bootstrap";
import encryptImageWithAesKey from "../../utilities/encryptFile";
import { useSelector } from "react-redux";
import decryptImageWithAesKey from "../../utilities/decryptFile";
import axios from "../../chequeAxios";
import encrypt from "../../utilities/encrypt";
import ab2str from "../../utilities/arrayBufferToString";

const UploadChequeModal = (props) => {
  const [validated, setValidated] = useState(false);
  const [chequeNumber, setChequeNumber] = useState("");
  const [frontImage, setFrontImage] = useState();
  const [backImage, setBackImage] = useState();
  const aesKey = useSelector((state) => state.encryptedAesKey);
  const user = useSelector((state) => state.user);
  const serverPublicKey = useSelector((state) => state.key);
  const onFrontImageChange = (event) => {
    setFrontImage(event.target.files[0]);
  };
  const onBackImageChange = (event) => {
    setBackImage(event.target.files[0]);
  };
  const onChangeChequeNumber = (event) => {
    setChequeNumber(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("yes");
      console.log(chequeNumber);
      console.log(frontImage);
      console.log(backImage);
      function readFileDataAsArrayBuffer(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            resolve(event.target.result);
          };
          reader.onerror = (err) => {
            reject(err);
          };
          reader.readAsArrayBuffer(file);
        });
      }
      const frontImageBuffer = await readFileDataAsArrayBuffer(frontImage);
      const backImageBuffer = await readFileDataAsArrayBuffer(backImage);
      const encryptedBufferImg1 = await encryptImageWithAesKey(
        frontImageBuffer,
        aesKey
      );
      const encryptedBufferImg2 = await encryptImageWithAesKey(
        backImageBuffer,
        aesKey
      );
      // const decryptedImg1 = await decryptImageWithAesKey(
      //   encryptedBufferImg1,
      //   aesKey
      // );
      // const decryptedImg2 = await decryptImageWithAesKey(
      //   encryptedBufferImg2,
      //   aesKey
      // );
      // document.querySelector(
      //   "body"
      // ).innerHTML = `<img src="data:image/png;base64,${decryptedImg2}"/>`;
      const userData = await encrypt({ username: user.username, cheque_code: chequeNumber }, serverPublicKey);
      const data = {
        images: [ab2str(encryptedBufferImg1), ab2str(encryptedBufferImg2)],
        obj: userData,
      };
      console.log(data.images);
      const result = await axios.post("/api/depositCheque", data);
      console.log(result);
    }
    setValidated(true);
  };
  return (
    <Modal
      show={props.showDepositModal}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      style={{ border: "none" }}
    >
      <Modal.Header
        className={classes.ModalHeader}
        style={{ borderColor: "#871f42" }}
      >
        <Modal.Title>Deposit Cheque</Modal.Title>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={props.handleClose}
        ></i>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Cheque Number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Cheque Number"
              value={chequeNumber}
              onChange={onChangeChequeNumber}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Front Image</Form.Label>
            <Form.Control required type="file" onChange={onFrontImageChange} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Back Image</Form.Label>
            <Form.Control required type="file" onChange={onBackImageChange} />
          </Form.Group>
          <Button type="submit" className={classes.BootstrapButton}>
            Deposit
          </Button>
          {/* <input type="submit" className={classes.Button}>Deposit</input> */}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UploadChequeModal;
