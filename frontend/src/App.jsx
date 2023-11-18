import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/account-log-in" element={user ? <Home /> : <SignIn />}/>
            <Route path="/register" element={user ? <Home /> : <Register />}/>
            <Route path="/forgot-password" element={user ? <Home /> : <ForgotPassword />}/>

            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
    </Router>
  )
};

export default App;
