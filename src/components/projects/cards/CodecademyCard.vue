<!-- Codecademy Mini Projects Card Component -->
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
          title="View Codecademy project screenshots in full screen"
          data-bs-toggle="modal"
          data-bs-target="#carouselModalCodecademy"
        >
          View in Full Screen
        </button>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            Codecademy Mini Projects
          </h2>


          <!-- GitHub Link -->
          <p class="project-link">
            <a
              href="https://github.com/CraftyCurtis05/mini-projects/tree/main/02-codecademy-projects"
              target="_blank"
              rel="noopener noreferrer"
              title="View Codecademy Mini Projects on GitHub"
            >
              View Code on GitHub
            </a>
          </p>


          <hr>


          <!-- Technology -->
          <p class="card-text">
            <strong>Tech Stack:</strong>
            HTML, CSS and JavaScript
          </p>


          <!-- Project Description -->
          <p class="card-text">
            This collection includes smaller projects completed while
            working through Codecademy courses and exercises. They gave me
            opportunities to practice individual development concepts in
            focused applications before using them in larger projects.
          </p>


          <!-- Project Features -->
          <ul>
            <li>
              Practiced semantic HTML structure and accessible page
              organization
            </li>

            <li>
              Built responsive layouts using CSS, Flexbox, Grid and
              media queries
            </li>

            <li>
              Applied JavaScript fundamentals to interactive page
              behavior
            </li>

            <li>
              Worked with reusable styling patterns and consistent
              visual hierarchy
            </li>

            <li>
              Used smaller projects to reinforce concepts before
              applying them to larger applications
            </li>
          </ul>


          <!-- Project Note -->
          <p class="card-text project-note">
            <em>
              These projects document my continued practice and show the
              progression from individual concepts into more complete
              application development.
            </em>
          </p>

        </div>

      </section>

    </div>
  </article>


  <!-- Screenshot Modal -->
  <ProjectScreenshotModal
    modal-name="Codecademy"
    project-name="Codecademy Mini Projects"
    :screenshots="screenshots"
    :image-path="imagePath"
  />
</template>


<script>
import ProjectScreenshotModal from '../ProjectScreenshotModal.vue';

export default {
  name: "CodecademyCard",

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
          alt: "Codecademy Mini Projects preview",
          title:
            "Codecademy Mini Projects preview. Additional project screenshots will be added as the collection is updated."
        }
      ]
    };
  }
};
</script>