<!-- Jolt Card Component -->
<template>
    <component class="card mb-3" style="max-width: 45vw;">
        <article class="row g-0">

            <!-- Screenshot Carousel -->
            <section class="carousel-container col-md-4">
                <div id="carouselSlidesOnly" class="carousel-main slide mt-4" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/1-jolt-login.png" class="d-block w-100" alt="Jolt App Screenshot 1">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/2-jolt-home.png" class="d-block w-100" alt="Jolt App Screenshot 2">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/3-jolt-locator.png" class="d-block w-100" alt="Jolt App Screenshot 3">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/4-jolt-locator-search.png" class="d-block w-100" alt="Jolt App Screenshot 4">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/5-jolt-shop.png" class="d-block w-100" alt="Jolt App Screenshot 5">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/6-jolt-articles.png" class="d-block w-100" alt="Jolt App Screenshot 6">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/7-jolt-about.png" class="d-block w-100" alt="Jolt App Screenshot 7">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/8-jolt-about-select.png" class="d-block w-100" alt="Jolt App Screenshot 8">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/9-jolt-profile.png" class="d-block w-100" alt="Jolt App Screenshot 9">
                        </div>
                    </div>
                </div>
                <button @click="openCarouselModalJolt" class="btn mt-2 lead" title="View Carousel in Full Screen">View in Full Screen</button>
            </section>

            <!-- Card Body -->
            <section class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title ml-5">
                        <a href="https://github.com/CraftyCurtis05/jolt-coffee-shop-locator" target="_blank" title="Visit My Code on Github">
                            "Jolt" Coffee Shop Locator App
                        </a>
                    </h5>
                    <hr>
                    <p class="card-text lead"><b>Tech Stack:</b> Vue.js, Spring Boot, PostgreSQL, Yelp API, Axios</p>
                    <p class="card-text lead">
                        Jolt helps users locate nearby coffee shops by integrating with the Yelp API. With user profiles, favorites, and personalized experiences, Jolt makes coffee shop discovery easy.
                    </p>
                    <ul class="lead">
                        <li>User Authentication & Profile Management</li>
                        <li>Real-time Coffee Shop Locator with Yelp API</li>
                        <li>Save Favorites and Update Profile</li>
                        <li>Upload and Update Profile Picture</li>
                        <li>Personalized Search Using Profile Details</li>
                    </ul>
                    <p class="card-text text-muted lead"><em>Originally created as a Tech Elevator capstone project, redesigned with enhanced features.</em></p>
                </div>
            </section>

        </article>
    </component>    
  
    <!-- Modal -->
    <modal class="modal fade" id="carouselModalJolt" tabindex="-1" aria-labelledby="carouselModalJoltLabel" aria-hidden="true">
        <article class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <section class="modal-header">
                    <h4 class="modal-title lead" id="carouselModalJoltLabel"><b>"Jolt" Screenshots</b></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>

                <!-- Modal Carousel Body -->
                <section class="modal-body">
                    <div id="carouselSlidesOnlyJoltModal" class="carousel slide" data-bs-ride="carousel">

                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        </div>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/1-jolt-login.png" class="d-block w-100" alt="Jolt App Screenshot 1">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/2-jolt-home.png" class="d-block w-100" alt="Jolt App Screenshot 2">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/3-jolt-locator.png" class="d-block w-100" alt="Jolt App Screenshot 3">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/4-jolt-locator-search.png" class="d-block w-100" alt="Jolt App Screenshot 4">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/5-jolt-shop.png" class="d-block w-100" alt="Jolt App Screenshot 5">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/6-jolt-articles.png" class="d-block w-100" alt="Jolt App Screenshot 6">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/7-jolt-about.png" class="d-block w-100" alt="Jolt App Screenshot 7">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/8-jolt-about-select.png" class="d-block w-100" alt="Jolt App Screenshot 8">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/jolt-coffee-shop-locator-app/9-jolt-profile.png" class="d-block w-100" alt="Jolt App Screenshot 9">
                            </div>
                        </div>

                        <!-- Modal Carousel Controls -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselSlidesOnlyJoltModal" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>
                </section>
            </div>
        </article>
    </modal>
</template>
  
<script>
export default {
    name: "JoltCard",
    methods: {
        openCarouselModalJolt() {
            // Use Bootstrap's modal functionality to show the modal
            const modal = new window.bootstrap.Modal(document.getElementById('carouselModalJolt'));
            modal.show();
        }
    }
}
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
    transition: transform 0.3s ease;
}

h5:hover {
    transform: scale(1.05);
    cursor: pointer;
}

/* Base Styling for the Button */
.btn {
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: .1vw solid #7c7c8a;
  border-radius: 1vw;
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

.modal-body {
    background-color: #dadae2;
    padding: 3rem 4rem;
    margin: auto;
}

.modal-dialog {
    max-width: 80vw;
}

.carousel-indicators,
.carousel-control-next-icon,
.carousel-control-prev-icon {
    filter: invert(100%); /* Ensure the icons are visible */
    margin: auto;
}

.carousel-indicators {
    position: absolute;
    top: 103%; /* Align vertically centered */
    transform: translateY(-50%); /* Ensure it is exactly centered vertically */
}

/* Position the carousel control buttons */
.carousel-control-prev,
.carousel-control-next {
    position: absolute;
    top: 50%; /* Align vertically centered */
    transform: translateY(-50%); /* Ensure it is exactly centered vertically */
    z-index: 3000;  /* Ensure buttons are above other elements */
}

/* Move the "previous" button to the left */
.carousel-control-prev {
    left: -7.5vw; /* Adjust this value to push further towards the left */
}

/* Move the "next" button to the right */
.carousel-control-next {
    right: -7.5vw; /* Adjust this value to push further towards the right */
}
</style>