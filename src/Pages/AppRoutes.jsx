import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Insights from "./Insights/Insights";
import Security from "./Security/Security";

const AppRoutes = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  if (!accessGranted) {
    return <Security onAccessGranted={() => setAccessGranted(true)} />;
  }
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
