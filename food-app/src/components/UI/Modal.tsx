import { Fragment } from 'react';
import classes from './Modal.module.scss';
import ReactDOM from 'react-dom';
interface ModalProps {
    children: React.ReactNode,
    onClose?: () => {}
}

const Backdrop = (props: any) => {
    return <div className={classes.backdrop}  onClick={props.onClose}></div>
}

const ModalOverlay = (props: ModalProps) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalElement: any = document.getElementById('overlays');

const Modal = (props: ModalProps) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        {/* {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalElement)} */}
    </Fragment>
}

export default Modal;