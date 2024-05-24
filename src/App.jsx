import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExpenseDetail from "./pages/ExpenseDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expense/:id" element={<ExpenseDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
