<!-- Best Buds Card Component -->
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
                                :src="(`/projects/project-examples/best-buds-screenshots/${screenshot.image}`)"
                                :alt="screenshot.alt"
                            >
                        </div>
                    </div>
                </div>
                <button
                    @click="openCarouselModalBestBuds"
                    class="btn mt-2 lead"
                    title="View Carousel in Full Screen"
                >View in Full Screen</button>
            </section>

            <!-- Card Body -->
            <section class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-center">
                        <a
                            href="https://github.com/CraftyCurtis05/best-buds-dispensary-locator"
                            target="_blank"
                            title="Visit My Code on Github"
                        >"Best Buds" Dispensary Locator App</a>
                    </h5>
                    <hr>
                    <p class="card-text lead">
                        <b>Tech Stack:</b> Vue.js, Spring Boot, PostgreSQL, Yelp API, Google Maps API, TheNews API, Axios
                    </p>
                    <p class="card-text lead">
                        Best Buds helps users find dispensaries and access info on cannabis products, legality and safety. With real-time data, locator search, articles and tips, it keeps users informed to make confident decisions.
                    </p>
                    <ul class="lead">
                        <li>User Authentication & Profile Management</li>
                        <li>Locator Search with Google Map & Yelp API</li>
                        <li>Interactive State Legality SVG Map</li>
                        <li>Tips & Tricks, News & Articles Information</li>
                        <li>Contact Form using EmailJS</li>
                    </ul>
                    <p class="card-text text-muted lead">
                        <em>Originally designed as a cannabis resource, now continuously updated with new features.</em>
                    </p>
                </div>
            </section>

        </article>
    </aside>

    <!-- Modal for Full Screen Carousel -->
    <aside
        class="modal fade"
        id="carouselModalBestBuds"
        tabindex="-1"
        aria-labelledby="carouselModalBestBudsLabel"
    >
        <article class="modal-dialog modal-lg m-auto">
            <div class="modal-content">

                <!-- Modal Header -->
                <section class="modal-header">
                    <h4 class="modal-title lead" id="carouselModalBestBudsLabel">
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
                        id="carouselSlidesOnlyBestBudsModal"
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
                                data-bs-target="#carouselSlidesOnlyBestBudsModal"
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
                                    :src="(`/projects/project-examples/best-buds-screenshots/${screenshot.image}`)"
                                    :alt="screenshot.alt"
                                >
                            </div>
                        </div>

                        <!-- Modal Carousel Controls -->
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselSlidesOnlyBestBudsModal"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselSlidesOnlyBestBudsModal"
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
    name: "BestBudsCard",
    data() {
        return {
            currentTitle: '',
            screenshots: [
                {
                    id: 1,
                    image: "01-best-buds-register.webp",
                    alt: "Best Buds App Screenshot 1",
                    title: "Register page to create a new Best Buds account by entering your username and password. (Under Development)"
                },
                {
                    id: 2,
                    image: "02-best-buds-login.webp",
                    alt: "Best Buds App Screenshot 2",
                    title: "Login page for accessing your Best Buds account using your registered username and password. (Under Development)"
                },
                {
                    id: 3,
                    image: "03-best-buds-home.webp",
                    alt: "Best Buds App Screenshot 3",
                    title: "Home screen overview of the Best Buds app with a spotlight feature on a top-rated dispensary. (Under Development)"
                },
                {
                    id: 4,
                    image: "04-best-buds-profile.webp",
                    alt: "Best Buds App Screenshot 4",
                    title: "User profile page where you can view and update your personal details and favorite dispensaries. (Under Development)"
                },
                {
                    id: 5,
                    image: "05-best-buds-locator.webp",
                    alt: "Best Buds App Screenshot 5",
                    title: "Find nearby dispensaries using our locator tool by entering your location for quick results and a map. (Under Development)"
                },
                {
                    id: 6,
                    image: "06-best-buds-shop.webp",
                    alt: "Best Buds App Screenshot 6",
                    title: "Shop page to explore a variety of cannabis products, including strains, edibles, and accessories. (Under Development)"
                },
                {
                    id: 7,
                    image: "07-best-buds-tips-tricks.webp",
                    alt: "Best Buds App Screenshot 7",
                    title: "Tips & Tricks page offering cannabis advice for both beginners and seasoned users. (Under Development)"
                },
                {
                    id: 8,
                    image: "08-best-buds-products.webp",
                    alt: "Best Buds App Screenshot 8",
                    title: "Strain guide page to help you explore cannabis products and find the right one for your needs. (Under Development)"
                },
                {
                    id: 9,
                    image: "09-best-buds-strain-guide.webp",
                    alt: "Best Buds App Screenshot 9",
                    title: "Explore our strain and terpene guide to discover the perfect cannabis match for your mood and preferences. (Under Development)"
                }, 
                {
                    id: 10,
                    image: "10-best-buds-safety-tips.webp",
                    alt: "Best Buds App Screenshot 10",
                    title: "Safety tips page providing essential information on cannabis consumption, smoking, and topicals. (Under Development)"
                },
                {
                    id: 11,
                    image: "11-best-buds-too-much.webp",
                    alt: "Best Buds App Screenshot 11",
                    title: "Learn how to identify symptoms of cannabis overconsumption and how to manage the experience. (Under Development)"
                },
                {
                    id: 12,
                    image: "12-best-buds-legality.webp",
                    alt: "Best Buds App Screenshot 12",
                    title: "Explore cannabis legality across U.S. states with an interactive map detailing state laws and regulations. (Under Development)"
                },
                {
                    id: 13,
                    image: "13-best-buds-questions.png",
                    alt: "Best Buds App Screenshot 13",
                    title: "Comprehensive Q&A section answering all your cannabis-related questions, from dispensaries to consumption methods. (Under Development)"
                },
                {
                    id: 14,
                    image: "14-best-buds-articles.webp",
                    alt: "Best Buds App Screenshot 14",
                    title: "Cannabis Resource Center offering informative articles on strains, trends, and all things cannabis-related. (Under Development)"
                },
                {
                    id: 15,
                    image: "15-best-buds-news.webp",
                    alt: "Best Buds App Screenshot 15",
                    title: "Stay up-to-date with the latest cannabis news, trends, and cultural shifts from around the world. (Under Development)"
                },
                {
                    id: 16,
                    image: "16-best-buds-about.webp",
                    alt: "Best Buds App Screenshot 16",
                    title: "At Best Buds, we guide you through the world of cannabis, promoting informed choices and responsible use. (Under Development)"
                },
                {
                    id: 17,
                    image: "17-best-buds-privacy.webp",
                    alt: "Best Buds App Screenshot 17",
                    title: "Our Privacy Policy outlines how we collect, use, and protect your data to ensure a secure and transparent experience. (Under Development)"
                },
                {
                    id: 18,
                    image: "18-best-buds-contact.webp",
                    alt: "Best Buds App Screenshot 18",
                    title: "Reach out to us through our contact form for any questions or feedback, and we’ll get back to you shortly. (Under Development)"
                }
            ]
        };
    },
    methods: {
        // Open modal and set current title based on the slide
        openCarouselModalBestBuds() {
            this.currentTitle = this.screenshots[0].title;
            const modal = new window.bootstrap.Modal(document.getElementById('carouselModalBestBuds'));
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
            const carouselElement = document.getElementById('carouselSlidesOnlyBestBudsModal');
            const carousel = new bootstrap.Carousel(carouselElement);
            carousel.to(0); // Navigate to the first slide (index 0)
        }
    },
    mounted() {
        // Attach the slide event listener to the carousel after the component is mounted
        const carouselElement = document.getElementById('carouselSlidesOnlyBestBudsModal');
        carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);

        // Add event listener for modal close
        const modalElement = document.getElementById('carouselModalBestBuds');
        modalElement.addEventListener('hidden.bs.modal', this.resetModal);
    },
    beforeUnmout() {
        // Clean up the event listener before the component is destroyed
        const carouselElement = document.getElementById('carouselSlidesOnlyBestBudsModal');
        carouselElement.removeEventListener('slide.bs.carousel', this.updateCurrentSlide);

        const modalElement = document.getElementById('carouselModalBestBuds');
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