import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import classes from "./ProfileModal.module.css";
import { useSelector } from "react-redux";
import axios from "../../chequeAxios";

const ProfileModal = (props) => {
  const [state, setState] = useState({
    accountNumber: "",
    ifscCode: "",
    mobileNumber: "",
  });
  const name = useSelector((state) => state.user.name);
  const username = useSelector((state) => state.user.username);
  useEffect(() => {
    if (props.showProfileModal) {
      const func = async () => {
        const res = await axios.get("/api/profile", {
          params: { username: username },
        });
        console.log(res.data);
        setState({ ...res.data });
      };
      func();
    }
  }, [props.showProfileModal]);
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
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={props.handleClose}
          ></i>
        </Modal.Header>
        <Modal.Body>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>{username}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{name}</td>
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
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileModal;
