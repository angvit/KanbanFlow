import './App.css';
import { BrowserRouter as Rounter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Rounter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </Rounter>
    </div>
  );
}

export default App;
