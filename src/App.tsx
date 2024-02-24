import React, { Fragment, useEffect } from "react";
import { Routing } from "./components/Routing";
import setAuthToken from "./utils/setAuthToken";

const App: React.FC = () => {
  useEffect(() => {
    
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <Fragment>
      <Routing />
    </Fragment>
  );
};

export default App;
