import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Detail from "./pages/detail";
import Home from "./pages/home";
import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="body-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
