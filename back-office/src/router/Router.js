import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../apps/Main";
import Auth from "../apps/Auth";
import ForgetPassword from "../pages/ForgetPassword";

import Dashboard from "../pages/Dashboard"
import Profile from "../pages/Profile";
import JobOffre from "../pages/jobOffre/JobOffre";
import Interview from "../pages/Interview";
import Internshipoffer from "../pages/Internshipoffer";
import Condiddature from "../pages/Condiddature";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Condition from "../pages/Condition";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";
import LoginTest from "../LoginPage/Login";
import JobOffreList from "../pages/jobOffre/JobOffreList";
import AddJobOffre from "../pages/jobOffre/AddJobOffre";
// export default function Router() {
//   const user = true;

export const MyContext = createContext("");

const Router = () => {
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(false);

  const getMe = async () => {
    try {
      const token = await JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const resp = await axios.get("http://localhost:4000/auth/me", config);
      setUser(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMe();
  }, [update]);
  return (
    <div>
      <BrowserRouter>
        <MyContext.Provider value={user}>
          <Routes>
            {user ? (
              <Route path="/" element={<Main />}>
                <Route index element={<Dashboard />} />
                <Route
                  path="profile"
                  element={
                    <PrivateRoute
                      component={<Profile />}
                      roles={["Admin", "ResponsableRH"]}
                    />
                  }
                />
                <Route
                  path="joboffre"
                  element={
                    <PrivateRoute
                      component={<JobOffre />}
                      roles={["Admin", "ResponsableRH", "Recruteur"]}
                    />
                  }
                >
                  <Route index element={<JobOffreList />} />
                  <Route path="add-jobOffer" element={<AddJobOffre />} />
                  <Route path="jobOffer-detail/:id" element={<AddJobOffre />} />
               
                </Route>
                <Route
                  path="interview"
                  element={
                    <PrivateRoute
                      component={<Interview />}
                      roles={["Admin", "ResponsableRH", "Recruteur"]}
                    />
                  }
                />
                <Route
                  path="internshipoffer"
                  element={
                    <PrivateRoute
                      component={<Internshipoffer />}
                      roles={["Admin", "ResponsableRH", "Recruteur"]}
                    />
                  }
                />
                <Route
                  path="condidature"
                  element={
                    <PrivateRoute
                      component={<Condiddature />}
                      roles={["Admin", "ResponsableRH", "Recruteur"]}
                    />
                  }
                />
                <Route path="condition" element={<Condition />} />
              </Route>
            ) : (
              <Route path="/" element={<Auth />}>
                <Route path="contact" element={<Contact />} />

                <Route path="home" element={<Home />} />

                <Route path="forget-password" element={<ForgetPassword />} />
                <Route
                  index
                  element={<LoginTest setUpdate={setUpdate} update={update} />}
                />
              </Route>
            )}
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
};
export default Router;
