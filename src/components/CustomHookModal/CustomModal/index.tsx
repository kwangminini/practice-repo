import React, { useState } from "react";

import styled from "@emotion/styled";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";

//Custom Hook을 활용한 Modal 관리
function CustomModal() {
  const { isShowing: openModal1, toggleShowing: toggleModal1 } = useModal();
  const { isShowing: openModal2, toggleShowing: toggleModal2 } = useModal();
  const { isShowing: openModal3, toggleShowing: toggleModal3 } = useModal();

  return (
    <>
      <h2>Step 3</h2>
      <ButtonWrapper>
        <p>1번 모달</p>
        <button onClick={toggleModal1}>open modal</button>
      </ButtonWrapper>
      <ButtonWrapper>
        <p>2번 모달</p>
        <button onClick={toggleModal2}>open modal</button>
      </ButtonWrapper>
      <ButtonWrapper>
        <p>3번 모달</p>
        <button onClick={toggleModal3}>open modal</button>
      </ButtonWrapper>
      {openModal1 && <Modal close={toggleModal1} />}
      {openModal2 && <Modal close={toggleModal2} />}
      {openModal3 && <Modal close={toggleModal3} />}
    </>
  );
}

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  p {
    font-size: 14px;
  }
`;
export default CustomModal;
