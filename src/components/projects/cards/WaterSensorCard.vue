<!-- Water Quality Management System Card Component -->
<template>
  <article class="project-card backend-project-card">
    <div class="project-card-layout backend-layout">

      <!-- Backend Project Summary -->
      <section class="backend-summary">

        <p class="project-type">
          Backend Application
        </p>

        <h2 class="backend-title">
          Water Quality Management System
        </h2>

        <p class="backend-subtitle">
          Secure REST API & Data Management
        </p>


        <!-- Technology Stack -->
        <div class="backend-stack">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>PostgreSQL</span>
          <span>Spring Security</span>
          <span>JPA</span>
          <span>Lombok</span>
        </div>


        <!-- Backend Focus -->
        <p class="backend-focus">
          Backend architecture focused on secure data management,
          application logic, persistence and testing.
        </p>


        <!-- GitHub Link -->
        <a
          class="site-button"
          href="https://github.com/CraftyCurtis05/water-quality-application"
          target="_blank"
          rel="noopener noreferrer"
          title="View Water Quality Management System on GitHub"
        >
          View Code on GitHub
        </a>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            Water Quality Management System
          </h2>


          <!-- GitHub Link -->
          <p class="project-link">
            <a
              href="https://github.com/CraftyCurtis05/water-quality-application"
              target="_blank"
              rel="noopener noreferrer"
              title="View Water Quality Management System on GitHub"
            >
              View Code on GitHub
            </a>
          </p>


          <hr>


          <!-- Technology Stack -->
          <p class="card-text">
            <strong>Tech Stack:</strong>
            Java, Spring Boot, PostgreSQL, Spring Security, JPA and Lombok
          </p>


          <!-- Project Description -->
          <p class="card-text">
            This backend-focused management system organizes water quality
            sensor data and applies application logic to help evaluate whether
            water meets expected quality standards. I built it to explore
            secure data management, REST-based services and persistent
            application data in a structured backend system.
          </p>


          <!-- Project Features -->
          <ul>
            <li>
              Built REST-based CRUD functionality for creating, viewing,
              updating and deleting sensor records
            </li>

            <li>
              Stored application and sensor data in PostgreSQL using JPA
            </li>

            <li>
              Added Spring Security for authenticated and role-based access
            </li>

            <li>
              Added validation, exception handling and environment-specific
              configuration
            </li>

            <li>
              Used integration testing to verify application behavior across
              the database and service layers
            </li>
          </ul>


          <!-- Project Note -->
          <p class="card-text project-note">
            <em>
              This project focuses on backend architecture, secure data
              management, application logic and testing rather than a
              user-facing interface.
            </em>
          </p>

        </div>

      </section>

    </div>
  </article>
</template>


<script>
export default {
  name: "WaterSensorCard"
};
</script>