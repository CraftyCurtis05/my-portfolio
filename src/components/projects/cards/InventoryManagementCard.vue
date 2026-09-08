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
            inventory. I started by researching warehouse operations and mapping
            the business processes the system would need to support, then used
            those requirements to plan the application workflow, database
            structure, RESTful API architecture and user interface.
          </p>


          <ul>
            <li>
              Researched warehouse operations and order fulfillment processes to
              identify system requirements
            </li>

            <li>
              Mapped workflows for system configuration, inventory movement,
              order fulfillment and returns
            </li>

            <li>
              Designed the database schema around master data, inventory
              transactions, warehouse operations and system administration
            </li>

            <li>
              Planned the RESTful API hierarchy for inventory, orders, users,
              reporting and supporting system resources
            </li>

            <li>
              Created dashboard wireframes and component plans around the
              operational workflows
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
          image: "01-wireframe.webp",
          alt:
            "Warehouse inventory management dashboard wireframe with navigation, pending tasks, analytics and inbound shipment tracking",
          title:
            "Dashboard Wireframe — Initial interface design combining task management, inventory analytics and inbound shipment tracking into a centralized warehouse dashboard."
        },
        {
          id: 2,
          image: "02-research.webp",
          alt:
            "Business process research for warehouse operations and order fulfillment",
          title:
            "Business Process Research — Documented the operational steps behind purchasing, receiving, inventory tracking, order fulfillment and shipping to establish the system requirements."
        },
        {
          id: 3,
          image: "03-operations.webp",
          alt:
            "Warehouse operations workflow showing receiving, inventory storage, order fulfillment, shipping and returns",
          title:
            "Warehouse Operations Workflow — Mapped inventory movement from receiving and quality checks through storage, picking, packing, shipping and returns."
        },
        {
          id: 4,
          image: "04-workflow.webp",
          alt:
            "System configuration and business workflow for the warehouse inventory management system",
          title:
            "System Workflow Design — Planned the initial system configuration from account and warehouse setup through products, vendors, customers, shipping integrations and employee access."
        },
        {
          id: 5,
          image: "05-schema.webp",
          alt:
            "Database schema for the warehouse inventory management system",
          title:
            "Database Schema Design — Structured the planned data model around master data, inventory transactions, warehouse operations, user administration, reporting and system activity."
        },
        {
          id: 6,
          image: "06-api-endpoint.webp",
          alt:
            "RESTful API endpoint hierarchy for the warehouse inventory management system",
          title:
            "RESTful API Architecture — Organized planned endpoints by authentication, master data, inventory, order fulfillment, user administration, reporting and issue management."
        },
        {
          id: 7,
          image: "07-components.webp",
          alt:
            "Inventory management dashboard component planning and interface relationships",
          title:
            "Interface Component Planning — Broke the dashboard design into reusable navigation, task, analytics and inventory components while mapping their relationships within the interface."
        }
      ]
    };
  }
};
</script>