import React from "react";
import "./App.css";
import "./Style.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import { messagesFn } from "./helper/utils.jsx";
import { IntlProvider, useIntl } from "react-intl";
import Dashboard from "./Container/Dashboard/Dashboard";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";
import Menu from "./Component/Menu.jsx";

const isAuthenticated = true;
const lang = "fa";

export const AuthenticatedFn = (component) => {
  if (isAuthenticated) {
    return component;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <div>
      <IntlProvider
        locale={lang}
        messages={messagesFn(lang)}
        defaultLocale="fa"
      >
        <div
          className="fixed inset-x-16 top-14 flex  justify-between items-center"
          style={{ zIndex: "10000" }}
        >
          <Menu />
        </div>

        <Routes>
          <Route path="/" element={AuthenticatedFn(<Dashboard />)} />

          <Route path="/login" element={AuthenticatedFn(<Login />)} />

          <Route path="/dashboard" element={AuthenticatedFn(<Dashboard />)} />

          <Route path="/home" element={AuthenticatedFn(<Home />)} />

          <Route path="*" element={AuthenticatedFn(<Dashboard />)} />
        </Routes>
      </IntlProvider>
    </div>
  );
}

export default App;
