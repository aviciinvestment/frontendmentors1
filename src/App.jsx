import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Homepage from "./Homepage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
