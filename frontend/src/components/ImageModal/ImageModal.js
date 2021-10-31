import { Modal } from "react-bootstrap"
import classes from './ImageModal.module.css'
import ImageCarousel from "../ImageCarousel/ImageCarousel"
import { useEffect, useState } from "react"
import axios from "../../chequeAxios"
import decryptImageWithAesKey from "../../utilities/decryptFile"
import { useSelector } from "react-redux"
import ab2str from "../../utilities/arrayBufferToString"
import str2ab from "../../utilities/stringToArrayBuffer"
const ImageModal = (props) => {
    const encryptedAesKey = useSelector((state) => state.encryptedAesKey)
    const [frontImage, setFrontImage] = useState("")
    const [backImage, setBackImage] = useState("")
    useEffect(() => {
        const req = async () => {
            const res = await axios.get('/api/transactionDetail',
                {
                    params: {
                        _id: props._id
                    }
                }
            )
            const res1 = await decryptImageWithAesKey(str2ab(res.data.chequePhotographs[0]).buffer, encryptedAesKey)
            setFrontImage(res1)
            const res2 = await decryptImageWithAesKey(str2ab(res.data.chequePhotographs[1]).buffer, encryptedAesKey)
            setBackImage(res2)
        }
        if (props.showImageModal)
            req()

    }, [props.showImageModal])
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
                    <ImageCarousel frontImage={frontImage} backImage={backImage} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ImageModal