<template>
    <article class="card mb-3" style="max-width: 45vw;">
        <div class="row g-0">
            <section class="carousel-container col-md-4">
                <!-- Image Carousel -->
                <div id="carouselSlidesOnly" class="carousel-main slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/1-best-buds-login.png" class="d-block w-100" alt="Best Buds App Screenshot 1">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/2-best-buds-home-top.png" class="d-block w-100" alt="Best Buds App Screenshot 2">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/3-best-buds-home-bottom.png" class="d-block w-100" alt="Best Buds App Screenshot 3">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/4-best-buds-search.png" class="d-block w-100" alt="Best Buds App Screenshot 4">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/5-best-buds-shop.png" class="d-block w-100" alt="Best Buds App Screenshot 5">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/6-best-buds-tips-tricks-top.png" class="d-block w-100" alt="Best Buds App Screenshot 6">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/7-best-buds-tips-tricks-middle.png" class="d-block w-100" alt="Best Buds App Screenshot 7">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/8-best-buds-articles.png" class="d-block w-100" alt="Best Buds App Screenshot 8">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/9-best-buds-news.png" class="d-block w-100" alt="Best Buds App Screenshot 9">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/10-best-buds-about.png" class="d-block w-100" alt="Best Buds App Screenshot 10">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/11-best-buds-contact.png" class="d-block w-100" alt="Best Buds App Screenshot 11">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/12-best-buds-profile.png" class="d-block w-100" alt="Best Buds App Screenshot 12">
                        </div>
                    </div>
                </div>
                <button @click="openCarouselModalBestBuds" class="btn">View in Full Screen</button>
            </section>

            <section class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title"><a href="https://github.com/CraftyCurtis05/best-buds-dispensary-locator" target="_blank">"Best Buds" Dispensary Locator App</a></h5>
                    <p class="card-text"><strong>Tech Stack:</strong> Vue.js, Spring Boot, PostgreSQL, Yelp API, Google Maps API, TheNews API, Axios</p>
                    <p class="card-text">
                        Best Buds helps users find nearby dispensaries, learn about cannabis, and access important information about product choices, legality, and safety.
                    </p>
                    <ul>
                        <li>User Authentication & Profile Management</li>
                        <li>Locator with Google Maps for nearby dispensaries</li>
                        <li>State Law SVG map for cannabis legality</li>
                        <li>Tips & Tricks, News, and Articles on Cannabis</li>
                        <li>Contact form for user inquiries (Email.js)</li>
                    </ul>
                    <p class="card-text"><small class="text-muted">Originally designed to provide a comprehensive cannabis resource, now continuously enhanced with new features.</small></p>
                </div>
            </section>
        </div>
    </article>
    
    <!-- Modal -->
    <div class="modal fade" id="carouselModalBestBuds" tabindex="-1" aria-labelledby="carouselModalBestBudsLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="carouselModalBestBudsLabel">"Best Buds" Screenshots"</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Modal Carousel -->
                    <div id="carouselSlidesOnlyBestBudsModal" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="8" aria-label="Slide 9"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="9" aria-label="Slide 10"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="10" aria-label="Slide 11"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="11" aria-label="Slide 12"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/1-best-buds-login.png" class="d-block w-100" alt="Best Buds App Screenshot 1">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/2-best-buds-home-top.png" class="d-block w-100" alt="Best Buds App Screenshot 2">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/3-best-buds-home-bottom.png" class="d-block w-100" alt="Best Buds App Screenshot 3">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/4-best-buds-search.png" class="d-block w-100" alt="Best Buds App Screenshot 4">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/5-best-buds-shop.png" class="d-block w-100" alt="Best Buds App Screenshot 5">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/6-best-buds-tips-tricks-top.png" class="d-block w-100" alt="Best Buds App Screenshot 6">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/7-best-buds-tips-tricks-middle.png" class="d-block w-100" alt="Best Buds App Screenshot 7">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/8-best-buds-articles.png" class="d-block w-100" alt="Best Buds App Screenshot 8">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/9-best-buds-news.png" class="d-block w-100" alt="Best Buds App Screenshot 9">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/10-best-buds-about.png" class="d-block w-100" alt="Best Buds App Screenshot 10">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/11-best-buds-contact.png" class="d-block w-100" alt="Best Buds App Screenshot 11">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/12-best-buds-profile.png" class="d-block w-100" alt="Best Buds App Screenshot 12">
                            </div>
                        </div>

                        <!-- Carousel Controls -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: "BestBudsCard",
    methods: {
        openCarouselModalBestBuds() {
            // Use Bootstrap's modal functionality to show the modal
            const modal = new window.bootstrap.Modal(document.getElementById('carouselModalBestBuds'));
            modal.show();
        }
    }
}
</script>

<style scoped>
h5,
a {
    color: black;
    transition: transform 0.1s ease;
}

h5:hover, 
a:hover {
    cursor: pointer;
    transform: scale(1.02);
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