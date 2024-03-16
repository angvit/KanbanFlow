import React, { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import './Home.css'; // Import your CSS file
import Slides from './Slides'; // Update the import path
import KFBanner from './KFBanner.png'

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="main-section">
         <div className="center-image"> {/* Added a new div with 'center-image' class */}
            <img src={KFBanner} alt="KanbanFlow Banner" style={{ width: '68%', height: 'auto' }} />
          </div>
      <section className="hero-section">
        <div className="container mx-auto text-center"> {/* Added 'text-center' class */}
          <h1>Welcome to KanbanFlow Clone</h1>
          <p>Your ultimate project management tool</p>
          <br></br>
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
              <p> Allows users to easily organize and categorize their content. With just a few clicks, users can set up personalized boards to keep their information neatly arranged, enhancing efficiency and accessibility in managing their projects.</p>
            </div>
            {/* Feature 2 */}
            <div className="feature-card">
              <h3>Track Projects</h3>
              <p>Allows users to monitor and oversee tasks. This feature enables users to stay on top of project progress, deadlines, and milestones, streamlining the project tracking process for increased productivity and success.</p>
            </div>
            {/* Feature 3 */}
            <div className="feature-card">
              <h3>Save the Process</h3>
              <p>Allows user to preserve their work effortlessly. With a simple click, users can save their current progress, ensuring that valuable data, configurations, or edits are securely stored. This allows users to pick up right where they left off without any hassle. </p>
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
          <p>Contact KanbanFlow Clone on KanbanFlowClone@gmail.com</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
