import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Test = styled.div`
  color: red;
`;

const Wrapper = styled.div``;

const Button = styled.button``;

function Emotion() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/customhookmodal");
  };
  return (
    <Wrapper>
      <Test>fontColor:red</Test>
      <Button onClick={handleClick}>Custom Hook Modal</Button>
    </Wrapper>
  );
}

export default Emotion;
