import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Simple state to simulate user authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate checking login status (e.g., checking local storage for an auth token)
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  // Simulate login/logout functions
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("authToken");
    } else {
      localStorage.setItem("authToken", "yourAuthTokenHere");
    }
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="navbar bg-base-300 fixed top-0 z-50 w-full">
      <div className="flex-1">
        <Link to="/" className="btn mr-1 btn-ghost text-lg">KanbanFlow Clone</Link>
        <Link to="/boards" className="btn mr-1 btn-ghost text-lg">Boards</Link>
        <Link to="/dashboard" className="btn mr-1 btn-ghost text-lg">Dashboard</Link>
        {/* <Link to="/" className="btn mr-1 btn-primary text-lg">Create Board</Link> */}
      </div>
      <div className="flex-none">
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Profile" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28">
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLoginLogout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <button onClick={handleLoginLogout} className="btn">Login</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

