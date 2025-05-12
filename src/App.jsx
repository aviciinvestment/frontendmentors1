import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu.jsx";
import React from "react";
import Applayout from "./ui/Applayout.jsx";
import Record from "./Record/Record.jsx";
import Homepage from "./Home/Homepage.jsx";
import About from "./About/About.jsx";
import Login from "./Signup/Login.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/record"
          element={
            <Applayout>
              <Record />
            </Applayout>
          }
        />
        <Route
          path="/purchase"
          element={
            <Applayout>
              <Menu />
            </Applayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
