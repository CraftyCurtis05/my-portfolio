<!-- TE Vending Machine Card Component -->
<template>
  <aside class="card mb-3" style="max-width: 45vw;">
    <article class="row g-0">
  
      <!-- Screenshot Carousel -->
      <section class="carousel-container col-md-4">
        <div id="carouselSlidesOnly" class="carousel-main slide mt-4" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div 
              v-for="(screenshot, index) in screenshots"
              :key="screenshot.id"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <img 
                class="d-block w-100" 
                :src="(`src/assets/projects/${screenshot.image}`)" 
                :alt="screenshot.alt"
              >
            </div>
          </div>
        </div>
        <!-- <button @click="openCarouselModalTEVendingMachine" class="btn mt-2 lead" title="View Carousel in Full Screen">View in Full Screen</button> -->
      </section>
    
      <!-- Card Body -->
      <section class="col-md-8">
        <div class="card-body">
          <h5 class="card-title ml-5">
            "TE" Vending Machine Application
          </h5>
          <p class="card-text lead"><b>Tech Stack:</b> Java, Object-Oriented Programming, Command-Line Interface</p>
          <p class="card-text lead">
            This backend project simulates a vending machine’s functionality through a simple command-line interface. Users can select products, insert virtual currency, and receive change, while the application manages product inventory and transaction processing.
          </p>
          <ul class="lead">
            <li>Inventory Management</li>
            <li>Transaction Processing</li>
            <li>Error Handling</li>
            <li>Focus on Object-Oriented Design Principles</li>
            <li>Test-Driven Development</li>
          </ul>
          <p class="card-text text-muted lead"><em>A simple backend system, emphasizing core programming and software design practices.</em></p>
        </div>
      </section>
  
    </article>
  </aside>
    
  <!-- Modal for Full Screen Carousel -->
  <aside class="modal fade" id="carouselModalTEVendingMachine" tabindex="-1" aria-labelledby="carouselModalTEVendingMachineLabel" aria-hidden="true">
    <article class="modal-dialog modal-lg">
      <div class="modal-content">
  
        <!-- Modal Header -->
        <section class="modal-header">
          <h4 class="modal-title lead" id="carouselModalTEVendingMachineLabel">
            <b class="lead">{{ currentSlideTitle }}</b>
          </h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </section>
        
        <!-- Modal Carousel -->
        <section class="modal-body">
          <div id="carouselSlidesOnlyTEVendingMachineModal" class="carousel slide" data-bs-ride="carousel" @slide.bs.carousel="updateCurrentSlide">

            <div class="carousel-indicators m-auto">
              <button
                v-for="(screenshot, index) in screenshots"
                :key="screenshot.id"
                type="button"
                data-bs-target="#carouselSlidesOnlyTEVendingMachineModal"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                aria-label="Slide {{ index + 1 }}"
              ></button>
            </div>

            <div class="carousel-inner">
              <div 
                v-for="(screenshot, index) in screenshots"
                :key="screenshot.id"
                :class="['carousel-item', { active: index === 0 }]"
              >
                <img 
                  class="d-block w-100" 
                  :src="(`src/assets/projects/${screenshot.image}`)" 
                  :alt="screenshot.alt"
                >
              </div>
            </div>

            <!-- Modal Carousel Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlidesOnlyTEVendingMachineModal" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselSlidesOnlyTEVendingMachineModal" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>   

          </div>
        </section>
      </div>
    </article>
  </aside>
</template>

    
<script>
export default {
  name: "TEVendingMachineCard",
  data() {
    return {
      screenshots: [
        {
          id: 1,
          image: "default_image.png",
          alt: "No Image Available"
        }
      ],
      slideTitles: [
        "No Image Available"
      ],
      currentSlideIndex: 0 // Keep track of the current slide
    }
  },
  computed: {
      // Computed property to get the current slide title
      currentSlideTitle() {
          return this.slideTitles[this.currentSlideIndex];
      }
  },     
  methods: {
    openCarouselModalTEVendingMachine() {
      // Use Bootstrap's modal functionality to show the modal
      const modal = new window.bootstrap.Modal(document.getElementById('carouselModalTEVendingMachine'));
      modal.show();
    },
    // Method to update the current slide index on slide change
    updateCurrentSlide(event) {
      this.currentSlideIndex = event.to;
    }
  },
  mounted() {
    // Attach the slide event listener to the carousel after the component is mounted
    const carouselElement = document.getElementById('carouselSlidesOnlyTEVendingMachineModal');
    carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);
  },
  beforeDestroy() {
    // Clean up the event listener before the component is destroyed
    const carouselElement = document.getElementById('carouselSlidesOnlyTEVendingMachineModal');
    carouselElement.removeEventListener('slide.bs.carousel', this.updateCurrentSlide);
  }    
};
</script>
    
<style scoped>
.carousel-container  {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dadae2;
}

.carousel-main {
  margin-top: 1vw;
  border: 2px black solid;
}

h5,
h5 a {
  color: black;
  text-decoration: none;
}

/* h5:hover {
  transform: scale(1.05);
  cursor: pointer;
} */

/* Base Styling for the Button */
.btn {
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: .1vw solid #7c7c8a;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.btn:hover {
  font-size: 1.03rem;
  font-weight: 500;
  color: white;
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454); /* Subtle gradient background */
  background-size: 500% 500%;
  border: .1vw solid #cccce4;
  transform: translateY(-1px); /* Adds 3D effect */
  animation: gradient-animation 5s ease infinite;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2); /* Stronger shadow effect */
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

/* Create a subtle glow effect around the button */
.btn::before {
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  border-radius: 2rem;
  transition: opacity 0.4s ease-in-out;
  z-index: -1;
}

.btn:hover::before {
  opacity: 1; /* Glow effect on hover */
}

/* Modal styling */
.modal-dialog {
  max-width: 90vw;
  height: auto;
  margin: 0 auto;
}

.modal-body {
  height: 90vh;
  background-color: #dadae2;
  padding: 1rem 1rem;
}

.carousel-indicators {
  position: absolute;
  top: 80vh;
}

.carousel-indicators button {
  height: .2rem;
}

.carousel-inner {
  position: relative;
  width: 100%;
}

.carousel-item img {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
  height: 90vh;
  transform: translateY(-15px); /* Adds 3D effect */
  background: rgba(0, 0, 0, 0.2);
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
  background: rgba(0, 0, 0, 0.3);
}
</style>