import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home/Home";
import Board from "./pages/Boards/Board";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Test from "./pages/Test";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <div className="App">
      <Router>
        {error && <div> There is an Error: {error.message}</div>}
        {!error && isLoading && <Loading />}
        {!error && !isLoading && (
          <>
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Board />} path="/boards" />
              <Route
                element={<Dashboard />}
                path="/boards/dashboard/:workspaceId/:id"
              />
              <Route element={<Login />} path="/login" />
              <Route element={<Register />} path="/register" />
              <Route element={<Test />} path="/test" />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
