import React, { useState } from "react";
import styled from "@emotion/styled";
import Modal from "@/components/Modal";

function CustomHookModal() {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const toggleShowing = () => {
    setIsShowing(!isShowing);
  };
  return (
    <Wrapper>
      <Title data-testid="title">커스텀 훅을 이용한 모달 테스트</Title>
      <ButtonWrapper>
        <p>부모 컴포넌트 state를 이용한 모달 띄우는 방식</p>
        <Button onClick={toggleShowing}>open modal</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <p>custom hook을 이용한 모달 띄우는 방식</p>
        <Button>open modal</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <p>import modal 없이custom hook을 이용한 모달 띄우는 방식</p>
        <Button>open modal</Button>
      </ButtonWrapper>
      {isShowing && <Modal close={toggleShowing} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  p {
    font-size: 14px;
  }
`;
//props 부분 블로그 포스팅
const Button = styled.button`
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export default CustomHookModal;
