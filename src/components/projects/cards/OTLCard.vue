<!-- OTL Card Component -->
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
          title="View OTL screenshots in full screen"
          data-bs-toggle="modal"
          data-bs-target="#carouselModalOTL"
        >
          View in Full Screen
        </button>


        <!-- Current Client Site -->
        <a
          href="https://otlcommunications.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="site-button project-preview-button"
          title="View the current OTL Communications website"
        >
          View Current Client Site
        </a>

      </section>


      <!-- Project Details -->
      <section class="project-details">

        <div class="card-body">

          <h2 class="card-title text-center">
            OTL Communications Website
          </h2>


          <!-- GitHub Repository -->
          <p class="project-link">
            <a
              href="https://github.com/CraftyCurtis05/otl-website"
              target="_blank"
              rel="noopener noreferrer"
              title="View my original OTL Communications project on GitHub"
            >
              View My Original Code on GitHub
            </a>
          </p>


          <hr>


          <!-- Technology -->
          <p class="card-text">
            <strong>Tech Stack:</strong>
            Vue.js, JavaScript, Vue Router, Bootstrap and EmailJS
          </p>


          <!-- Project Overview -->
          <p class="card-text">
            OTL Communications is a client website I reorganized and rebuilt
            to make services, support, pricing and contact information easier
            for customers to find and understand. I focused on improving the
            information flow, page organization and wording throughout the site.
          </p>


          <!-- Project Highlights -->
          <ul>
            <li>
              Reorganized the site into a clearer multi-page structure based
              on how customers look for services, support and pricing
            </li>

            <li>
              Reworked the wording and content hierarchy to make technical
              information easier for customers to understand
            </li>

            <li>
              Built the redesigned site in Vue.js with reusable components
              and structured navigation using Vue Router
            </li>

            <li>
              Integrated EmailJS to create a functional contact workflow
              without requiring a separate email backend
            </li>

            <li>
              Created responsive desktop and mobile layouts for the
              delivered client site
            </li>
          </ul>


          <!-- Project Note -->
          <p class="card-text project-note">
            <em>
              The client has since updated the site's visual styling, but the
              current version still uses much of the organization, wording and
              information structure from my original rebuild. The screenshots
              shown here are from the version I designed and delivered.
            </em>
          </p>

        </div>

      </section>

    </div>
  </article>


  <!-- Screenshot Modal -->
  <ProjectScreenshotModal
    modal-name="OTL"
    project-name="OTL"
    :screenshots="screenshots"
    :image-path="imagePath"
  />
</template>


<script>
import ProjectScreenshotModal from '../ProjectScreenshotModal.vue';

export default {
  name: "OTLCard",

  components: {
    ProjectScreenshotModal
  },


  data() {
    return {
      imagePath:
        "/assets/images/projects/otl/",

      screenshots: [
        {
          id: 1,
          image: "01-home.webp",
          alt: "OTL Communications home page",
          title:
            "Home page from the version I designed and delivered to the client."
        },
        {
          id: 2,
          image: "02-services.webp",
          alt: "OTL Communications services page",
          title:
            "Services page reorganized to make the company's communication solutions easier for customers to understand."
        },
        {
          id: 3,
          image: "03-support.webp",
          alt: "OTL Communications support page",
          title:
            "Support page organized to give customers a clear place to find help and service information."
        },
        {
          id: 4,
          image: "04-pricing.webp",
          alt: "OTL Communications pricing page",
          title:
            "Pricing page structured to make service options and pricing easier for customers to compare."
        },
        {
          id: 5,
          image: "05-contact.webp",
          alt: "OTL Communications contact page",
          title:
            "Contact page with an EmailJS-powered form for customer questions and service inquiries."
        },
        {
          id: 6,
          image: "06-mobile-home.webp",
          alt: "OTL Communications home page on mobile",
          title:
            "Responsive mobile version of the home page I designed and delivered."
        },
        {
          id: 7,
          image: "07-mobile-services.webp",
          alt: "OTL Communications services page on mobile",
          title:
            "Mobile services page with the same content structure adapted for a smaller screen."
        }
      ]
    };
  }
};
</script>