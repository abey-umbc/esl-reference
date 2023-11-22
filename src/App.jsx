import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Routes/Home/Home";
import Insights from "./Routes/Insights/Insights";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/:id" element={<Insights />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
);
