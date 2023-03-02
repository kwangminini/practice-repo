import React, { useState } from "react";

import styled from "@emotion/styled";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
import CreatePortalModal from "@/components/Modal/CreatePortalModal";

//createPortalModal Rendering Test
function CreatePortalModalTest() {
  const { isShowing: openModal1, toggleShowing: toggleModal1 } = useModal();
  const { isShowing: openModal2, toggleShowing: toggleModal2 } = useModal();

  return (
    <>
      <h2>Step 5</h2>
      <ButtonWrapper>
        <p>1번 모달</p>
        <button onClick={toggleModal1}>open modal</button>
      </ButtonWrapper>
      <ButtonWrapper>
        <p>2번 모달</p>
        <button onClick={toggleModal2}>open modal</button>
      </ButtonWrapper>
      <Modal isShowing={openModal1} close={toggleModal1} />
      <CreatePortalModal isShowing={openModal2} close={toggleModal2} />
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
export default CreatePortalModalTest;
