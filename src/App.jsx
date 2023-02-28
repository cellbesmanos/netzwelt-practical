import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import ProtectedRoute from "./ProtectedRoute";
import AuthenticationProvider from "./providers/AuthenticationProvider";

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
