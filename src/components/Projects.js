import React from "react";
import "../styles/Projects.css";
import { FaExternalLinkAlt, FaCode,  } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: " Blog Content Management System",
      description: (
        <>
          A fully functional <b>content management platform</b> that enables role-based access for admins and editors.
          <ul>
            <li><strong>Super Admin:</strong> Can manage editors & articles.</li>
            <li><strong>Editor Role:</strong> Can add and view articles.</li>
            <li>AJAX-based article loading – Displays the latest five articles dynamically.</li>
            <li>User feedback system – Allows visitors to give feedback.</li>
            <li>Guest Dashboard Access – Users can explore without logging in.</li>
          </ul>
          <p className="tech-stack"> <strong>Tech Stack:</strong> React.js, JavaScript, PHP, SQL, Bootstrap</p>
        </>
      ),
      link: "https://github.com/shahithabanu/blog.git"
      
    },
    {
      title: "Role-Based Employee Management & Leave System",
      description: (
        <>
          A <b>secure and scalable employee management platform</b> with different user roles.
          <ul>
            <li><strong>Super Admin:</strong> Can manage HR and employee accounts.</li>
            <li><strong>HR Role:</strong> Can oversee employee data and leave requests.</li>
            <li><strong>Employee Role:</strong> Can apply for leaves and view status.</li>
            <li>Secure authentication for role-based access.</li>
            <li>Optimized database management for seamless performance.</li>
          </ul>
          <p className="tech-stack"> <strong>Tech Stack:</strong> React.js, JavaScript, PHP, SQL, Bootstrap</p>
        </>
      ),
      link: "https://github.com/shahithabanu/admin-hr-employee-.git"
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.icon}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
              View Project <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
