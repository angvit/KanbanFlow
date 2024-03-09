import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Login/LogoutButton";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  console.log(user);
  return (
    <>
      {!isAuthenticated ? (
        <div className="navbar bg-base-300 sticky z-10 top-0">
          <div className="flex-1">
            <Link to="/" className="btn mr-1 btn-ghost text-base">
              KanbanFlow Clone
            </Link>
          </div>
          <div className="flex-none">
            <LoginButton />
          </div>
        </div>
      ) : (
        <div className="navbar bg-base-300 sticky z-10 top-0">
          <div className="flex-1">
            <Link to="/" className="btn mr-1 btn-ghost text-base">
              KanbanFlow Clone
            </Link>
            <Link to="/boards" className="btn mr-1 btn-ghost text-base">
              Boards
            </Link>
            <Link to="/dashboard/2" className="btn mr-1 btn-ghost text-base">
              Dashboard 
              {/* THE 2 WILL BE REPLACED LATER, DASHBOARD WILL NOT BE IN THE NAV BAR */}
            </Link>
            <Link to="/" className="btn mr-1 btn-primary text-base">
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
                  {user?.picture ? (
                    <img alt="User Profile Picture" src={user.picture} />
                  ) : (
                    <img
                      alt="Default Profile Picture"
                      src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
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
