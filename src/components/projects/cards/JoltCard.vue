<!-- Jolt Card Component -->
<template>
  <article class="project-card">
    <div class="project-card-layout">

      <!-- Screenshot Preview -->
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
          title="View Jolt screenshots in full screen"
          data-bs-toggle="modal"
          data-bs-target="#carouselModalJolt"
        >
          View in Full Screen
        </button>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            Jolt Coffee Shop Locator
          </h2>


          <!-- GitHub Link -->
          <p class="project-link">
            <a
              href="https://github.com/CraftyCurtis05/jolt-coffee-shop-locator"
              target="_blank"
              rel="noopener noreferrer"
              title="View Jolt Coffee Shop Locator on GitHub"
            >
              View Code on GitHub
            </a>
          </p>


          <hr>


          <p class="card-text">
            <strong>Tech Stack:</strong>
            Java, Spring Boot, PostgreSQL, Vue.js, JavaScript
            and Yelp Fusion API
          </p>


          <p class="card-text">
            Jolt is a full-stack coffee shop locator that lets users search by
            location or saved profile address, view business information from
            the Yelp Fusion API and save favorite coffee shops to their account.
          </p>


          <ul>
            <li>
              Built a full-stack workflow connecting the Vue.js interface,
              Spring Boot REST API and PostgreSQL database
            </li>

            <li>
              Integrated the Yelp Fusion API to provide real-time coffee shop
              and business information
            </li>

            <li>
              Developed user profiles and persistent favorites tied to
              authenticated users
            </li>

            <li>
              Added location-based and profile-based search options to create
              a more personalized user experience
            </li>

            <li>
              Designed clear user workflows from search and discovery through
              saving and managing favorites
            </li>
          </ul>


          <p class="card-text project-note">
            <em>
              Built as an expanded version of my original Tech Elevator
              capstone, with additional functionality, personalized features
              and a redesigned interface.
            </em>
          </p>

        </div>

      </section>

    </div>
  </article>


  <!-- Full Screen Screenshot Modal -->
  <ProjectScreenshotModal
    modal-name="Jolt"
    project-name="Jolt"
    :screenshots="screenshots"
    :image-path="imagePath"
  />
</template>


<script>
import ProjectScreenshotModal from '../ProjectScreenshotModal.vue';

export default {
  name: "JoltCard",

  components: {
    ProjectScreenshotModal
  },


  data() {
    return {
      imagePath:
        "/assets/images/projects/jolt/",

      screenshots: [
        {
          id: 1,
          image: "01-home.webp",
          alt: "Jolt home page",
          title:
            "Home page introducing the application with a curated coffee-themed image carousel."
        },
        {
          id: 2,
          image: "02-profile-form.webp",
          alt: "Jolt profile form",
          title:
            "Profile form for saving personal information, an address, profile image and user preferences."
        },
        {
          id: 3,
          image: "03-profile-user.webp",
          alt: "Jolt user profile",
          title:
            "User profile where saved information and profile details can be viewed and updated."
        },
        {
          id: 4,
          image: "04-locator.webp",
          alt: "Jolt coffee shop locator",
          title:
            "Locator page that accepts a search location or uses the address saved in the user's profile."
        },
        {
          id: 5,
          image: "05-locator-search.webp",
          alt: "Jolt coffee shop search results",
          title:
            "Coffee shop results returned from the Yelp Fusion API with business details, directions and Yelp review links."
        },
        {
          id: 6,
          image: "06-locator-fav.webp",
          alt: "Jolt save favorite feature",
          title:
            "Search result with the option to save a coffee shop to the user's favorites."
        },
        {
          id: 7,
          image: "07-profile-favs.webp",
          alt: "Jolt saved favorites",
          title:
            "Profile section for viewing and managing coffee shops saved as favorites."
        },
        {
          id: 8,
          image: "08-articles.webp",
          alt: "Jolt articles page",
          title:
            "Articles page with coffee-related information, tips and lifestyle content."
        }
      ]
    };
  }
};
</script>