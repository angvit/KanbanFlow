import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/LoginButton"; // Adjusted path
import LogoutButton from "../Login/LogoutButton"; // Adjusted path

function Navbar() {
  const { isAuthenticated, user } = useAuth0();
  console.log("Is authenticated:", isAuthenticated);

  return (
    <div className="navbar bg-base-300 fixed top-0 z-50 w-full">
      <div className="flex-1">
        <Link to="/" className="btn mr-1 btn-ghost text-lg">KanbanFlow Clone</Link>
        <Link to="/boards" className="btn mr-1 btn-ghost text-lg">Boards</Link>
        <Link to="/dashboard" className="btn mr-1 btn-ghost text-lg">Dashboard</Link>
      </div>
      <div className="flex-none">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.picture ? (
                  <img alt="Profile" src={user.picture}/>
                ) : (
                  <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-3.007a9.992 9.992 0 0 0 18.225-6.285A9.95 9.95 0 0 0 20 12c0-5.514 4.486-10 10-10s10 4.486 10 10a9.95 9.95 0 0 0-1.775 5.708A9.992 9.992 0 0 0 24 20.993zM12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm6.364 10.364a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828zM12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    </svg>
                  </span>
                )}
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28">
              <li><Link to="/profile">Profile</Link></li>
              <li><LogoutButton /></li>
            </ul>
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}

export default Navbar;


