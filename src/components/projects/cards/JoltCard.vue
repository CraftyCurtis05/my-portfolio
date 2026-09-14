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


        <!-- Project Preview Actions -->
        <div class="project-preview-actions">

          <a
            href="https://jolt.jennifercurtis.me"
            class="site-button project-preview-button"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit the Jolt Coffee Shop Locator live site"
          >
            View Live Site
          </a>


          <button
            class="site-button project-preview-button"
            type="button"
            title="View Jolt Coffee Shop Locator screenshots in full screen"
            data-bs-toggle="modal"
            data-bs-target="#carouselModalJolt"
          >
            View in Full Screen
          </button>

        </div>

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
            "Home page introducing Jolt's main features with a responsive layout and coffee-themed image carousel."
        },
        {
          id: 2,
          image: "02-create-account.webp",
          alt: "Jolt create account page",
          title:
            "Account registration with clear validation and feedback for creating a secure Jolt account."
        },
        {
          id: 3,
          image: "03-profile.webp",
          alt: "Jolt profile management page",
          title:
            "Profile management for creating and updating personal information, a home location and profile picture."
        },
        {
          id: 4,
          image: "04-coffee-shop-locator.webp",
          alt: "Jolt coffee shop locator",
          title:
            "Coffee shop locator for searching by city, state or ZIP code or using a saved home location."
        },
        {
          id: 5,
          image: "05-saved-coffee-shops.webp",
          alt: "Jolt saved coffee shops page",
          title:
            "Saved Coffee Shops page for viewing and managing coffee shops saved to the authenticated user's account."
        },
        {
          id: 6,
          image: "06-shop.webp",
          alt: "Jolt shop page",
          title:
            "Jolt Shop with a responsive collection of merchandise that extends the application's visual identity."
        },
        {
          id: 7,
          image: "07-articles.webp",
          alt: "Jolt coffee articles page",
          title:
            "Coffee Articles page with a responsive card-based layout for browsing coffee-related content."
        },
        {
          id: 8,
          image: "08-about-project.webp",
          alt: "Jolt about page",
          title:
            "About page showing the original development team and Jolt's evolution from a collaborative capstone to an independently expanded project."
        }
      ]
    };
  }
};
</script>