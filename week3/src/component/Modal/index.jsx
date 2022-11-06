import { useRef } from "react";
import { St } from "./style";

export default function Modal(props) {
  const { isOpen, setIsOpen } = props;
  const modalContents = useRef(null);
  const closeModal = (e) => {
    if (e.target !== modalContents.current) setIsOpen(false);
  };

  return (
    <St.ModalContainer
      onClick={(e) => {
        closeModal(e);
      }}>
      <St.ModalBox ref={modalContents}></St.ModalBox>
    </St.ModalContainer>
  );
}
