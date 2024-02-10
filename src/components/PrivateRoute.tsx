import React from "react";
import { Route, redirect } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props: any) =>
      isAuthenticated() ? <Component {...props} /> : redirect("/login")
    }
  />
);

export default PrivateRoute;
