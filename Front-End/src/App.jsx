import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { messagesFn } from "./helper/utils.js";
import { IntlProvider, useIntl } from "react-intl";
import Dashboard from "./Container/Dashboard/Dashboard";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";

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
