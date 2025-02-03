<!-- Image Component -->
<template>
  <article class="image-container position-relative d-flex flex-column justify-content-center mx-auto">

    <!-- Transition Image -->
    <section class="image position-relative">
      <img
        src="@/assets/about/top_image.webp"
        class="top-image img-fluid position-absolute"
        alt="Picture of Jennifer Curtis"
        title="Jennifer Curtis"
      />
      <img 
        src="@/assets/about/bottom_image.jpg"
        class="bottom-image img-fluid position-absolute"
        alt="Picture of Jennifer Curtis"
        title="Jennifer Curtis"
      />
    </section>

    <!-- Resume Button -->
    <section class="btn-container mt-2">
      <a
        class="btn"
        href="src/assets/about/jennifer_curtis_resume.pdf"
        target="_blank"
        title="Click to View My Resume"
      >
        My Resume
      </a>
    </section>

    <!-- Certificates Button with Modal Trigger -->
    <section class="btn-container mt-1">
      <a
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#carouselModalCertificate"
        title="Click to View My Certificates"
      >
        My Certificates
      </a>
    </section>

  </article>

  <!-- Modal for Full-Screen Carousel -->
  <aside class="modal fade" id="carouselModalCertificate" tabindex="-1" aria-labelledby="carouselModalCertificateLabel" aria-hidden="true">
    <article class="modal-dialog modal-fullscreen m-auto">
      <div class="modal-content">

        <!-- Modal Header -->
        <section class="modal-header">
          <h4 class="modal-title lead" id="carouselModalCertificateLabel">
            <b class="lead">{{ currentSlideTitle }}</b>
          </h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </section>

        <!-- Modal Carousel Body -->
        <section class="modal-body">
          <div id="carouselSlidesOnlyCertificateModal" class="carousel slide" data-bs-ride="carousel" @slide.bs.carousel="updateCurrentSlide">

            <div class="carousel-indicators position-absolute m-auto">
              <button
                v-for="(screenshot, index) in screenshots"
                :key="screenshot.id"
                type="button"
                data-bs-target="#carouselSlidesOnlyCertificateModal"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                aria-label="Slide {{ index + 1 }}"
              ></button>
            </div>

            <div class="carousel-inner position-relative">
              <div 
                v-for="(screenshot, index) in screenshots"
                :key="screenshot.id"
                :class="['carousel-item', { active: index === 0 }]"
              >
                <img 
                  class="d-block w-100" 
                  :src="(`src/assets/about/certificates/${screenshot.image}`)" 
                  :alt="screenshot.alt"
                >
              </div>
            </div>

            <!-- Modal Carousel Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlidesOnlyCertificateModal" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselSlidesOnlyCertificateModal" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

          </div>
        </section>
      </div>
    </article>
  </aside>
</template>

<script>
export default {
    name: "Image",
    data() {
        return {
            screenshots: [
                {
                    id: 1,
                    image: "Tech_Elevator_Certificate.pdf",
                    alt: "Certificate of Completion for Tech Elevator",
                    title: "Certificate of Completion for Tech Elevator"
                }
            ],
            slideTitles: [
                "Certificate of Completion for Tech Elevator",
            ],
            currentSlideIndex: 0
        };
    },
    computed: {
      // Computed property to get the current slide title
      currentSlideTitle() {
          return this.slideTitles[this.currentSlideIndex];
      }
    },
    methods: {
              // Method to update the current slide index on slide change
              updateCurrentSlide(event) {
            this.currentSlideIndex = event.to;
        }
    },
    mounted() {
        // Attach the slide event listener to the carousel after the component is mounted
        const carouselElement = document.getElementById('carouselSlidesOnlyBestBudsModal');
        carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);
    },
    beforeDestroy() {
        // Clean up the event listener before the component is destroyed
        const carouselElement = document.getElementById('carouselSlidesOnlyBestBudsModal');
        carouselElement.removeEventListener('slide.bs.carousel', this.updateCurrentSlide);
    } 
};
</script>

<style scoped>
.image {
  width: 25rem;
  height: 25rem;
  border-radius: 15px;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
}

.top-image,
.bottom-image {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: opacity 10s ease;
}

.top-image {
  z-index: 2; /* Ensures the top image is above the bottom image */
}

.image-container:hover .top-image {
  opacity: 0; /* Fade out top image */
}

.image-container:hover .bottom-image {
  opacity: 1; /* Ensure bottom image is visible */
}

.btn {
  width: 25rem;
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: 1px solid #7c7c8a;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1);
}

.btn:hover {
  font-size: 1.05rem;
  font-weight: 500;
  color: white;
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454);
  background-size: 500% 500%;
  border: 1px solid #cccce4;
  transform: translateY(-1px);
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.2);
  animation: gradient-animation 5s ease infinite;
}

/* Animation for button */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.modal {
  z-index: 1000;
}
</style>