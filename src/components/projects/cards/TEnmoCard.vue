<!-- TEnmo Card Component -->
<template>
  <article class="project-card backend-project-card">

    <div class="project-card-layout backend-layout">

      <!-- Project Summary -->
      <section class="backend-summary">

        <p class="project-type">
          Backend API
        </p>

        <h2 class="backend-title">
          TEnmo
        </h2>

        <p class="backend-subtitle">
          Peer-to-Peer Payment API
        </p>


        <!-- Technologies -->
        <div class="backend-stack">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>PostgreSQL</span>
          <span>REST API</span>
          <span>JDBC</span>
          <span>JWT</span>
        </div>


        <!-- Project Focus -->
        <p class="backend-focus">
          Secured transaction workflows connecting authenticated users,
          account balances and PostgreSQL-backed transfer data.
        </p>


        <!-- Source Code -->
        <p class="source-note">
          Source code is not publicly available in accordance with
          Tech Elevator coursework guidelines.
        </p>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            TEnmo Peer-to-Peer Payment API
          </h2>

          <hr>


          <!-- Tech Stack -->
          <p class="card-text">
            <strong>Tech Stack:</strong>
            Java, Spring Boot, PostgreSQL, REST API, JDBC and JWT Authentication
          </p>


          <!-- Description -->
          <p class="card-text">
            TEnmo is a backend-focused peer-to-peer payment application built
            during Tech Elevator. It manages users, account balances and money
            transfers through a secured REST API backed by PostgreSQL.
          </p>


          <!-- Features -->
          <ul>
            <li>
              Built REST endpoints for account balances, transfers
              and payment requests
            </li>

            <li>
              Created models and controller logic for transaction
              workflows between users
            </li>

            <li>
              Used DAO and JDBC patterns to connect application logic
              with PostgreSQL data
            </li>

            <li>
              Added JWT authentication to protect account and
              transaction functionality
            </li>

            <li>
              Used Postman to test API requests, responses and
              transaction workflows
            </li>
          </ul>


          <!-- Project Note -->
          <p class="card-text project-note">
            <em>
              This project gave me experience building a secured backend
              workflow where application logic, database updates and user
              transactions need to stay consistent.
            </em>
          </p>

        </div>

      </section>

    </div>

  </article>
</template>


<script>
export default {
  name: "TEnmoCard"
};
</script>