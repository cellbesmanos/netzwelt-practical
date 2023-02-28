import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
