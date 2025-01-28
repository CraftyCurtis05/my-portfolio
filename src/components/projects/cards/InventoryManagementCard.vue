<template>
  <article class="card mb-3" style="max-width: 45vw;">
    <div class="row g-0">
      <section class="col-md-4">
        <!-- Image Carousel -->
        <div id="carouselSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/projects/design-examples/inventory-mgmt-dashboard-design.png" class="d-block w-100" alt="Inventory Management Dashboard Wireframe">
            </div>
          </div>
        </div>
        <button @click="openCarouselModalInventory" class="btn btn-primary">View Carousel in Full Screen</button>
      </section>
  
      <section class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Inventory Management Application</h5>
          <p class="card-text"><strong>Tech Stack:</strong> Vue.js, Spring Boot, PostgreSQL, Shippo API, Docker, Axios</p>
          <p class="card-text">
            Our inventory management application is designed to streamline the processes of storing, tracking, and shipping inventory items, with a focus on optimizing operational workflows for warehouses and inventory companies.
          </p>
          <ul>
            <li>Dashboard Wireframe Completed</li>
            <li>Database Design for Inventory Tracking</li>
            <li>Integrated Shippo API for Shipping Logistics</li>
            <li>Flow design for Inventory Processing, Storage, and Shipping</li>
            <li>Research into Inventory Operations and Best Practices</li>
          </ul>
          <p class="card-text"><small class="text-muted">Currently in early design with plans for full-scale implementation of the backend and additional features in the coming months.</small></p>
        </div>
      </section>
    </div>
  </article>
  
  <!-- Modal -->
  <div class="modal fade" id="carouselModalInventory" tabindex="-1" aria-labelledby="carouselModalInventoryLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="carouselModalInventoryLabel">Image Carousel</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Modal Carousel -->
          <div id="carouselSlidesOnlyModal" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/projects/design-examples/inventory-mgmt-dashboard-design.png" class="d-block w-100" alt="Inventory Management Dashboard Wireframe">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "InventoryManagementCard",
  methods: {
    openCarouselModalInventory() {
      // Use Bootstrap's modal functionality to show the modal
      const modal = new window.bootstrap.Modal(document.getElementById('carouselModalInventory'));
      modal.show();
    }
  } 
}
</script>
  
<style scoped>
/* Ensure modal content doesn't overlap the close button */
.modal .modal-dialog {
  z-index: 1500 !important;
}

.modal .modal-header .btn-close {
  position: relative;
  z-index: 2000; /* Ensure the close button is always on top */
}

/* Adjust carousel styling in the modal if needed */
.modal .carousel-inner {
    z-index: 1000; /* Lower z-index to ensure it's below the close button */
}
</style>