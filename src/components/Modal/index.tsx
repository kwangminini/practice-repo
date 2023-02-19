import React from "react";
import styled from "@emotion/styled";

interface IProps {
  close: () => void;
}

function Modal({ close }: IProps) {
  return (
    <Wrapper>
      <Background onClick={close} />
      <ModalWrap>
        <Title data-testid="title">모달 타이틀</Title>
      </ModalWrap>
    </Wrapper>
  );
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
  align-items: center;
`;
const Title = styled.h1``;

export default Modal;
