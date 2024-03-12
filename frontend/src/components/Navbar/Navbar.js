import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Login/LogoutButton";
import Workspace from "../../pages/Boards/Workspace";
import axios from "axios";

function Navbar() {

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handlePost = ({ newBoard }) => {
    const request = axios.post(`/${user.sub}`, newBoard);
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
            <div className="dropdown dropdown-end">
              <button
                onClick={toggleDropdown}
                className="btn mr-1 btn-primary text-base"
              >
                Create
              </button>
              {isDropdownOpen && (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu m-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/create/board" className="justify-between" onClick={toggleModal}>
                      Create Board
                    </Link>
                  </li>
                  <li>
                    <Link to="/create/dashboard" className="justify-between">
                      Create Workspace
                    </Link>
                  </li>
                  {/* Add other creation options as needed */}
                </ul>
              )}
              {isModalOpen && ( // Conditionally render the modal
              <dialog open className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                  <form onSubmit={handlePost}>
                    {/* Close button */}
                    <button
                      type="button"
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      onClick={toggleModal}
                    >✕</button>

                    {/* Form Title */}
                    <h3 className="font-bold text-lg">Creating a New Board</h3>

                    {/* Board Title Input */}
                    <label htmlFor="boardTitle" className="block text-sm font-medium text-gray-700 mt-4">
                      Board Title
                    </label>
                    <input
                      
                      
                      placeholder="Enter board title"
                      className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />

                    {/* Board Background Color Picker */}
                    <label htmlFor="boardColor" className="block text-sm font-medium text-gray-700 mt-4">
                      Background Color
                    </label>
                    <input
                      
                      className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm"
                    />

                    {/* Board Description Input */}
                    <label htmlFor="boardDescription" className="block text-sm font-medium text-gray-700 mt-4">
                      Description
                    </label>
                    <textarea
                      
                      placeholder="Something creative here"
                      className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      rows="3"
                    ></textarea>

                    {/* Modal Actions */}
                    <div className="modal-action mt-6">
                      <button type="submit" className="btn">
                        Create
                      </button>
                      <button type="button" className="btn" onClick={toggleModal}>
                        Cancel
                      </button>
                    </div>
                  </form>
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={toggleModal}
                  >
                    ✕
                  </button>
                </div>
              </dialog>
      )}
            </div>
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
