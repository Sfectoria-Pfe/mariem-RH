import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../apps/Main";
import Auth from "../apps/Auth";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import JobOffre from "../pages/JobOffre";
import Interview from "../pages/Interview";
import Internshipoffer from "../pages/Internshipoffer";
import Condiddature from "../pages/Condiddature";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Condition from "../pages/Condition";
export default function Router() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<Main />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="joboffre" element={<JobOffre />} />
            <Route path="interview" element={<Interview />} />
            <Route path="internshipoffer" element={<Internshipoffer />} />
            <Route path="condidature" element={<Condiddature />} />
            <Route path="condition" element={<Condition/>}/>
        

          </Route>

        ) : (
          <Route path="/" element={<Auth />}>
            <Route path="contact" element={<Contact />} />

            <Route path="home" element={<Home />} />
            <Route index element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
