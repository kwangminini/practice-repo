import React from "react";
import styles from "./styles.scss";
import styled from "@emotion/styled";

const Test = styled.div`
  color: red;
`;

function App() {
  return (
    <div className={styles.test}>
      Hello
      <Test>fontColor:red</Test>
    </div>
  );
}

export default App;
