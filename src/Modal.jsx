import React from 'react';
import ReactModal from 'react-modal';
import { RxCross2 } from "react-icons/rx";
const Modal = ({ isOpen, closeModal, children }) => {
  return (
    
    <ReactModal
       isOpen={isOpen}
       onRequestClose={closeModal}
       contentLabel="Modal"

       style={{
         overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
           border:"2px solid black",
           boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
           borderRadius: '10px',
         },
         content: {
          
           top: '30%',
           left: '50%',
           transform: 'translate(-50%, -50%)',
           width: '500px',
           borderRadius: '10px',
          // Adjust the width as needed
         },
       }}
    > 
      <p className='rounded-lg text-red-800  w-5 h-5 ml-[410px]' onClick={closeModal}><RxCross2/></p>
        {children}
      
 
    </ReactModal>

  );
};

export default Modal;