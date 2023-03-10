import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomHookModal from "../pages/CustomHookModal";
import Emotion from "../components/Emotion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Emotion />} />
      <Route path="/customhookmodal" element={<CustomHookModal />} />
    </Routes>
  );
}

export default App;
