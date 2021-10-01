import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import { FormSales } from './FormSales';
// import Modal from "react-bootstrap/Modal";

export const ModalSales = (props) => {
    // FUNCIONES MODAL CREAR UNA VENTA
    // console.log("props",props);

    // const showModalVar = false;
   const [isOpen,setIsOpen] = useState(false);

    const [title, setTitle] = React.useState("Transitioning...");
    // const isOpen = props.showModal;
    // setIsOpen(props.showModal)
    // console.log('is open', isOpen)


    const showModal = (props) => {
      setIsOpen(true)
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    const modalLoaded = () => {
        setTitle("AGREGAR VENTAS");
      };

    return(
        <>
            {/* <!-- Modal --> */}
            <button type="button" className="btn btn-primary btn-block" onClick={showModal} >
                <i className="fa fa-user-plus"></i>ADD SALE
            </button>
            {/* <button onClick={showModal}>Display Modal</button> */}
            <Modal show={isOpen} onHide={hideModal} size='lg' onEntered={modalLoaded}>
                <Modal.Header>
                    <Modal.Title as='h3'>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormSales></FormSales>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideModal}>Cancel</Button>
                    {/* <Button variant="primary">Save</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}
 
//  export default class ModalSales extends Component {
//     constructor() {
//         super();
//         this.state = {}
//     }
//      render() {
//          return (
//              <div>
                 
//              </div>
//          )
//      }
//  }
 

