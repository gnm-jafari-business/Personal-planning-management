import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Container/Dashboard/Dashboard";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";

const isAuthenticated = true;

const AuthenticatedFn = (component) => {
  if (isAuthenticated) {
    return component;
  } else {
    <Navigate to="/login" />;
  }
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={AuthenticatedFn(<Dashboard />)} />

        <Route path="/login" element={AuthenticatedFn(<Login />)} />

        <Route path="/dashboard" element={AuthenticatedFn(<Dashboard />)} />

        <Route path="/home" element={AuthenticatedFn(<Home />)} />

        <Route path="*" element={AuthenticatedFn(<Dashboard />)} />
      </Routes>
    </div>
  );
}

export default App;
