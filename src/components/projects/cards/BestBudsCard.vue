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
        "/assets/images/projects/project-examples/best-buds-screenshots/",

      screenshots: [
        {
          id: 1,
          image: "01-best-buds-register.webp",
          alt: "Best Buds registration page",
          title:
            "Registration page for creating a new Best Buds account. This feature is still under development."
        },
        {
          id: 2,
          image: "02-best-buds-login.webp",
          alt: "Best Buds login page",
          title:
            "Login page for returning users to access their Best Buds account. This feature is still under development."
        },
        {
          id: 3,
          image: "03-best-buds-home.webp",
          alt: "Best Buds home page",
          title:
            "Home page introducing the application and highlighting featured dispensary information."
        },
        {
          id: 4,
          image: "04-best-buds-profile.webp",
          alt: "Best Buds user profile",
          title:
            "User profile designed for managing account information and saved dispensary preferences. This feature is still under development."
        },
        {
          id: 5,
          image: "05-best-buds-locator.webp",
          alt: "Best Buds dispensary locator",
          title:
            "Dispensary locator designed to search nearby businesses and display results with location and map information."
        },
        {
          id: 6,
          image: "06-best-buds-shop.webp",
          alt: "Best Buds product page",
          title:
            "Product information page organized around common cannabis product categories and accessories."
        },
        {
          id: 7,
          image: "07-best-buds-tips-tricks.webp",
          alt: "Best Buds tips and tricks page",
          title:
            "Tips and Tricks page with practical information intended for both newer and more experienced users."
        },
        {
          id: 8,
          image: "08-best-buds-products.webp",
          alt: "Best Buds product guide",
          title:
            "Product guide designed to organize information about different cannabis products and their characteristics."
        },
        {
          id: 9,
          image: "09-best-buds-strain-guide.webp",
          alt: "Best Buds strain and terpene guide",
          title:
            "Strain and terpene guide that organizes product information by characteristics, effects and user preferences."
        },
        {
          id: 10,
          image: "10-best-buds-safety-tips.webp",
          alt: "Best Buds safety information page",
          title:
            "Safety information page covering responsible use, consumption methods and general cannabis safety."
        },
        {
          id: 11,
          image: "11-best-buds-too-much.webp",
          alt: "Best Buds overconsumption information",
          title:
            "Educational page explaining common signs of overconsumption and general steps users can take if they feel uncomfortable."
        },
        {
          id: 12,
          image: "12-best-buds-legality.webp",
          alt: "Best Buds cannabis legality map",
          title:
            "Interactive U.S. map designed to organize state-by-state cannabis legality and regulatory information."
        },
        {
          id: 13,
          image: "13-best-buds-questions.webp",
          alt: "Best Buds frequently asked questions",
          title:
            "Frequently asked questions section that organizes common topics about dispensaries, products, laws and responsible use."
        },
        {
          id: 14,
          image: "14-best-buds-articles.webp",
          alt: "Best Buds articles page",
          title:
            "Resource center containing educational articles and additional cannabis-related information."
        },
        {
          id: 15,
          image: "15-best-buds-news.webp",
          alt: "Best Buds news page",
          title:
            "News page designed to bring current cannabis-related stories and industry information into the application."
        },
        {
          id: 16,
          image: "16-best-buds-about.webp",
          alt: "Best Buds about page",
          title:
            "About page explaining the purpose of Best Buds as a dispensary locator and educational resource."
        },
        {
          id: 17,
          image: "17-best-buds-privacy.webp",
          alt: "Best Buds privacy policy",
          title:
            "Privacy page explaining how user information and application data are intended to be handled."
        },
        {
          id: 18,
          image: "18-best-buds-contact.webp",
          alt: "Best Buds contact page",
          title:
            "Contact page with a form for questions, feedback and other application-related messages."
        }
      ]
    };
  }
};
</script>