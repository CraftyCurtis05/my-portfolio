<!-- Tech Elevator Vending Machine Card Component -->
<template>
  <article class="project-card backend-project-card">

    <div class="project-card-layout backend-layout">

      <!-- Project Summary -->
      <section class="backend-summary">

        <p class="project-type">
          Java Command-Line Application
        </p>

        <h2 class="backend-title">
          Vending Machine
        </h2>

        <p class="backend-subtitle">
          Transaction Workflow & Application Logic
        </p>


        <!-- Technologies -->
        <div class="backend-stack">
          <span>Java</span>
          <span>OOP</span>
          <span>File I/O</span>
          <span>JUnit</span>
        </div>


        <!-- Project Focus -->
        <p class="backend-focus">
          A command-line application built around inventory management,
          transaction processing, validation and object-oriented design.
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
            Tech Elevator Vending Machine Application
          </h2>

          <hr>


          <!-- Tech Stack -->
          <p class="card-text">
            <strong>Tech Stack:</strong>
            Java, Object-Oriented Programming, File I/O and JUnit
          </p>


          <!-- Description -->
          <p class="card-text">
            This command-line application simulates a vending machine and
            manages the full transaction flow from inventory and product
            selection through payment, purchases and change. It helped
            reinforce the core Java concepts I used throughout the rest
            of the bootcamp.
          </p>


          <!-- Features -->
          <ul>
            <li>
              Loaded and tracked product inventory from application data
            </li>

            <li>
              Managed deposits, purchases and remaining balances through
              a structured transaction process
            </li>

            <li>
              Updated inventory after each purchase and prevented invalid
              transactions when products or funds were unavailable
            </li>

            <li>
              Used object-oriented design to separate products, transactions
              and application responsibilities
            </li>

            <li>
              Used JUnit testing to verify application logic and
              transaction behavior
            </li>
          </ul>


          <!-- Project Note -->
          <p class="card-text project-note">
            <em>
              This project focuses on core Java programming, application
              logic and object-oriented design rather than a graphical
              user interface.
            </em>
          </p>

        </div>

      </section>

    </div>

  </article>
</template>


<script>
export default {
  name: "TEVendingMachineCard"
};
</script>