<!-- Best Buds Card Component -->
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
          title="View Best Buds screenshots in full screen"
          data-bs-toggle="modal"
          data-bs-target="#carouselModalBestBuds"
        >
          View in Full Screen
        </button>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            Best Buds Dispensary Locator
          </h2>


          <!-- GitHub Link -->
          <p class="project-link">
            <a
              href="https://github.com/CraftyCurtis05/best-buds-dispensary-locator"
              target="_blank"
              rel="noopener noreferrer"
              title="View Best Buds Dispensary Locator on GitHub"
            >
              View Code on GitHub
            </a>
          </p>


          <hr>


          <!-- Technology -->
          <p class="card-text">
            <strong>Tech Stack:</strong>
            Java, Spring Boot, PostgreSQL, Vue.js, JavaScript,
            Yelp Fusion API, Google Maps API and News API
          </p>


          <!-- Project Description -->
          <p class="card-text">
            Best Buds is a full-stack dispensary locator and educational
            resource that brings location data, legal information, safety
            guidance, product education and cannabis-related news into one
            application. I designed it to organize a large amount of
            information into clear, easy-to-use sections.
          </p>


          <!-- Project Features -->
          <ul>
            <li>
              Built a dispensary search workflow using location data,
              Google Maps and Yelp business information
            </li>

            <li>
              Designed user account and profile features for a more
              personalized application experience
            </li>

            <li>
              Created an interactive state legality map to organize
              state-by-state cannabis law information
            </li>

            <li>
              Organized educational content around products, strains,
              safety, responsible use and frequently asked questions
            </li>

            <li>
              Integrated external news and article content to support
              current informational resources
            </li>
          </ul>


          <!-- Project Note -->
          <p class="card-text project-note">
            <em>
              This ongoing personal project gives me a place to work with
              larger application requirements, multiple data sources and
              clear user workflows across a content-heavy application.
            </em>
          </p>

        </div>

      </section>

    </div>
  </article>


  <!-- Screenshot Modal -->
  <ProjectScreenshotModal
    modal-name="BestBuds"
    project-name="Best Buds"
    :screenshots="screenshots"
    :image-path="imagePath"
  />
</template>


<script>
import ProjectScreenshotModal from '../ProjectScreenshotModal.vue';

export default {
  name: "BestBudsCard",

  components: {
    ProjectScreenshotModal
  },


  data() {
    return {
      imagePath:
        "/assets/images/projects/best-buds/",

      screenshots: [
        {
          id: 1,
          image: "01-home.webp",
          alt: "Best Buds home page",
          title:
            "Home page introducing the application and highlighting featured dispensary information."
        },
        {
          id: 2,
          image: "02-locator.webp",
          alt: "Best Buds dispensary locator",
          title:
            "Dispensary locator for searching nearby businesses and viewing results with location and map information."
        },
        {
          id: 3,
          image: "03-profile.webp",
          alt: "Best Buds user profile",
          title:
            "User profile for managing account information and saved dispensary preferences. This feature is still under development."
        },
        {
          id: 4,
          image: "04-tips-tricks.webp",
          alt: "Best Buds tips and tricks page",
          title:
            "Tips and Tricks page with practical information intended for both newer and more experienced users."
        },
        {
          id: 5,
          image: "05-legality.webp",
          alt: "Best Buds cannabis legality map",
          title:
            "Interactive U.S. map organizing state-by-state cannabis legality and regulatory information."
        },
        {
          id: 6,
          image: "06-articles.webp",
          alt: "Best Buds articles page",
          title:
            "Resource center containing educational articles and additional cannabis-related information."
        },
        {
          id: 7,
          image: "07-news.webp",
          alt: "Best Buds news page",
          title:
            "News page bringing current cannabis-related stories and industry information into the application."
        },
        {
          id: 8,
          image: "08-contact.webp",
          alt: "Best Buds contact page",
          title:
            "Contact page with a form for questions, feedback and other application-related messages."
        }
      ]
    };
  }
};
</script>