import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import Layout from "../components/Layout";
import { Project } from "../pages/Project";
import { Tasks } from "../pages/Tasks";
import { Workspace } from "../pages/Workspace";
import { Tickets } from "../pages/Tickets";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import PrivateRoute from "../components/PrivateRoute";
import { Landing } from "../pages/Landing";
import React from "react";

export const Routing:React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/" element={<Landing />} />

          <Route
              path="/app/*"
            element={
              <Layout>
                <Routes>
                  <Route
                    index
                    element={<PrivateRoute>{<Home />}</PrivateRoute>}
                  />
                  <Route path="/tasks" element={<PrivateRoute>{<Tasks/>} </PrivateRoute>} />
                  <Route path="/projects" element={<PrivateRoute>{<Project/>}</PrivateRoute>} />
                  <Route path="/workspace" element={<PrivateRoute>{<Workspace/>}</PrivateRoute> } />
                  <Route path="/tickets" element={<PrivateRoute>{<Tickets/>}</PrivateRoute> } />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
