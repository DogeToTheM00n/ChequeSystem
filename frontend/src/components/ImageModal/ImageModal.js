import { Modal } from "react-bootstrap"
import classes from './ImageModal.module.css'
import ImageCarousel from "../ImageCarousel/ImageCarousel"
const ImageModal = (props) => {
    return (
        <>
            <Modal
                show={props.showImageModal}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="cheque-image"
            >
                <Modal.Header className={classes.ModalHeader}>
                    <Modal.Title>Cheque Images</Modal.Title>
                    <i className="fa fa-times" aria-hidden="true" onClick={props.handleClose}></i>
                </Modal.Header>
                <Modal.Body>
                <ImageCarousel/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ImageModal