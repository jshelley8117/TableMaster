import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
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
            <Route path="/register" element={<Register />}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
          </Routes>
    </Router>
  )
};

export default App;
