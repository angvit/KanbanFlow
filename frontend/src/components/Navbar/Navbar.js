import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Login/LogoutButton";
import Workspace from "../../pages/Boards/Workspace";
import axios from "axios";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [workspaces, setWorkspaces] = useState([]);
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState(false);
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceDescription, setWorkspaceDescription] = useState("");
  const [boardTitle, setBoardTitle] = useState("");
  const [boardColor, setBoardColor] = useState("#ffffff"); // Default color
  const [boardDescription, setBoardDescription] = useState("");

  const { sub } = user || {};

  useEffect(() => {
    if (user && sub) {
      axios
        .get(`/workspaces/${user.sub}`)
        .then((response) => {
          setWorkspaces(response.data.workspaces); // Adjust depending on your API response structure
          console.log("Workspaces set: ", response.data.workspaces);
        })
        .catch((error) => {
          console.error("Error fetching workspaces: ", error);
        });
      axios
        .get(`workspaces/${user.sub}`)
        .then((response) => {
          setWorkspaces(response.data.workspaces); // Adjust depending on your API response structure
          console.log("Workspaces set: ", response.data.workspaces);
        })
        .catch((error) => {
          console.error("Error fetching workspaces: ", error);
        });
    }
    // This should ideally be called when the user logs in
  }); // Run the effect when user.sub changess

  const createDefaultWorkspace = async () => {
    try {
      const defaultWorkspaceData = {
        name: "Default Workspace",
        description: "This is a default workspace.",
      };
      const response = await axios.post(
        `workspaces/${user.sub}`,
        defaultWorkspaceData
      );
      return response.data; // Should return the new workspace created
    } catch (error) {
      console.error("Error creating default workspace: ", error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleCreateWorkspaceModal = () => {
    setIsWorkspaceModalOpen(!isWorkspaceModalOpen);
  };

  const createWorkspace = (e) => {
    const workspaceData = {
      name: workspaceName,
      description: workspaceDescription,
    };

    axios
      .post(`workspaces/${user.sub}`, workspaceData)
      .then((response) => {
        console.log(response.data);
        setIsWorkspaceModalOpen(false); // Close the modal on successful creation
        setWorkspaceName(""); // Reset form
        setWorkspaceDescription(""); // Reset form
      })
      .catch((error) => {
        console.log("Error creating workspace: ", error);
      });
  };

  const handlePost = async (e) => {
    e.preventDefault();

    let workspaceId = selectedWorkspaceId;

    // If no workspaces exist, create a default one
    if (!workspaces || workspaces.length === 0) {
      const defaultWorkspace = await createDefaultWorkspace();
      if (defaultWorkspace) {
        workspaceId = defaultWorkspace.id;
        setWorkspaces([defaultWorkspace]); // Add the default workspace to the state
        setSelectedWorkspaceId(workspaceId); // Select the default workspace
      } else {
        // Handle the error appropriately
        alert("Failed to create a default workspace. Please try again.");
        return;
      }
    }

    const newBoard = {
      title: boardTitle,
      color: boardColor,
      description: boardDescription,
      workspaceId: workspaceId,
    };

    try {
      const response = await axios.post(
        `dashboards/${user.sub}/${workspaceId}`,
        newBoard
      );
      console.log(response.data);
      // Close the modal and clear form fields if necessary
      setIsModalOpen(false);

      // Handle the board creation success, such as updating the UI or state
    } catch (error) {
      console.error("Error creating board: ", error);
      // Handle the board creation error
    }
  };

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
                    <Link className="justify-between" onClick={toggleModal}>
                      Create Board
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="justify-between"
                      onClick={toggleCreateWorkspaceModal}
                    >
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
                      >
                        ✕
                      </button>

                      {/* Form Title */}
                      <h3 className="font-bold text-lg">
                        Creating a New Board
                      </h3>

                      {/* Board Title Input */}
                      <label
                        htmlFor="boardTitle"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Board Title
                      </label>
                      <input
                        placeholder="Enter board title"
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                      />

                      {/* Board Background Color Picker */}
                      <label
                        htmlFor="boardColor"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Background Color
                      </label>
                      <input className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm" />

                      {/* Board Description Input */}
                      <label
                        htmlFor="boardDescription"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Description
                      </label>
                      <textarea
                        placeholder="Something creative here"
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows="3"
                      ></textarea>

                      {workspaces ? (
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text">Select Workspace</span>
                          </label>
                          <select
                            className="select select-bordered w-full max-w-xs"
                            value={selectedWorkspaceId}
                            onChange={(e) =>
                              setSelectedWorkspaceId(e.target.value)
                            }
                            required
                          >
                            <option disabled selected>
                              Choose a workspace
                            </option>
                            {workspaces.map((workspace) => (
                              <option key={workspace.id} value={workspace.id}>
                                {workspace.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      ) : (
                        <p>Nothing here</p>
                      )}

                      {/* Modal Actions */}
                      <div className="modal-action mt-6">
                        <button type="submit" className="btn">
                          Create
                        </button>
                        <button
                          type="button"
                          className="btn"
                          onClick={toggleModal}
                        >
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

              {isWorkspaceModalOpen && (
                <dialog open className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <form onSubmit={createWorkspace}>
                      <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={toggleCreateWorkspaceModal}
                      >
                        ✕
                      </button>
                      <h3 className="font-bold text-lg">
                        Creating a New Workspace
                      </h3>

                      {/* Workspace Name Input */}
                      <label
                        htmlFor="workspaceName"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Workspace Name
                      </label>
                      <input
                        id="workspaceName"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        placeholder="Workspace Name"
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                      />

                      {/* Workspace Description Input */}
                      <label
                        htmlFor="workspaceDescription"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Description
                      </label>
                      <textarea
                        id="workspaceDescription"
                        value={workspaceDescription}
                        onChange={(e) =>
                          setWorkspaceDescription(e.target.value)
                        }
                        placeholder="Workspace Description"
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows="3"
                      ></textarea>

                      {/* Modal Actions */}
                      <div className="modal-action mt-6">
                        <button type="submit" className="btn">
                          Create
                        </button>
                        <button
                          type="button"
                          className="btn"
                          onClick={toggleCreateWorkspaceModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
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
