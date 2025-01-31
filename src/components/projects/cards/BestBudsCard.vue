<!-- Best Buds Card Component -->
<template>
    <aside class="card mb-3" style="max-width: 45vw;">
        <article class="row g-0">

            <!-- Screenshot Carousel -->
            <section class="carousel-container col-md-4">
                <div id="carouselSlidesOnly" class="carousel-main slide mt-4" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/01-best-buds-register.png" class="d-block w-100" alt="Best Buds App Screenshot 1">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/02-best-buds-login.png" class="d-block w-100" alt="Best Buds App Screenshot 2">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/03-best-buds-home.png" class="d-block w-100" alt="Best Buds App Screenshot 3">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/04-best-buds-profile.png" class="d-block w-100" alt="Best Buds App Screenshot 4">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/05-best-buds-locator.png" class="d-block w-100" alt="Best Buds App Screenshot 5">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/06-best-buds-shop.png" class="d-block w-100" alt="Best Buds App Screenshot 6">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/07-best-buds-tips-tricks.png" class="d-block w-100" alt="Best Buds App Screenshot 7">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/08-best-buds-products.png" class="d-block w-100" alt="Best Buds App Screenshot 8">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/09-best-buds-strain-guide.png" class="d-block w-100" alt="Best Buds App Screenshot 9">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/10-best-buds-safety-tips.png" class="d-block w-100" alt="Best Buds App Screenshot 10">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/11-best-buds-too-much.png" class="d-block w-100" alt="Best Buds App Screenshot 11">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/12-best-buds-legality.png" class="d-block w-100" alt="Best Buds App Screenshot 12">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/13-best-buds-questions.png" class="d-block w-100" alt="Best Buds App Screenshot 13">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/14-best-buds-articles.png" class="d-block w-100" alt="Best Buds App Screenshot 14">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/15-best-buds-news.png" class="d-block w-100" alt="Best Buds App Screenshot 15">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/16-best-buds-about.png" class="d-block w-100" alt="Best Buds App Screenshot 16">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/17-best-buds-privacy.png" class="d-block w-100" alt="Best Buds App Screenshot 17">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-screenshots/18-best-buds-contact.png" class="d-block w-100" alt="Best Buds App Screenshot 18">
                        </div>
                    </div>
                </div>
                <button @click="openCarouselModalBestBuds" class="btn mt-2 lead" title="View Carousel in Full Screen">View in Full Screen</button>
            </section>

            <!-- Card Body -->
            <section class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title ml-5">
                        <a href="https://github.com/CraftyCurtis05/best-buds-dispensary-locator" target="_blank" title="Visit My Code on Github">
                            "Best Buds" Dispensary Locator App
                        </a>
                    </h5>
                    <p class="card-text lead"><b>Tech Stack:</b> Vue.js, Spring Boot, PostgreSQL, Yelp API, Google Maps API, TheNews API, Axios</p>
                    <p class="card-text lead">
                        Best Buds helps users find nearby dispensaries, learn about cannabis, and access important information about product choices, legality, and safety.
                    </p>
                    <ul class="lead">
                        <li>User Authentication & Profile Management</li>
                        <li>Locator Search with Google Map & Yelp API</li>
                        <li>Interactive State Legality SVG Map</li>
                        <li>Tips & Tricks, News & Articles Information</li>
                        <li>Contact Form using EmailJS</li>
                    </ul>
                    <p class="card-text text-muted lead"><em>Originally designed to provide a comprehensive cannabis resource, now continuously enhanced with new features.</em></p>
                </div>
            </section>

        </article>
    </aside>
    
    <!-- Modal -->
    <aside class="modal fade" id="carouselModalBestBuds" tabindex="-1" aria-labelledby="carouselModalBestBudsLabel" aria-hidden="true">
        <article class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <section class="modal-header">
                    <h4 class="modal-title lead" id="carouselModalBestBudsLabel">
                        <b class="lead">{{ currentSlideTitle }}</b>
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>

                <!-- Modal Carousel Body -->
                <section class="modal-body">
                    <div id="carouselSlidesOnlyBestBudsModal" class="carousel slide" data-bs-ride="carousel" @slide.bs.carousel="updateCurrentSlide">
                        
                        <div class="carousel-indicators" id="indicators">
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
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="12" aria-label="Slide 13"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="13" aria-label="Slide 14"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="14" aria-label="Slide 15"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="15" aria-label="Slide 16"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="16" aria-label="Slide 17"></button>
                            <button type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide-to="17" aria-label="Slide 18"></button>
                        </div>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/01-best-buds-register.png" class="d-block w-100" alt="Best Buds App Screenshot 1">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/02-best-buds-login.png" class="d-block w-100" alt="Best Buds App Screenshot 2">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/03-best-buds-home.png" class="d-block w-100" alt="Best Buds App Screenshot 3">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/04-best-buds-profile.png" class="d-block w-100" alt="Best Buds App Screenshot 4">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/05-best-buds-locator.png" class="d-block w-100" alt="Best Buds App Screenshot 5">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/06-best-buds-shop.png" class="d-block w-100" alt="Best Buds App Screenshot 6">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/07-best-buds-tips-tricks.png" class="d-block w-100" alt="Best Buds App Screenshot 7">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/08-best-buds-products.png" class="d-block w-100" alt="Best Buds App Screenshot 8">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/09-best-buds-strain-guide.png" class="d-block w-100" alt="Best Buds App Screenshot 9">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/10-best-buds-safety-tips.png" class="d-block w-100" alt="Best Buds App Screenshot 10">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/11-best-buds-too-much.png" class="d-block w-100" alt="Best Buds App Screenshot 11">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/12-best-buds-legality.png" class="d-block w-100" alt="Best Buds App Screenshot 12">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/13-best-buds-questions.png" class="d-block w-100" alt="Best Buds App Screenshot 13">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/14-best-buds-articles.png" class="d-block w-100" alt="Best Buds App Screenshot 14">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/15-best-buds-news.png" class="d-block w-100" alt="Best Buds App Screenshot 15">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/16-best-buds-about.png" class="d-block w-100" alt="Best Buds App Screenshot 16">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/17-best-buds-privacy.png" class="d-block w-100" alt="Best Buds App Screenshot 17">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/projects/project-examples/best-buds-screenshots/18-best-buds-contact.png" class="d-block w-100" alt="Best Buds App Screenshot 18">
                            </div>
                        </div>

                        <!-- Modal Carousel Controls -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselSlidesOnlyBestBudsModal" data-bs-slide="next">
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
    name: "BestBudsCard",
    data() {
        return {
            // Slide descriptions
            slideTitles: [
                "Register page to create a new Best Buds account by entering your username and password. (Under Development)",
                "Login page for accessing your Best Buds account using your registered username and password. (Under Development)",
                "Home screen overview of the Best Buds app with a spotlight feature on a top-rated dispensary. (Under Development)",
                "User profile page where you can view and update your personal details and favorite dispensaries. (Under Development)",
                "Find nearby dispensaries using our locator tool by entering your location for quick results and a map. (Under Development)",
                "Shop page to explore a variety of cannabis products, including strains, edibles, and accessories. (Under Development)",
                "Tips & Tricks page offering cannabis advice for both beginners and seasoned users. (Under Development)",
                "Strain guide page to help you explore cannabis products and find the right one for your needs. (Under Development)",
                "Explore our strain and terpene guide to discover the perfect cannabis match for your mood and preferences. (Under Development)",
                "Safety tips page providing essential information on cannabis consumption, smoking, and topicals. (Under Development)",
                "Learn how to identify symptoms of cannabis overconsumption and how to manage the experience. (Under Development)",
                "Explore cannabis legality across U.S. states with an interactive map detailing state laws and regulations. (Under Development)",
                "Comprehensive Q&A section answering all your cannabis-related questions, from dispensaries to consumption methods. (Under Development)",
                "Cannabis Resource Center offering informative articles on strains, trends, and all things cannabis-related. (Under Development)",
                "Stay up-to-date with the latest cannabis news, trends, and cultural shifts from around the world. (Under Development)",
                "At Best Buds, we guide you through the world of cannabis, promoting informed choices and responsible use. (Under Development)",
                "Our Privacy Policy outlines how we collect, use, and protect your data to ensure a secure and transparent experience. (Under Development)",
                "Reach out to us through our contact form for any questions or feedback, and we’ll get back to you shortly. (Under Development)"
            ],
            currentSlideIndex: 0,  // Keep track of the current slide
        };
    },
    computed: {
        // Computed property to get the current slide title
        currentSlideTitle() {
            return this.slideTitles[this.currentSlideIndex];
        }
    },    
    methods: {
        openCarouselModalBestBuds() {
            // Use Bootstrap's modal functionality to show the modal
            const modal = new window.bootstrap.Modal(document.getElementById('carouselModalBestBuds'));
            modal.show();
        },
        // Method to update the current slide index on slide change
        updateCurrentSlide(event) {
            this.currentSlideIndex = event.to;
        }
    },
    mounted() {
        // Attach the slide event listener to the carousel after the component is mounted
        const carouselElement = document.getElementById('carouselSlidesOnlyBestBudsModal');
        carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);
    },
    beforeDestroy() {
        // Clean up the event listener before the component is destroyed
        const carouselElement = document.getElementById('carouselSlidesOnlyBestBudsModal');
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

#indicators {
    position: absolute;
    top: 80vh;
}

#indicators button {
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