import React from 'react';
// import Navbar from '../../components/Navbar/Navbar'; 

function Home() {
  return (
    <div>
    <main>
        {/* Hero Section */}
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to KanbanFlow Clone</h1>
            <p className="text-lg">Your ultimate project management tool.</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Feature 1</h3>
                <p className="text-gray-600">Description of feature 1...</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Feature 2</h3>
                <p className="text-gray-600">Description of feature 2...</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Feature 3</h3>
                <p className="text-gray-600">Description of feature 3...</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-700">KanbanFlow Clone is a simplified, web-based project management application inspired by Trello. It aims to implement the core functionalities of a Kanban board to allow users to manage their tasks and projects efficiently. The application will provide an intuitive interface for users to create boards, lists, and cards that represent different stages of a project workflow. With a focus on simplicity and usability, KanbanFlow Clone will be developed using basic HTML, CSS, and JavaScript for the frontend, with a Node.js backend to handle data persistence and application logic.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700">Contact information and form...</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 KanbanFlow Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

