// Modal.js
import React from "react";
import ImportImg from "../../public/pics/modal_200.png";
import Image from "next/image";

const Modal = ({ modalVisible, modalContent, setModalVisible }: any) => {
  if (!modalVisible) {
    return null;
  }

  return (
    <div className="z-[155]">
      <div className="md:flex">
        <Image
          src={ImportImg}
          alt={modalContent}
          width={1111}
          height={1111}
          className="h-[12.96vh] object-contain"
        />
        {/* <button onClick={() => setModalVisible(false)} className=''>{`[x]`}</button> */}
      </div>
    </div>
  );
};

export default Modal;
