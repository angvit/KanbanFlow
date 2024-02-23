import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Login/LogoutButton";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <>
      {!isAuthenticated ? (
        <div className="navbar bg-base-300 sticky z-10 top-0">
          <div className="flex-1">
            <Link to="/" className="btn mr-1 btn-ghost text-lg">
              KanbanFlow Clone
            </Link>
            <button
              onClick={() => loginWithRedirect()}
              className="btn mr-1 btn-ghost text-lg"
            >
              Boards
            </button>
            <button
              onClick={() => loginWithRedirect()}
              className="btn mr-1 btn-ghost text-lg"
            >
              Dashboard
            </button>
            <button
              onClick={() => loginWithRedirect()}
              className="btn mr-1 btn-primary text-lg"
            >
              Create Board
            </button>
          </div>
          <div className="flex-none">
            <LoginButton />
          </div>
        </div>
      ) : (
        <div className="navbar bg-base-300 sticky z-10 top-0">
          <div className="flex-1">
            <Link to="/" className="btn mr-1 btn-ghost text-lg">
              KanbanFlow Clone
            </Link>
            <Link to="/boards" className="btn mr-1 btn-ghost text-lg">
              Boards
            </Link>
            <Link to="/dashboard" className="btn mr-1 btn-ghost text-lg">
              Dashboard
            </Link>
            <Link to="/" className="btn mr-1 btn-primary text-lg">
              Create Board
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              ></div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user?.picture && (
                    <img
                      alt="User Profile Picture"
                      src={user.picture}
                    />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28"
              >
                <li>
                  <h1 className="justify-between">Profile</h1>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
