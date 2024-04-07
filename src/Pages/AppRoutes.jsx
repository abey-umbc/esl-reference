import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Insights from "./Insights/Insights";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/:id" element={<Insights />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
