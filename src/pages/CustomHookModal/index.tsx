import React from "react";
import styled from "@emotion/styled";

function CustomHookModal() {
  return (
    <Wrapper>
      <Title data-testid="title">커스텀 훅을 이용한 모달 테스트</Title>
      <ButtonWrapper>
        <Text>부모컴포넌트 state를 이용한 모달 띄우는 방식</Text>
        <Button>open modal</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Text>custom hook을 이용한 모달 띄우는 방식</Text>
        <Button>open modal</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Text>import modal 없이custom hook을 이용한 모달 띄우는 방식</Text>
        <Button>open modal</Button>
      </ButtonWrapper>
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
const Text = styled.p`
  font-size: 14px;
`;

export default CustomHookModal;
