import React, { useState } from "react";

import styled from "@emotion/styled";
import Modal from "@/components/Modal";

interface IModal {
  [key: string]: boolean;
  modal1: boolean;
  modal2: boolean;
  modal3: boolean;
}
//modal state를 객체로 묶고 toggle 함수 개선
function TwoModal() {
  const [toggleModalObj, setToggleModalObj] = useState<IModal>({
    modal1: false,
    modal2: false,
    modal3: false,
  });

  //modal toggle function
  const toggleModal = (name: string) => {
    setToggleModalObj({ ...toggleModalObj, [name]: !toggleModalObj[name] });
  };

  return (
    <>
      <h2>Step 2</h2>
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
      {toggleModalObj.modal1 && <Modal close={() => toggleModal("modal1")} />}
      {toggleModalObj.modal2 && <Modal close={() => toggleModal("modal2")} />}
      {toggleModalObj.modal3 && <Modal close={() => toggleModal("modal3")} />}
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
export default TwoModal;
