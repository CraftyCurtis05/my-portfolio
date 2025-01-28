<template>
    <article class="card mb-3" style="max-width: 45vw;">
        <div class="row g-0">
            <section class="col-md-4">
                <!-- Image Carousel -->
                <div id="carouselSlidesOnly" class="carousel slide" data-bs-ride="carousel">
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
                <button @click="openCarouselModalJolt" class="btn btn-primary">View Carousel in Full Screen</button>
            </section>
            <section class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">"Jolt" Coffee Shop Locator App</h5>
                    <p class="card-text"><strong>Tech Stack:</strong> Vue.js, Spring Boot, PostgreSQL, Yelp API, Axios</p>
                    <p class="card-text">
                        Jolt helps users locate nearby coffee shops by integrating with the Yelp API. With user profiles, favorites, and personalized experiences, Jolt makes coffee shop discovery easy.
                    </p>
                    <ul>
                        <li>User Authentication & Profile Management</li>
                        <li>Real-time Coffee Shop Locator with Yelp API</li>
                        <li>Save Favorites and Update Profile</li>
                        <li>Upload and Update Profile Picture</li>
                        <li>Personalized Search Using Profile Details</li>
                    </ul>
                    <p class="card-text"><small class="text-muted">Originally created as a Tech Elevator capstone project, redesigned with enhanced features.</small></p>
                </div>
            </section>
        </div>
    </article>    
  
    <!-- Modal -->
    <div class="modal fade" id="carouselModalJolt" tabindex="-1" aria-labelledby="carouselModalJoltLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="carouselModalJoltLabel">Image Carousel</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Modal Carousel -->
                    <div id="carouselSlidesOnlyModal" class="carousel slide" data-bs-ride="carousel">
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
                </div>
            </div>
        </div>
    </div>
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