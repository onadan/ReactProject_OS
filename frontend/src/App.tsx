import {BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { Home } from "./components/Home";

import { Footer } from "./components/shared/Footer";
import { Navbar } from "./components/shared/Navbar";

function App() {
  return (
    <Router>
        <Fragment>
          <Navbar>
            
          </Navbar>
          <Routes>
          {/* <Route path="/" element={<Home />} />
            <Route component={Routes} />  */}
          </Routes>
          <Footer/>
        </Fragment>
      </Router>
  );
}

export default App;
