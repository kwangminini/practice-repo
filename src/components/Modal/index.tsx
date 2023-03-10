import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface IProps {
  close: () => void;
  isShowing: boolean;
}

function Modal({ close, isShowing }: IProps) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("============== mount ===========");
    return () => {
      console.log("============ unmount ===========");
    };
  }, []);

  const increaseNumber = () => {
    setNumber((cur) => cur + 1);
  };
  return isShowing ? (
    <Wrapper data-testid="modal">
      <Background onClick={close} />
      <ModalWrap>
        <Title data-testid="title">모달 타이틀</Title>
        <p>number :: {number}</p>
        <p>
          number <button onClick={increaseNumber}>+</button>
        </p>
      </ModalWrap>
    </Wrapper>
  ) : null;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalWrap = styled.div`
  width: 400px;
  height: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;
const Title = styled.h1``;

Modal.defaultProps = {
  isShowing: true,
};
export default Modal;
