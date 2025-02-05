<!-- Inventory Management Card Component -->
<template>
  <aside class="card mb-3" style="max-width: 45vw; min-height: 68vh;">
    <article class="row g-0">

      <!-- Screenshot Carousel -->
      <section class="carousel-container col-md-4 d-flex flex-column align-items-center">
        <div class="carousel-main slide mt-5" data-bs-ride="carousel">
          <div class="carousel-inner position-relative">
            <div
              v-for="(screenshot, index) in screenshots"
              :key="screenshot.id"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <img
                :src="(`/projects/design-examples/${screenshot.image}`)"
                :alt="screenshot.alt"
              >
            </div>
          </div>
        </div>
        <button
          @click="openCarouselModalInventory"
          class="btn mt-2 lead"
          title="View Carousel in Full Screen"
        >View in Full Screen</button>
      </section>
  
      <!-- Card Body -->
      <section class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-center">
            Inventory Management Application
          </h5>
          <hr>
          <p class="card-text lead">
            <b>Tech Stack:</b> Vue.js, Spring Boot, PostgreSQL, Shippo API, Docker, Axios
          </p>
          <p class="card-text lead">
            Our inventory management application streamlines storing, tracking and shipping inventory items, with a focus on optimizing operational workflows for warehouses and inventory companies.
          </p>
          <ul class="lead">
            <li>Dashboard Wireframe Completed</li>
            <li>Database Design for Inventory Tracking</li>
            <li>Integrated Shippo API for Shipping Logistics</li>
            <li>Inventory Management Flow Design</li>
            <li>Inventory Operations & Best Practices Research</li>
          </ul>
          <p class="card-text text-muted lead">
            <em>In early design, with plans for backend implementation and features in the coming months.</em>
          </p>
        </div>
      </section>

    </article>
  </aside>

  <!-- Modal for Full Screen Carousel -->
  <aside
    class="modal fade"
    id="carouselModalInventory"
    tabindex="-1"
    aria-labelledby="carouselModalInventoryLabel"
  >
    <article class="modal-dialog modal-lg m-auto">
      <div class="modal-content">

        <!-- Modal Header -->
        <section class="modal-header">
          <h4 class="modal-title lead" id="carouselModalInventoryLabel">
            <b class="lead">{{ currentTitle }}</b>
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </section>

        <!-- Modal Carousel Body -->
        <section class="modal-body">
          <div
            id="carouselSlidesOnlyInventoryModal"
            class="carousel slide"
            data-bs-ride="carousel"
            @slide.bs.carousel="updateCurrentSlide"
          >
            <!-- Indicators -->
            <div class="carousel-indicators position-absolute m-auto">
              <button
                v-for="(screenshot, index) in screenshots"
                :key="screenshot.id"
                type="button"
                data-bs-target="#carouselSlidesOnlyInventoryModal"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                aria-label="Slide {{ index + 1 }}"
              ></button>
            </div>

            <!-- Carousel Items -->
            <div class="carousel-inner position-relative">
              <div
                v-for="(screenshot, index) in screenshots"
                :key="screenshot.id"
                :class="['carousel-item', { active: index === 0 }]"
              >
                <img
                  :src="(`/projects/design-examples/${screenshot.image}`)"
                  :alt="screenshot.alt"
                >
              </div>
            </div>

            <!-- Modal Carousel Controls -->
            <!-- <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselSlidesOnlyInventoryModal"
                    data-bs-slide="prev"
                  >
                    <span class="carousel-control-prev-icon"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselSlidesOnlyInventoryModal"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    <span class="visually-hidden">Next</span>
                  </button> -->

          </div>
        </section>
      </div>
    </article>
  </aside>
</template>

<script>
export default {
  name: "InventoryManagementCard",
  data() {
    return {
      currentTitle: '',
      screenshots: [
        {
          id: 1,
          image: "inventory-mgmt-dashboard-design.png",
          alt: "Inventory Management Dashboard Wireframe",
          title: "Wireframe design showcasing the layout and key features of an inventory management application, including item tracking, stock levels and user navigation."
        }
      ]
    };
  }, 
  methods: {
    // Open modal and set current title based on the slide
    openCarouselModalInventory() {
      this.currentTitle = this.screenshots[0].title;
      const modal = new window.bootstrap.Modal(document.getElementById('carouselModalInventory'));
      modal.show();
    },
    // Method to update the current slide index on slide change
    updateCurrentSlide(event) {
      const currentSlideIndex = event.to;
      this.currentTitle = this.screenshots[currentSlideIndex].title;
    },
    // Reset modal and carousel when modal is closed
    resetModal() {
      // Reset the title to the first slide
      this.currentTitle = this.screenshots[0].title;

      // Reset the carousel to the first slide using Bootstrap's carousel API
      const carouselElement = document.getElementById('carouselSlidesOnlyInventoryModal');
      const carousel = new bootstrap.Carousel(carouselElement);
      carousel.to(0); // Navigate to the first slide (index 0)
    }
  },
  mounted() {
    // Attach the slide event listener to the carousel after the component is mounted
    const carouselElement = document.getElementById('carouselSlidesOnlyInventoryModal');
    carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);

    // Add event listener for modal close
    const modalElement = document.getElementById('carouselModalInventory');
    modalElement.addEventListener('hidden.bs.modal', this.resetModal);
  },
  beforeUnmout() {
    // Clean up the event listener before the component is destroyed
    const carouselElement = document.getElementById('carouselSlidesOnlyInventoryModal');
    carouselElement.removeEventListener('slide.bs.carousel', this.updateCurrentSlide);

    const modalElement = document.getElementById('carouselModalInventory');
    modalElement.removeEventListener('hidden.bs.modal', this.resetModal);
  }
};
</script>

<style scoped>
.carousel-container  {
  background-color: #dadae2;
}

.carousel-main {
  border: 1px black solid;
}

.carousel-inner {
  width: 100%;
}

.carousel-item img {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.carousel-container .btn {
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: 1px solid #7c7c8a;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.carousel-container .btn:hover {
  font-size: 1.03rem;
  font-weight: 500;
  color: white;
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454); /* Subtle gradient background */
  background-size: 500% 500%;
  border: 1px solid #cccce4;
  transform: translateY(-1px); /* Adds 3D effect */
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2); /* Stronger shadow effect */
  animation: gradient-animation 5s ease infinite;
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

h5,
h5 a {
  color: black;
  text-decoration: none;
  transition: transform 0.3s ease;
}

/* h5:hover {
  transform: scale(1.05);
} */

/* Modal styling */
.modal-dialog {
  max-width: 90vw;
  height: auto;
}

.modal-body {
  height: 90vh;
  background-color: #dadae2;
}

.carousel-indicators,
.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: invert(50%);
}

.carousel-indicators {
  top: 80vh;
}

.carousel-indicators button {
  height: .2rem;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
  height: 90vh;
  top: -.2vh;
  transform: translateY(-15px); /* Adds 3D effect */
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3000;
  object-fit: contain;
}

.carousel-control-prev {
  left: -1rem;
}

.carousel-control-next {
  right: -1rem;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454);
  background-size: 250% 250%;
  border: 1px solid #cccce4;
  border-radius: .2rem;
  opacity: .7;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.15);
  animation: gradient-animation 3s ease infinite;
}

/* Extra Small (Mobile) */
@media (max-width: 480px) {
  /* Styles for phones in portrait mode */
}

/* Small (Mobile) */
@media (max-width: 600px) {
  /* Styles for phones in landscape mode */
}

/* Medium (Tablet) */
@media (max-width: 768px) {
  /* Styles for tablets in portrait mode */
}

/* Large (Tablet, Small Laptops) */
@media (max-width: 1024px) {
  /* Styles for small laptops and tablets in landscape mode */
}

/* Extra Large (Laptops, Desktops) */
@media (min-width: 1025px) {
  /* Styles for laptops and desktop screens */
}

/* Ultra Large (Wider Desktop Screens) */
@media (min-width: 1440px) {
  /* Styles for large desktop displays */
}
</style>