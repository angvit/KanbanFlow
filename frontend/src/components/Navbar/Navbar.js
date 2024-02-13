import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-300 h-5">
      <div className="flex-1">
        <Link to="/" className="btn mr-1 btn-ghost text-lg">
          KanbanFlow Clone
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
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
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
              <Link to="/login">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
