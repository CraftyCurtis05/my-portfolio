<!-- Codecademy Card Component -->
<template>
    <aside class="card mb-3" style="max-width: 45vw;">
        <article class="row g-0">

            <!-- Screenshot Carousel -->
            <section class="carousel-container col-md-4">
                <div id="carouselSlidesOnly" class="carousel-main slide mt-4" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/projects/default_image.png" class="d-block w-100" alt="No Image Available">
                        </div>
                    </div>
                </div>
                <!-- <button @click="openCarouselModalCodecademy" class="btn mt-2 lead" title="View Carousel in Full Screen">View in Full Screen</button> -->
            </section>

            <!-- Card Body -->
            <section class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title ml-5">
                        <a href="https://github.com/CraftyCurtis05/mini-projects" target="_blank" title="Visit My Code on Github">
                            "Codecademy" Mini Projects
                        </a>
                    </h5>
                    <p class="card-text lead"><b>Tech Stack:</b> HTML, CSS, Java, JavaScript, Bootstrap, Flexbox, Spring Boot</p>
                    <p class="card-text lead">
                        A collection of mini projects from various Codecademy courses, showcasing skills in HTML, CSS, Java, and JavaScript. The projects are categorized by topics like Bootstrap, Flexbox, Async/Await, and more, helping to build a strong foundation in web development.
                    </p>
                    <ul class="lead">
                        <li>HTML & CSS Layouts (Bootstrap, Flexbox, Grid)</li>
                        <li>Java Web Apps (Spring Boot)</li>
                        <li>Interactive JavaScript Websites</li>
                        <li>Async Programming (Async/Await, Promises)</li>
                        <li>Class & Module-based Projects</li>
                    </ul>
                    <p class="card-text text-muted lead"><em>Explore various web development concepts through hands-on projects across HTML, CSS, Java, and JavaScript.</em></p>
                </div>
            </section>

        </article>
    </aside>
  
    <!-- Modal for Full Screen Carousel -->
    <aside class="modal fade" id="carouselModalCodecademy" tabindex="-1" aria-labelledby="carouselModalLabelCodecademy" aria-hidden="true">
        <article class="modal-dialog modal-lg">
            <div class="modal-content">
    
                <!-- Modal Header -->
                <section class="modal-header">
                    <h5 class="modal-title lead" id="carouselModalCodecademy">No Image Available</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>
        
                <!-- Modal Carousel -->
                <section class="modal-body">
                    <div id="carouselSlidesOnlyModal" class="carousel slide" data-bs-ride="carousel">

                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselSlidesOnlyCodecademy" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        </div>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="@/assets/projects/default_image.png" class="d-block w-100" alt="No Image Available">
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </article>
    </aside>
</template>
  
<script>
export default {
    name: "CodecademyCard",
    methods: {
        openCarouselModalCodecademy() {
        // Use Bootstrap's modal functionality to show the modal
        const modal = new window.bootstrap.Modal(document.getElementById('carouselModalCodecademy'));
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

.carousel-indicators {
    filter: invert(100%); /* Ensure the icons are visible */
    margin: auto;
}

.carousel-indicators {
    position: absolute;
    top: 103%; /* Align vertically centered */
    transform: translateY(-50%); /* Ensure it is exactly centered vertically */
}
</style>