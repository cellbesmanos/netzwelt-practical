import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthenticationProvider from "./providers/AuthenticationProvider";

import "./App.css";

export default function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<ProtectedRoute children={<Home />} />} />

          <Route path="/Account/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthenticationProvider>
  );
}
