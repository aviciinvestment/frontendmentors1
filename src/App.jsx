import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import SuccessPage from "./ServicePage/successPage";
import ServiceMain from "./ServicePage/ServiceMain";
import RandomGenerator from "./ServicePage/RandomGenerator";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServiceMain />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/random" element={<RandomGenerator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
