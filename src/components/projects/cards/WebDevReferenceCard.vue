<!-- Web Development Reference Card Component -->
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


        <!-- Project Preview Actions -->
        <div class="project-preview-actions">

          <a
            href="https://reference.jennifercurtis.me"
            class="site-button project-preview-button"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit the Web Development Reference live site"
          >
            View Live Site
          </a>


          <button
            class="site-button project-preview-button"
            type="button"
            title="View Web Development Reference screenshots in full screen"
            data-bs-toggle="modal"
            data-bs-target="#carouselModalWebDev"
          >
            View in Full Screen
          </button>

        </div>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            Web Development Reference
          </h2>


          <!-- Project Links -->
          <p class="project-link">
            <a
              href="https://github.com/CraftyCurtis05/mini-projects/tree/main/05-personal-projects/web-dev-reference"
              target="_blank"
              rel="noopener noreferrer"
              title="View Web Development Reference on GitHub"
            >
              View Code on GitHub
            </a>
          </p>


          <hr>


          <!-- Technology Stack -->
          <p class="card-text">
            <strong>Tech Stack:</strong>
            HTML, CSS, JavaScript, Web Storage, ESLint and npm
          </p>


          <!-- Project Description -->
          <p class="card-text">
            Web Development Reference is a multi-page reference site I built
            to organize the concepts, syntax, patterns and tools I regularly
            look up while developing. It started as an HTML tables cheat sheet
            and grew as I kept finding information I wanted to organize in one
            place. I intentionally kept it framework-free so the structure and
            behavior remain easy for me to understand, maintain and expand.
          </p>


          <!-- Project Features -->
          <ul>
            <li>
              Organized HTML, CSS, JavaScript, accessibility, APIs, Git,
              performance, security and other development topics into focused
              reference pages
            </li>

            <li>
              Built page-level and site-wide search to make information easier
              to find as the amount of reference content grew
            </li>

            <li>
              Added saved references with local storage so frequently used
              entries can be returned to quickly
            </li>

            <li>
              Created interactive Pattern demonstrations that combine working
              examples with implementation details and accessibility notes
            </li>

            <li>
              Built shared responsive navigation, light and dark themes,
              reusable interface behavior and accessibility features across
              the site
            </li>
          </ul>


          <!-- Project Note -->
          <p class="card-text project-note">
            <em>
              This project started as a solution to a small problem I kept
              having while coding and became an exercise in organizing a
              growing system. Maintaining it has helped me think more about
              information architecture, reusable behavior, accessibility and
              how people find what they need in a content-heavy interface.
            </em>
          </p>

        </div>

      </section>

    </div>
  </article>


  <!-- Screenshot Modal -->
  <ProjectScreenshotModal
    modal-name="WebDev"
    project-name="Web Development Reference"
    :screenshots="screenshots"
    :image-path="imagePath"
  />
</template>


<script>
import ProjectScreenshotModal from '../ProjectScreenshotModal.vue';

export default {
  name: "WebDevReferenceCard",

  components: {
    ProjectScreenshotModal
  },


  data() {
    return {
      imagePath:
        "/assets/images/projects/web-dev-ref/",

      screenshots: [
        {
          id: 1,
          image: "01-thumbnail.webp",
          alt: "Web Development Reference home page in dark theme",
          title:
            "Web Development Reference home page showing the shared navigation, project introduction and visual system used throughout the site."
        },
        {
          id: 2,
          image: "02-home.webp",
          alt: "Web Development Reference home page with organized reference categories",
          title:
            "Home page organizing HTML, CSS, JavaScript, tools and Patterns into focused reference areas so information can be reached without searching through one large document."
        },
        {
          id: 3,
          image: "03-js-modern-async.webp",
          alt: "Modern and Async JavaScript reference page",
          title:
            "Modern and Async JavaScript reference showing the shared page structure used to organize searchable concepts, syntax examples, notes and related information."
        },
        {
          id: 4,
          image: "04-patterns-skeleton.webp",
          alt: "Interactive loading state and skeleton Pattern demonstration",
          title:
            "Interactive Loading State / Skeleton Pattern combining a working demonstration with implementation details, accessibility considerations and related references."
        },
        {
          id: 5,
          image: "05-global-search.webp",
          alt: "Site-wide Web Development Reference search results",
          title:
            "Site-wide search using a centralized reference index to find matching information across the project instead of limiting results to the current page."
        },
        {
          id: 6,
          image: "06-mobile-view.webp",
          alt: "Web Development Reference responsive mobile layout",
          title:
            "Responsive mobile layout showing how navigation, reference content, tables and shared controls adapt to smaller screens."
        },
        {
          id: 7,
          image: "07-dark-theme.webp",
          alt: "Web Development Reference accessibility page in dark theme",
          title:
            "Persistent dark theme applied across navigation, reference content, code examples and interface controls while maintaining readable contrast and consistent states."
        },
        {
          id: 8,
          image: "08-saved-references.webp",
          alt: "Web Development Reference saved references dialog",
          title:
            "Saved References dialog showing frequently used entries stored in the browser with local storage for quicker access later."
        },
        {
          id: 9,
          image: "09-site-map.webp",
          alt: "Web Development Reference site map",
          title:
            "Site map showing the information architecture behind the growing reference and providing direct access to each major topic area."
        }
      ]
    };
  }
};
</script>