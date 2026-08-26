<!-- Certificates Component -->
<template>
  <div class="certificates">

    <!-- Resume -->
    <div class="btn-container">
      <a
        class="site-button certificate-button"
        href="/assets/images/about/jennifer_curtis_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="View my resume"
      >
        My Resume
      </a>
    </div>


    <!-- Certificates -->
    <div class="btn-container">
      <button
        class="site-button certificate-button"
        type="button"
        title="View my certificates"
        @click="openCertificateModal"
      >
        My Certificates
      </button>
    </div>


    <!-- Certificate Modal -->
    <BaseModal
      modal-id="carouselModalCertificate"
      label-id="carouselModalCertificateLabel"
      modal-class="certificate-modal"
      dialog-class="modal-lg"
      close-label="Close certificates"
    >

      <!-- Modal Title -->
      <template #title>
        <span
          aria-live="polite"
          aria-atomic="true"
        >
          {{ currentTitle }}
        </span>
      </template>


      <!-- Certificate Carousel -->
      <div
        id="carouselSlidesOnlyCertificateModal"
        class="carousel slide"
        role="region"
        aria-roledescription="carousel"
        aria-label="Professional certificates"
      >

        <!-- Carousel Indicators -->
        <div class="carousel-indicators">

          <button
            v-for="(certificate, index) in certificates"
            :key="`indicator-${certificate.id}`"
            type="button"
            data-bs-target="#carouselSlidesOnlyCertificateModal"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-current="
              index === 0
                ? 'true'
                : undefined
            "
            :aria-label="
              `Certificate ${index + 1}: ${certificate.title}`
            "
          ></button>

        </div>


        <!-- Certificate Images -->
        <div class="carousel-inner">

          <div
            v-for="(certificate, index) in certificates"
            :key="certificate.id"
            :class="[
              'carousel-item',
              { active: index === 0 }
            ]"
          >

            <!-- Zoom Viewport -->
            <div
              class="certificate-zoom-viewport"
              @wheel.prevent="
                handleImageWheel(
                  $event,
                  certificate.id
                )
              "
            >

              <!-- Zoom Control -->
              <button
                class="certificate-zoom-button"
                type="button"
                :class="{
                  'is-zoomed':
                    getImageZoom(
                      certificate.id
                    ) > 1
                }"
                :aria-label="
                  getImageZoom(
                    certificate.id
                  ) > 1
                    ? `Reset zoom for ${certificate.title}`
                    : `Zoom in on ${certificate.title}`
                "
                :title="
                  getImageZoom(
                    certificate.id
                  ) > 1
                    ? 'Click to reset zoom'
                    : 'Click where you want to zoom'
                "
                @click="
                  handleImageClick(
                    $event,
                    certificate.id
                  )
                "
              >
                <img
                  :src="
                    `/assets/images/about/certificates/${certificate.image}`
                  "
                  :alt="certificate.title"
                  :style="
                    getImageStyle(
                      certificate.id
                    )
                  "
                  loading="lazy"
                  decoding="async"
                >
              </button>

            </div>

          </div>

        </div>


        <!-- Previous Certificate -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselSlidesOnlyCertificateModal"
          data-bs-slide="prev"
          aria-label="Previous certificate"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>


        <!-- Next Certificate -->
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselSlidesOnlyCertificateModal"
          data-bs-slide="next"
          aria-label="Next certificate"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>

      </div>

    </BaseModal>

  </div>
</template>


<script>
import { Carousel, Modal } from 'bootstrap';

import BaseModal from '@/components/BaseModal.vue';

import certificates from '@/data/certificates';

import imageZoomMixin from '@/mixins/imageZoomMixin';

export default {
  name: "Certificates",

  components: {
    BaseModal
  },

  mixins: [
    imageZoomMixin
  ],


  emits: [
    'data-sent'
  ],


  data() {
    return {
      currentTitle:
        certificates[0]?.title || '',

      certificates
    };
  },


  methods: {

    /* Open Certificate Modal */
    openCertificateModal() {
      const modalElement =
        document.getElementById(
          'carouselModalCertificate'
        );

      if (!modalElement) {
        return;
      }

      this.resetAllImageZoom();

      this.currentTitle =
        this.certificates[0]?.title || '';

      Modal.getOrCreateInstance(
        modalElement
      ).show();
    },


    /* Update Current Certificate */
    updateCurrentSlide(event) {
      const certificate =
        this.certificates[event.to];

      this.resetAllImageZoom();

      if (certificate) {
        this.currentTitle =
          certificate.title;
      }
    },


    /* Handle Modal Open */
    handleModalOpen() {
      this.$emit(
        'data-sent',
        true
      );
    },


    /* Reset Certificate Modal */
    resetModal() {
      const carouselElement =
        document.getElementById(
          'carouselSlidesOnlyCertificateModal'
        );

      this.resetAllImageZoom();

      this.$emit(
        'data-sent',
        false
      );

      this.currentTitle =
        this.certificates[0]?.title || '';

      if (carouselElement) {
        Carousel.getInstance(
          carouselElement
        )?.to(0);
      }
    }
  },


  mounted() {
    const carouselElement =
      document.getElementById(
        'carouselSlidesOnlyCertificateModal'
      );

    const modalElement =
      document.getElementById(
        'carouselModalCertificate'
      );

    if (carouselElement) {
      carouselElement.addEventListener(
        'slide.bs.carousel',
        this.updateCurrentSlide
      );
    }

    if (modalElement) {
      modalElement.addEventListener(
        'shown.bs.modal',
        this.handleModalOpen
      );

      modalElement.addEventListener(
        'hidden.bs.modal',
        this.resetModal
      );
    }
  },


  beforeUnmount() {
    const carouselElement =
      document.getElementById(
        'carouselSlidesOnlyCertificateModal'
      );

    const modalElement =
      document.getElementById(
        'carouselModalCertificate'
      );

    if (carouselElement) {
      carouselElement.removeEventListener(
        'slide.bs.carousel',
        this.updateCurrentSlide
      );

      Carousel.getInstance(
        carouselElement
      )?.dispose();
    }

    if (modalElement) {
      modalElement.removeEventListener(
        'shown.bs.modal',
        this.handleModalOpen
      );

      modalElement.removeEventListener(
        'hidden.bs.modal',
        this.resetModal
      );

      Modal.getInstance(
        modalElement
      )?.dispose();
    }
  }
};
</script>


<style>
/* ========================================
   Resume & Certificate Buttons
======================================== */

.certificates {
  display: flex;
  flex-direction: column;

  width: 100%;
}

.certificates .btn-container {
  display: flex;
  justify-content: center;

  width: 100%;
}

.certificate-button {
  width:
    clamp(10rem, 20vw, 20rem);

  margin-block: .25rem;
}


/* ========================================
   Certificate Modal
======================================== */

.certificate-modal .modal-dialog {
  width:
    min(94vw, 1200px);

  max-width: none;

  margin:
    1rem
    auto;
}

.certificate-modal .modal-content {
  max-height:
    calc(100vh - 2rem);

  overflow: hidden;
}

.certificate-modal .modal-header {
  flex-shrink: 0;
}

.certificate-modal .modal-title {
  padding-right: 1rem;

  font-size:
    clamp(1rem, 1.3vw, 1.5rem);

  font-weight: 500;
}

.certificate-modal .modal-body {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 0;
  height:
    calc(100vh - 7rem);

  padding: 1rem;

  overflow: hidden;
}


/* ========================================
   Certificate Carousel
======================================== */

.certificate-modal .carousel {
  width: 100%;
  height: 100%;
}

.certificate-modal .carousel-inner {
  width: 100%;
  height: 100%;

  overflow: hidden;
}

.certificate-modal .carousel-item {
  width: 100%;
  height: 100%;
}

.certificate-modal .carousel-item.active {
  display: flex;
  justify-content: center;
  align-items: center;
}


/* ========================================
   Certificate Zoom Viewport
======================================== */

.certificate-modal
.certificate-zoom-viewport {
  width: 100%;
  height: 100%;

  overflow: hidden;

  overscroll-behavior: contain;
}


/* ========================================
   Certificate Zoom Button
======================================== */

.certificate-modal
.certificate-zoom-button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 0;

  overflow: hidden;

  background: transparent;

  border: 0;

  cursor: zoom-in;
}

.certificate-modal
.certificate-zoom-button.is-zoomed {
  cursor: zoom-out;
}

.certificate-modal
.certificate-zoom-button:focus-visible {
  outline:
    3px solid
    var(--color-accent-blue);

  outline-offset: -3px;
}


/* ========================================
   Certificate Image
======================================== */

.certificate-modal
.certificate-zoom-button img {
  display: block;

  width: 100%;
  height: 100%;

  max-width: 100%;
  max-height: 100%;

  margin: auto;

  object-fit: contain;

  user-select: none;

  will-change: transform;

  transition:
    transform .2s ease,
    filter .3s ease-in-out;
}


/* ========================================
   Certificate Image - Dark Theme
======================================== */

:root[data-theme="dark"]
.certificate-modal
.certificate-zoom-button img {
  filter:
    brightness(.8);
}


/* ========================================
   Carousel Indicators
======================================== */

.certificate-modal
.carousel-indicators {
  top: auto;
  bottom: .5rem;

  z-index: 5;
}


/* ========================================
   Carousel Controls
======================================== */

.certificate-modal
.carousel-control-prev,
.certificate-modal
.carousel-control-next {
  top: 0;

  width: 7%;
  height: 100%;

  z-index: 4;
}


/* ========================================
   Resume & Certificate Buttons - Tablet
======================================== */

@media (min-width: 601px) and (max-width: 900px) {
  .certificates {
    flex-direction: row;
    justify-content: center;

    gap: 1rem;
  }

  .certificates .btn-container {
    width: auto;
  }

  .certificate-button {
    width:
      clamp(10rem, 30vw, 16rem);
  }
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 900px) {
  .certificate-modal .modal-dialog {
    width: 96vw;

    margin:
      .75rem
      auto;
  }

  .certificate-modal .modal-content {
    max-height:
      calc(100vh - 1.5rem);
  }

  .certificate-modal .modal-body {
    height:
      calc(100vh - 6.5rem);

    padding: .75rem;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .certificate-button {
    width: 100%;
  }

  .certificate-modal .modal-dialog {
    width: 98vw;

    margin:
      .5rem
      auto;
  }

  .certificate-modal .modal-content {
    max-height:
      calc(100vh - 1rem);
  }

  .certificate-modal .modal-header {
    padding: .75rem;
  }

  .certificate-modal .modal-body {
    height:
      calc(100vh - 5.5rem);

    padding: .5rem;
  }

  .certificate-modal .modal-title {
    font-size: .95rem;
  }

  .certificate-modal
  .carousel-indicators {
    bottom: .25rem;
  }

  .certificate-modal
  .carousel-control-prev-icon,
  .certificate-modal
  .carousel-control-next-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .certificate-modal
  .certificate-zoom-button img {
    transition: none;
  }
}
</style>