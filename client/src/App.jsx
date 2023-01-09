import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Component/layouts/Landing";
import Auth from "./views/Auth";
import Login from "./Component/auth/Login";
import Register from "./Component/auth/Register";
import AuthContextProvider from "./contexts/AuthContext";
import PostContextProvider from "./contexts/PostContext";
import ProtectedRoute from "./Component/routing/ProtectedRoute";
import Dashboard from "./views/Dashboard";
import About from "./views/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/" element={<Auth />}>
              <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Register />} />
            </Route>
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
