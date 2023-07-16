import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomHookModal from "../pages/CustomHookModal";
import Emotion from "../components/Emotion";
import ApiStructure from "@/pages/ApiStructure";
import ApiStructureByClass from "@/pages/ApiStructureByClass";
import PdfTest from "@/components/PdfTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Emotion />} />
      <Route path="/customhookmodal" element={<CustomHookModal />} />
      <Route path="/api-structure" element={<ApiStructure />} />
      <Route path="/api-structure-class" element={<ApiStructureByClass />} />
      <Route path="/pdf-test" element={<PdfTest />} />
    </Routes>
  );
}

export default App;
