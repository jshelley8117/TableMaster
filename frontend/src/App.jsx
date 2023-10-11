import Home from "./pages/Home";
import SignUpSignIn from "./pages/SignUpSignIn";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/account-log-in-sign-up" element={user ? <Home/> : <SignUpSignIn/>}/>
          </Routes>
    </Router>
  )
};

export default App;
