<template>
  <article class="card mb-3" style="max-width: 45vw;">
    <div class="row g-0">
      <section class="carousel-container col-md-4">
        <!-- Image Carousel -->
        <div id="carouselSlidesOnly" class="carousel-main slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/projects/design-examples/inventory-mgmt-dashboard-design.png" class="d-block w-100" alt="Inventory Management Dashboard Wireframe">
            </div>
          </div>
        </div>
        <button @click="openCarouselModalInventory" class="btn btn-primary">View in Full Screen</button>
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
          <div id="carouselSlidesOnlyInventoryModal" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselSlidesOnlyInventoryModal" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            </div>
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
h5 {
    color: black;
}

.carousel-container  {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dadae2;
    padding: .2rem;
}

.carousel-main {
    margin-top: 1vw;
    border: 2px black solid;
}

.btn {
    width: 10vw;
    font-size: .9rem;
    color: #858585;
    background-color: #dadae2;
    border: 1px #b9b8b8 solid;
    margin-top: .5vw;
    transition: transform 0.3s ease-in;
}

.btn:hover {
    font-weight: 500;
    color: #696969;
    background-image: radial-gradient(circle, #b9b9d7, #dadae2);
    background-size: 300% 300%; /* Makes the gradient larger than the element */
    animation: gradient-animation 3s ease infinite; /* Applies the animation */
    border: 1px #b9b9d7 solid;
    margin-top: .5vw;
    transform: scale(1.05);
}

/* Define the animation */
@keyframes gradient-animation {
    0% {
        background-position: 0% 50%; /* Start position */
    }
    50% {
        background-position: 100% 50%; /* End position */
    }
    100% {
        background-position: 0% 50%; /* Back to start */
    }
}

.modal-body {
    background-color: #dadae2;
    padding: 3rem 4rem;
    margin: auto;
}

.modal-dialog {
    max-width: 80vw;
}

.carousel-indicators {
    filter: invert(100%); /* Ensure the icons are visible */
    margin: auto;
}

.carousel-indicators {
    position: absolute;
    top: 103%; /* Align vertically centered */
    transform: translateY(-50%); /* Ensure it is exactly centered vertically */
}
</style>