import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

import ServiceMain from "./ServicePage/ServiceMain";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServiceMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
