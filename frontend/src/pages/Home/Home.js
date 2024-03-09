import React, { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import './Home.css'; // Import your CSS file
import Slides from './Slides'; // Update the import path

function Home() {
  const { user } = useAuth0();
  useEffect(() => {
    if (user) {
      const request = axios.post("users", user);
      request
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  
  return (
    <div className="main-section">
      {/* Hero Section with Slides */}
      <section className="hero-section">
        <div className="container mx-auto">
          <h1>Welcome to KanbanFlow Clone</h1>
          <p>Your ultimate project management tool</p>
          <Slides />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container mx-auto">
          <h2>Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card">
              <h3>Create Boards</h3>
              <p>Description of feature 1..</p>
            </div>
            {/* Feature 2 */}
            <div className="feature-card">
              <h3>Track Porjects</h3>
              <p>Description of feature 2..</p>
            </div>
            {/* Feature 3 */}
            <div className="feature-card">
              <h3>Save the Process</h3>
              <p>Description of feature 3...</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container mx-auto">
          <h2>About Us</h2>
          <p>KanbanFlow Clone is a simplified, web-based project management application inspired
by Trello. It aims to implement the core functionalities of a Kanban board to allow users to manage
their tasks and projects efficiently. The application will provide an intuitive interface for users to
create boards, lists, and cards that represent different stages of a project workflow. With a focus
on simplicity and usability, KanbanFlow Clone will be developed using basic HTML, CSS, and
JavaScript for the frontend, with a Node.js backend to handle data persistence and application
logic</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container mx-auto">
          <h2>Contact Us</h2>
          <p>Contact KanbanFlow Clone on Slack</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
