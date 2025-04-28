import React from "react";
import { Routes, Route } from "react-router-dom";
import BookTable from "./Components/BookTable/BookTable";
import Confirmation from "./Components/Confirmation/Confirmation";

import "./App.css";
import HomePage from "./HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservation" element={<BookTable />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;
