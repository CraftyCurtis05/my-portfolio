<!-- TEnmo Card Component -->
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
                :src="(`/assets/projects/${screenshot.image}`)"
                :alt="screenshot.alt"
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Card Body -->
      <section class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-center">
            "TEnmo" P2P Online Payment Service API
          </h5>
          <hr>
          <p class="card-text lead">
            <b>Tech Stack:</b> Spring Boot, PostgreSQL, RESTful API, JDBC, JWT Authentication
          </p>
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
          <p class="card-text text-muted lead">
            <em>This project is a peer-to-peer payment solution for managing transactions and transfers securely.</em>
          </p>
        </div>
      </section>

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
          image: "default_image.webp",
          alt: "No Image Available"
        }
      ]
    }
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