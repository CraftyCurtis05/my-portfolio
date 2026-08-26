<!-- Inventory Management Card Component -->
<template>
  <article class="project-card">
    <div class="project-card-layout">

      <!-- Design Preview -->
      <section class="carousel-container">

        <div class="carousel-main">
          <div class="carousel-inner">

            <div
              v-for="(screenshot, index) in screenshots"
              :key="screenshot.id"
              :class="[
                'carousel-item',
                { active: index === 0 }
              ]"
            >
              <img
                :src="`${imagePath}${screenshot.image}`"
                :alt="screenshot.alt"
                loading="lazy"
                decoding="async"
              >
            </div>

          </div>
        </div>


        <!-- Full Screen Preview -->
        <button
          class="site-button project-preview-button"
          type="button"
          title="View Inventory Management designs in full screen"
          data-bs-toggle="modal"
          data-bs-target="#carouselModalInventory"
        >
          View in Full Screen
        </button>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            Inventory Management System
          </h2>


          <hr>


          <p class="card-text">
            <strong>Planned Tech Stack:</strong>
            Vue.js, Spring Boot, PostgreSQL, Shippo API, Docker and Axios
          </p>


          <p class="card-text">
            This inventory management system is being designed around the
            workflows involved in receiving, storing, tracking and shipping
            inventory. I started with process research, data planning and
            interface design so the application structure reflects the
            operational needs it is intended to support.
          </p>


          <ul>
            <li>
              Created the initial dashboard wireframe and application layout
            </li>

            <li>
              Researched common inventory workflows and operational needs
            </li>

            <li>
              Planned the database structure for products, inventory levels
              and transaction records
            </li>

            <li>
              Mapped the workflow from receiving inventory through storage,
              tracking and shipment
            </li>

            <li>
              Evaluated Shippo API integration for planned shipping and
              logistics features
            </li>
          </ul>


          <p class="card-text project-note">
            <em>
              Currently in the design and planning stage. The next phase is
              backend implementation and connecting these workflows to
              persistent inventory data.
            </em>
          </p>

        </div>

      </section>

    </div>
  </article>


  <!-- Full Screen Screenshot Modal -->
  <ProjectScreenshotModal
    modal-name="Inventory"
    project-name="Inventory Management System"
    :screenshots="screenshots"
    :image-path="imagePath"
  />
</template>


<script>
import ProjectScreenshotModal from '../ProjectScreenshotModal.vue';

export default {
  name: "InventoryManagementCard",

  components: {
    ProjectScreenshotModal
  },


  data() {
    return {
      imagePath:
        "/assets/images/projects/inventory-mgmt/",

      screenshots: [
        {
          id: 1,
          image: "inventory-mgmt-dashboard-design.webp",
          alt: "Inventory Management System dashboard wireframe",
          title:
            "Initial dashboard wireframe showing inventory tracking, stock levels and navigation for the planned management system."
        }
      ]
    };
  }
};
</script>