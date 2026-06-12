import { useState, useEffect } from "react";

import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import ErrorBoundary from "./components/ErrorBoundary";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  const [loggedIn, setLoggedIn] = useState(
  localStorage.getItem("loggedIn") === "true"
);
useEffect(() => {
  localStorage.setItem("loggedIn", loggedIn);
}, [loggedIn]);
 return (
  <ErrorBoundary>
    <Routes>

      <Route
        path="/"
        element={
          !loggedIn ? (
            <LoginPage
              onLogin={() => setLoggedIn(true)}
            />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      />

      <Route
        path="/dashboard"
        element={
          loggedIn ? (
            <Dashboard
              onLogout={() => setLoggedIn(false)}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

    </Routes>
  </ErrorBoundary>
);
}

export default App;