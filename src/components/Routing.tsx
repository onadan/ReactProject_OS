import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import Layout from './Layout';

import { TaskList } from '../pages/tasks/TaskList';

import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import PrivateRoute from './PrivateRoute';
import { Landing } from './Landing';
import React from 'react';
import { ProjectList } from '../pages/projects/ProjectList';
import TicketList from '../pages/tickets/TicketList';
import MemberList from '../pages/members/MemberList';
import AdminPrivateRoute from './AdminPrivateRoute';

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
                  <Route path="/members" element={<AdminPrivateRoute>{<MemberList />}</AdminPrivateRoute>} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
