import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../components/Home';
import Layout from '../components/Layout';

import { TaskList } from '../pages/tasks/TaskList';

import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import PrivateRoute from '../components/PrivateRoute';
import { Landing } from '../components/Landing';
import React from 'react';
import { ProjectList } from '../pages/projects/ProjectList';
import TicketList from '../pages/tickets/TicketList';

export const Routing: React.FC = () => {
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
                  <Route index element={<PrivateRoute>{<Home />}</PrivateRoute>} />
                  <Route path="/tasks" element={<PrivateRoute>{<TaskList />} </PrivateRoute>} />
                  <Route
                    path="/projects"
                    element={<PrivateRoute>{<ProjectList />}</PrivateRoute>}
                  />

                  <Route path="/tickets" element={<PrivateRoute>{<TicketList />}</PrivateRoute>} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
