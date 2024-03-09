import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './AuthContext/AuthContext';
import Home from "./pages/Home/Home";
import Board from "./pages/Boards/Board";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider> {/* Wrap your components with AuthProvider */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boards" element={<Board />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

