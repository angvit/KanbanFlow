import React from "react";

function Profile() {
  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="bg-white shadow rounded-lg p-8">
        <h1 className="text-xl font-bold mb-4">Manage your personal information</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>

          <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio:</label>
            <textarea id="bio" name="bio" rows="4" placeholder="Write a short bio about yourself" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>

          <button type="submit" className="btn bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
