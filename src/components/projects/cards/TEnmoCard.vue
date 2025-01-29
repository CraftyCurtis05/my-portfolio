<!-- TEnmo Card Component -->
<template>
    <component class="card mb-3" style="max-width: 45vw;">
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
                <!-- <button @click="openCarouselModalTEnmo" class="btn mt-2 lead" title="View Carousel in Full Screen">View in Full Screen</button> -->
            </section>

            <!-- Card Body -->
            <section class="col-md-8">
                <div class="card-body">
                <h5 class="card-title ml-5">"TEnmo" P2P Online Payment Service API</h5>
                <p class="card-text lead"><b>Tech Stack:</b> Spring Boot, PostgreSQL, RESTful API, JDBC, JWT Authentication</p>
                <p class="card-text lead">
                    Worked with a team to design and develop a Spring Boot RESTful API for a peer-to-peer payment service, enabling money transfers, balance checks, and transfer requests, with PostgreSQL for data storage and efficient transaction management.
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
        </component>

        <!-- Modal -->
        <modal class="modal fade" id="carouselModalTEnmo" tabindex="-1" aria-labelledby="carouselModalTEnmoLabel" aria-hidden="true">
            <article class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <section class="modal-header">
                    <h5 class="modal-title lead" id="carouselModalTEnmo">No Image Available</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>

                <!-- Modal Carousel -->
                <section class="modal-body">
                    <div id="carouselSlidesOnlyTEnmo" class="carousel slide" data-bs-ride="carousel">

                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselSlidesOnlyTEnmo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
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
    </modal>
</template>

<script>
export default {
    name: "TEnmoCard",
    methods: {
        openCarouselModalTEnmo() {
        // Use Bootstrap's modal functionality to show the modal
        const modal = new window.bootstrap.Modal(document.getElementById('carouselModalTEnmo'));
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