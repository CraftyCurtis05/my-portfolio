<!-- TEnmo Card Component -->
<template>
    <aside class="card mb-3" style="max-width: 45vw; min-height: 68vh;">
        <article class="row g-0">

            <!-- Screenshot Carousel -->
            <section class="carousel-container col-md-4 d-flex flex-column align-items-center">
                <div id="carouselSlidesOnly" class="carousel-main slide mt-5" data-bs-ride="carousel">
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
                <!-- <button @click="openCarouselModalTEnmo" class="btn mt-2 lead" title="View Carousel in Full Screen">View in Full Screen</button> -->
            </section>

            <!-- Card Body -->
            <section class="col-md-8">
                <div class="card-body">
                <h5 class="card-title text-center">
                    "TEnmo" P2P Online Payment Service API
                </h5>
                <p class="card-text lead"><b>Tech Stack:</b> Spring Boot, PostgreSQL, RESTful API, JDBC, JWT Authentication</p>
                <p class="card-text lead">
                    Developed a Spring Boot RESTful API for a peer-to-peer payment service, enabling transfers, balance checks, and requests, with PostgreSQL for transaction management.
                </p>
                <ul class="lead">
                    <li>Designed Models & Controllers Schemas</li>
                    <li>Database Creation & Management</li>
                    <li>Used DAO & JDBC DAO</li>
                    <li>User Authentication with JWT</li>
                    <li>Integration Testing using Postman</li>
                </ul>
                <p class="card-text text-muted lead"><em>This project is a peer-to-peer payment solution for managing transactions and transfers securely.</em></p>
                </div>
            </section>

        </article>
    </aside>

    <!-- Modal for Full Screen Carousel -->
    <aside class="modal fade" id="carouselModalTEnmo" tabindex="-1" aria-labelledby="carouselModalTEnmoLabel" aria-hidden="true">
        <article class="modal-dialog modal-lg m-auto">
            <div class="modal-content">

               <!-- Modal Header -->
               <section class="modal-header">
                    <h4 class="modal-title lead" id="carouselModalTEnmoLabel">
                        <b class="lead">{{ currentSlideTitle }}</b>
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>
        
                <!-- Modal Carousel -->
                <section class="modal-body">
                    <div id="carouselSlidesOnlyTEnmoModal" class="carousel slide" data-bs-ride="carousel" @slide.bs.carousel="updateCurrentSlide">

                        <div class="carousel-indicators position-absolute m-auto">
                            <button
                                v-for="(screenshot, index) in screenshots"
                                :key="screenshot.id"
                                type="button"
                                data-bs-target="#carouselSlidesOnlyTEnmoModal"
                                :data-bs-slide-to="index"
                                :class="{ active: index === 0 }"
                                aria-label="Slide {{ index + 1 }}"
                            ></button>
                        </div>

                        <div class="carousel-inner position-relative">
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
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlidesOnlyTEnmoModal" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselSlidesOnlyTEnmoModal" data-bs-slide="next">
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
    name: "TEnmoCard",
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
        openCarouselModalTEnmo() {
            // Use Bootstrap's modal functionality to show the modal
            const modal = new window.bootstrap.Modal(document.getElementById('carouselModalTEnmo'));
            modal.show();
        },
        // Method to update the current slide index on slide change
        updateCurrentSlide(event) {
            this.currentSlideIndex = event.to;
        }
    },
    mounted() {
        // Attach the slide event listener to the carousel after the component is mounted
        const carouselElement = document.getElementById('carouselSlidesOnlyTEnmoModal');
        carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);
    },
    beforeDestroy() {
        // Clean up the event listener before the component is destroyed
        const carouselElement = document.getElementById('carouselSlidesOnlyTEnmoModal');
        carouselElement.removeEventListener('slide.bs.carousel', this.updateCurrentSlide);
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
</style>