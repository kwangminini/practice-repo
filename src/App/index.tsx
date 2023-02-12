import React from "react";
import { Routes, Route } from "react-router-dom";
import Emotion from "../components/Emotion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Emotion />} />
    </Routes>
  );
}

export default App;
