<!-- Jolt Card Component -->
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
                                :src="(`src/assets/projects/project-examples/jolt-screenshots/${screenshot.image}`)" 
                                :alt="screenshot.alt"
                            >
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
    </aside>    
  
    <!-- Modal for Full Screen Carousel -->
    <aside class="modal fade" id="carouselModalJolt" tabindex="-1" aria-labelledby="carouselModalJoltLabel" aria-hidden="true">
        <article class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <section class="modal-header">
                    <h4 class="modal-title lead" id="carouselModalJoltLabel">
                        <b class="lead">{{ currentSlideTitle }}</b>
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>

                <!-- Modal Carousel Body -->
                <section class="modal-body">
                    <div id="carouselSlidesOnlyJoltModal" class="carousel slide" data-bs-ride="carousel" @slide.bs.carousel="updateCurrentSlide">

                        <div class="carousel-indicators m-auto">
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

                        <div class="carousel-inner">
                            <div 
                                v-for="(screenshot, index) in screenshots"
                                :key="screenshot.id"
                                :class="['carousel-item', { active: index === 0 }]"
                            >
                                <img 
                                    class="d-block w-100" 
                                    :src="(`src/assets/projects/project-examples/jolt-screenshots/${screenshot.image}`)" 
                                    :alt="screenshot.alt"
                                >
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
    </aside>
</template>
  
<script>
export default {
    name: "JoltCard",
    data() {
        return {
            screenshots: [
                {
                    id: 1,
                    image: "01-jolt-register.png",
                    alt: "Jolt App Screenshot 1"
                },
                {
                    id: 2,
                    image: "02-jolt-login.png",
                    alt: "Jolt App Screenshot 2"
                },
                {
                    id: 3,
                    image: "03-jolt-home.png",
                    alt: "Jolt App Screenshot 3"
                },
                {
                    id: 4,
                    image: "04-jolt-profile-form.png",
                    alt: "Jolt App Screenshot 4"
                },
                {
                    id: 5,
                    image: "05-jolt-profile-user.png",
                    alt: "Jolt App Screenshot 5"
                },
                {
                    id: 6,
                    image: "06-jolt-locator.png",
                    alt: "Jolt App Screenshot 6"
                },
                {
                    id: 7,
                    image: "07-jolt-locator-search.png",
                    alt: "Jolt App Screenshot 7"
                },
                {
                    id: 8,
                    image: "08-jolt-locator-fav.png",
                    alt: "Jolt App Screenshot 8"
                },
                {
                    id: 9,
                    image: "09-jolt-profile-favs.png",
                    alt: "Jolt App Screenshot 9"
                },
                {
                    id: 10,
                    image: "10-jolt-shop.png",
                    alt: "Jolt App Screenshot 10"
                },
                {
                    id: 11,
                    image: "11-jolt-articles.png",
                    alt: "Jolt App Screenshot 11"
                },
                {
                    id: 12,
                    image: "12-jolt-about.png",
                    alt: "Jolt App Screenshot 12"
                }
            ],
            slideTitles: [
                "Register page for creating a new account on the Jolt app by providing your username and password.",
                "Login page for accessing your Jolt account by entering your registered username and password.",
                "Home screen displaying an app description, along with a currated stock image carousel to match design.",
                "Profile form for entering personal information such as your name, profile picture, and preferences to personalize your Jolt experience.",
                "User profile page where you can view and update your personal details, including your name, email, and uploaded profile picture.",
                "Locator page showing a search bar for user input and a button to search near the user's saved profile address.",
                "Search results that display the nearest 20 coffee shops to user's location, with shop details and links to Google directions and Yelp Reviews.",
                "Save to favorites where you can save coffee shops to your profile for quick access and future reference.",
                "Manage your favorite coffee shops in your profile, including viewing and editing the list of your top picks.",
                "Shop for different coffee items, including coffee, coffee equipment, coffee merchandise and coffee-related snacks.",
                "Articles page where you can read content related to coffee culture, health advice, and user tips for coffee lovers.",
                "About page describing the development team behind the project, along with descriptions about each and links to their LinkedIn profiles."
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
        openCarouselModalJolt() {
            // Use Bootstrap's modal functionality to show the modal
            const modal = new window.bootstrap.Modal(document.getElementById('carouselModalJolt'));
            modal.show();
        },
        // Method to update the current slide index on slide change
        updateCurrentSlide(event) {
            this.currentSlideIndex = event.to;
        }
    },
    mounted() {
        // Attach the slide event listener to the carousel after the component is mounted
        const carouselElement = document.getElementById('carouselSlidesOnlyJoltModal');
        carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);
    },
    beforeDestroy() {
        // Clean up the event listener before the component is destroyed
        const carouselElement = document.getElementById('carouselSlidesOnlyJoltModal');
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