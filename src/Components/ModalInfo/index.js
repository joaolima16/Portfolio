import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement("#root");
function ModalInfo() {

  const [modal, setModal] = useState(false);

  const OpenModal = ()=>{
    setModal(true)
  }
  const CloseModal = ()=>{
    setModal(false)
  }
    return(

        <>
          <Modal
        isOpen={modal}
        onAfterOpen={OpenModal}
        onRequestClose={CloseModal}
        contentLabel="Example Modal"
      ></Modal>
        </>
    );
}

export default ModalInfo;