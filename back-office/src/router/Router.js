import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../apps/Main";
import Auth from "../apps/Auth";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
export default function Router() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<Main />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
