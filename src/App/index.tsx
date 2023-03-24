import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomHookModal from "../pages/CustomHookModal";
import Emotion from "../components/Emotion";
import ApiStructure from "@/pages/ApiStructure";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Emotion />} />
      <Route path="/customhookmodal" element={<CustomHookModal />} />
      <Route path="/api-structure" element={<ApiStructure />} />
    </Routes>
  );
}

export default App;
