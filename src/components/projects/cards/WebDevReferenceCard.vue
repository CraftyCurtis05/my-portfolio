<!-- Web Dev Reference Card Component -->
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
          title="View Web Development Reference screenshots in full screen"
          data-bs-toggle="modal"
          data-bs-target="#carouselModalWebDev"
        >
          View in Full Screen
        </button>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            Web Development Reference
          </h2>


          <!-- GitHub Link -->
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
            HTML, CSS and JavaScript
          </p>


          <!-- Project Description -->
          <p class="card-text">
            Web Development Reference is a personal site I built to organize
            commonly used HTML, CSS and JavaScript concepts in one place. I
            wanted a practical resource I could use while coding instead of
            repeatedly searching through notes, documentation and older
            projects.
          </p>


          <!-- Project Features -->
          <ul>
            <li>
              Organized development concepts into clear sections for faster
              reference while coding
            </li>

            <li>
              Built reusable reference tables with descriptions, syntax
              examples and practical notes
            </li>

            <li>
              Added navigation and interface features to make technical
              information easier to browse
            </li>

            <li>
              Used consistent styling and visual hierarchy to separate
              concepts, examples and supporting information
            </li>

            <li>
              Built the project as a working resource I can continue updating
              as my development knowledge expands
            </li>
          </ul>


          <!-- Project Note -->
          <p class="card-text project-note">
            <em>
              This project combines technical practice with information
              organization and reflects how I document concepts so they are
              easier to understand, find and reuse.
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
        "/assets/images/projects/",

      screenshots: [
        {
          id: 1,
          image: "default_image.webp",
          alt: "Web Development Reference project preview",
          title:
            "Web Development Reference project preview. Additional screenshots will be added as the project presentation is updated."
        }
      ]
    };
  }
};
</script>