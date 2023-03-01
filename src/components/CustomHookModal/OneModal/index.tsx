import React, { useState } from "react";

import styled from "@emotion/styled";
import Modal from "@/components/Modal";

//부모 컴포넌트의 state를 여러개 설정하여 모달을 띄우는 방식
function OneModal() {
  const [openModal1, setOpenModal1] = useState(false); //1번 모달 오픈 state
  const [openModal2, setOpenModal2] = useState(false); //2번 모달 오픈 state
  const [openModal3, setOpenModal3] = useState(false); //3번 모달 오픈 state

  //modal toggle function
  const toggleModal = (name: string) => {
    if (name === "modal1") setOpenModal1(!openModal1);
    else if (name === "modal2") setOpenModal2(!openModal2);
    else if (name === "modal3") setOpenModal3(!openModal3);
  };
  return (
    <>
      <h2>Step 1</h2>
      <ButtonWrapper>
        <p>1번 모달</p>
        <button onClick={() => toggleModal("modal1")}>open modal</button>
      </ButtonWrapper>
      <ButtonWrapper>
        <p>2번 모달</p>
        <button onClick={() => toggleModal("modal2")}>open modal</button>
      </ButtonWrapper>
      <ButtonWrapper>
        <p>3번 모달</p>
        <button onClick={() => toggleModal("modal3")}>open modal</button>
      </ButtonWrapper>
      {openModal1 && <Modal close={() => toggleModal("modal1")} />}
      {openModal2 && <Modal close={() => toggleModal("modal2")} />}
      {openModal3 && <Modal close={() => toggleModal("modal3")} />}
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
export default OneModal;
