<!-- Jolt Card Component -->
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
                                :src="(`src/assets/projects/project-examples/jolt-screenshots/${screenshot.image}`)"
                                :alt="screenshot.alt"
                            >
                        </div>
                    </div>
                </div>
                <button
                    @click="openCarouselModalJolt"
                    class="btn mt-2 lead"
                    title="View Carousel in Full Screen"
                >View in Full Screen</button>
            </section>

            <!-- Card Body -->
            <section class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-center">
                        <a
                            href="https://github.com/CraftyCurtis05/jolt-coffee-shop-locator"
                            target="_blank"
                            title="Visit My Code on Github"
                        >"Jolt" Coffee Shop Locator App</a>
                    </h5>
                    <hr>
                    <p class="card-text lead">
                        <b>Tech Stack:</b> Vue.js, Spring Boot, PostgreSQL, Yelp API, Axios
                    </p>
                    <p class="card-text lead">
                        Jolt helps users locate nearby coffee shops by integrating with the Yelp API. With user profiles, favorites and personalized experiences, Jolt makes coffee shop discovery easy.
                    </p>
                    <ul class="lead">
                        <li>User Authentication & Profile Management</li>
                        <li>Real-time Coffee Shop Locator with Yelp API</li>
                        <li>Save Favorites and Update Profile</li>
                        <li>Upload and Update Profile Picture</li>
                        <li>Personalized Search Using Profile Details</li>
                    </ul>
                    <p class="card-text text-muted lead">
                        <em>Originally created as a Tech Elevator capstone project, redesigned with enhanced features.</em>
                    </p>
                </div>
            </section>

        </article>
    </aside>

    <!-- Modal for Full Screen Carousel -->
    <aside
        class="modal fade"
        id="carouselModalJolt"
        tabindex="-1"
        aria-labelledby="carouselModalJoltLabel"
    >
        <article class="modal-dialog modal-lg m-auto">
            <div class="modal-content">

                <!-- Modal Header -->
                <section class="modal-header">
                    <h4 class="modal-title lead" id="carouselModalJoltLabel">
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
                        id="carouselSlidesOnlyJoltModal"
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
                                data-bs-target="#carouselSlidesOnlyJoltModal"
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
                                    :src="(`src/assets/projects/project-examples/jolt-screenshots/${screenshot.image}`)"
                                    :alt="screenshot.alt"
                                >
                            </div>
                        </div>

                        <!-- Modal Carousel Controls -->
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselSlidesOnlyJoltModal"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselSlidesOnlyJoltModal"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon"></span>
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
    name: "JoltCard",
    data() {
        return {
            currentTitle: '',
            screenshots: [
                {
                    id: 1,
                    image: "01-jolt-register.png",
                    alt: "Jolt App Screenshot 1",
                    title: "Register page for creating a new account on the Jolt app by providing your username and password."
                },
                {
                    id: 2,
                    image: "02-jolt-login.png",
                    alt: "Jolt App Screenshot 2",
                    title: "Login page for accessing your Jolt account by entering your registered username and password."
                },
                {
                    id: 3,
                    image: "03-jolt-home.png",
                    alt: "Jolt App Screenshot 3",
                    title: "Home screen displaying an app description, along with a currated stock image carousel to match design."
                },
                {
                    id: 4,
                    image: "04-jolt-profile-form.png",
                    alt: "Jolt App Screenshot 4",
                    title: "Profile form for entering personal information such as your name, profile picture and preferences to personalize your Jolt experience."
                },
                {
                    id: 5,
                    image: "05-jolt-profile-user.png",
                    alt: "Jolt App Screenshot 5",
                    title: "User profile page where you can view and update your personal details, including your name, email and uploaded profile picture."
                },
                {
                    id: 6,
                    image: "06-jolt-locator.png",
                    alt: "Jolt App Screenshot 6",
                    title: "Locator page showing a search bar for user input and a button to search near the user's saved profile address."
                },
                {
                    id: 7,
                    image: "07-jolt-locator-search.png",
                    alt: "Jolt App Screenshot 7",
                    title: "Search results that display the nearest 20 coffee shops to user's location, with shop details and links to Google directions and Yelp Reviews."
                },
                {
                    id: 8,
                    image: "08-jolt-locator-fav.png",
                    alt: "Jolt App Screenshot 8",
                    title: "Save to favorites where you can save coffee shops to your profile for quick access and future reference."
                },
                {
                    id: 9,
                    image: "09-jolt-profile-favs.png",
                    alt: "Jolt App Screenshot 9",
                    title: "Manage your favorite coffee shops in your profile, including viewing and editing the list of your top picks."
                },
                {
                    id: 10,
                    image: "10-jolt-shop.png",
                    alt: "Jolt App Screenshot 10",
                    title: "Shop for different coffee items, including coffee, coffee equipment, coffee merchandise and coffee-related snacks."
                },
                {
                    id: 11,
                    image: "11-jolt-articles.png",
                    alt: "Jolt App Screenshot 11",
                    title: "Articles page where you can read content related to coffee culture, health advice and user tips for coffee lovers."
                },
                {
                    id: 12,
                    image: "12-jolt-about.png",
                    alt: "Jolt App Screenshot 12",
                    title: "About page describing the development team behind the project, along with descriptions about each and links to their LinkedIn profiles."
                }
            ]
        };
    },
    methods: {
        // Open modal and set current title based on the slide
        openCarouselModalJolt() {
            this.currentTitle = this.screenshots[0].title;
            const modal = new window.bootstrap.Modal(document.getElementById('carouselModalJolt'));
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
            const carouselElement = document.getElementById('carouselSlidesOnlyJoltModal');
            const carousel = new bootstrap.Carousel(carouselElement);
            carousel.to(0); // Navigate to the first slide (index 0)
        }
    },
    mounted() {
        // Attach the slide event listener to the carousel after the component is mounted
        const carouselElement = document.getElementById('carouselSlidesOnlyJoltModal');
        carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);

        // Add event listener for modal close
        const modalElement = document.getElementById('carouselModalJolt');
        modalElement.addEventListener('hidden.bs.modal', this.resetModal);
    },
    beforeUnmout() {
        // Clean up the event listener before the component is destroyed
        const carouselElement = document.getElementById('carouselSlidesOnlyJoltModal');
        carouselElement.removeEventListener('slide.bs.carousel', this.updateCurrentSlide);

        const modalElement = document.getElementById('carouselModalJolt');
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

h5:hover {
    transform: scale(1.05);
}

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