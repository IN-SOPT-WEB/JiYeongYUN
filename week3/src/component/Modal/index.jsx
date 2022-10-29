import { useState } from "react";
import { St } from "./style";

export default function Modal(props) {
  const { isOpen } = props;
  return (
    <St.ModalContainer>
      <St.ModalBox></St.ModalBox>
    </St.ModalContainer>
  );
}
