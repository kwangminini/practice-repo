import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomHookModal from "../components/CustomHookModal";
import Emotion from "../components/Emotion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Emotion />} />
      <Route path="/custom" element={<CustomHookModal />} />
    </Routes>
  );
}

export default App;
