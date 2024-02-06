import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import { Routing } from "./shared/Routing";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route   path="/auth/signup" element={<SignUp />} />
          <Route   path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Routing /> */}
    </div>
  );
}

export default App;
