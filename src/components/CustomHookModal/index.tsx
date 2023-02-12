import React from "react";
import styled from "@emotion/styled";

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
const Button = styled.button<{ fontsize: string }>`
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontsize};
`;

function CustomHookModal() {
  return (
    <Wrapper>
      <Title data-testid="title">커스텀 훅을 이용한 모달 테스트</Title>
      <ButtonWrapper>
        <Button fontsize={`200px`}>modal1</Button>
        <Button fontsize={`200px`}>modal2</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default CustomHookModal;
