import React, { useState } from "react";
import styled from "@emotion/styled";
import OneModal from "@/components/CustomHookModal/OneModal";
import TwoModal from "@/components/CustomHookModal/TwoModal";
import CustomModal from "@/components/CustomHookModal/CustomModal";
import ModalRenderTest from "@/components/CustomHookModal/ModalRenderTest";
import CreatePortalModalTest from "@/components/CustomHookModal/CreatePortalModalTest";

function CustomHookModal() {
  return (
    <Wrapper>
      <Title data-testid="title">커스텀 훅을 이용한 모달 테스트</Title>
      <hr />
      <OneModal />
      <hr />
      <TwoModal />
      <hr />
      <CustomModal />
      <hr />
      <ModalRenderTest />
      <hr />
      <CreatePortalModalTest />
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

export default CustomHookModal;
