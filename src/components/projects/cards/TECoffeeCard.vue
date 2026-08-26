<!-- Tech Elevator Coffee Shop Locator Card Component -->
<template>
  <article class="project-card">
    <div class="project-card-layout">

      <!-- Project Preview -->
      <section class="carousel-container">

        <div class="carousel-main">
          <div class="carousel-inner">

            <div
              v-for="(screenshot, index) in screenshots"
              :key="screenshot.id"
              :class="[
                'carousel-item',
                { active: index === 0 }
              ]"
            >
              <img
                :src="`${imagePath}${screenshot.image}`"
                :alt="screenshot.alt"
                loading="lazy"
                decoding="async"
              >
            </div>

          </div>
        </div>


        <!-- Full Screen Preview -->
        <button
          class="site-button project-preview-button"
          type="button"
          title="View Tech Elevator Coffee Shop Locator screenshots in full screen"
          data-bs-toggle="modal"
          data-bs-target="#carouselModalTECoffee"
        >
          View in Full Screen
        </button>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            Tech Elevator Coffee Shop Locator
          </h2>


          <!-- GitHub Repository -->
          <p class="project-link">
            <a
              href="https://github.com/CraftyCurtis05/te-capstone-coffee-shop-locator"
              target="_blank"
              rel="noopener noreferrer"
              title="View Tech Elevator Coffee Shop Locator on GitHub"
            >
              View Code on GitHub
            </a>
          </p>


          <hr>


          <!-- Technology -->
          <p class="card-text">
            <strong>Tech Stack:</strong>
            Java, Spring Boot, PostgreSQL, Vue.js, JavaScript,
            Yelp Fusion API, Axios and JWT Authentication
          </p>


          <!-- Project Overview -->
          <p class="card-text">
            This team capstone was built during Tech Elevator's Java
            full-stack bootcamp to help users find nearby coffee shops and
            view business information from the Yelp Fusion API. It gave me
            hands-on experience working across the frontend, backend,
            database and external API layers of one application.
          </p>


          <!-- Project Highlights -->
          <ul>
            <li>
              Integrated Yelp business data to return nearby coffee shops
              with ratings, addresses and location information
            </li>

            <li>
              Worked with authenticated user access using JWT
            </li>

            <li>
              Used Vue Router and Vuex to manage frontend navigation
              and application state
            </li>

            <li>
              Connected the Vue.js frontend with Spring Boot services
              and PostgreSQL data
            </li>

            <li>
              Built and integrated features within a collaborative
              team development environment
            </li>
          </ul>


          <!-- Project Note -->
          <p class="card-text project-note">
            <em>
              This project became the starting point for Jolt, where I later
              revisited the same problem independently and expanded it with
              additional features, personalization and a redesigned user
              experience.
            </em>
          </p>

        </div>

      </section>

    </div>
  </article>


  <!-- Screenshot Modal -->
  <ProjectScreenshotModal
    modal-name="TECoffee"
    project-name="Tech Elevator Coffee Shop Locator"
    :screenshots="screenshots"
    :image-path="imagePath"
  />
</template>


<script>
import ProjectScreenshotModal from '../ProjectScreenshotModal.vue';

export default {
  name: "TECoffeeCard",

  components: {
    ProjectScreenshotModal
  },


  data() {
    return {
      imagePath:
        "/assets/images/projects/",

      screenshots: [
        {
          id: 1,
          image: "default_image.webp",
          alt: "Tech Elevator Coffee Shop Locator project preview",
          title:
            "Tech Elevator Coffee Shop Locator project preview. Additional screenshots will be added to show the original capstone workflow."
        }
      ]
    };
  }
};
</script>