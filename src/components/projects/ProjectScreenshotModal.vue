<!-- Project Screenshot Modal Component -->
<template>
  <BaseModal
    :modal-id="modalId"
    :label-id="labelId"
    modal-class="project-screenshot-modal"
    dialog-class="modal-lg"
    :close-label="
      `Close ${projectName} screenshots`
    "
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


    <!-- Screenshot Carousel -->
    <div
      :id="carouselId"
      class="carousel slide"
      role="region"
      aria-roledescription="carousel"
      :aria-label="
        `${projectName} screenshots`
      "
    >

      <!-- Carousel Indicators -->
      <div
        v-if="screenshots.length > 1"
        class="carousel-indicators"
      >
        <button
          v-for="(screenshot, index) in screenshots"
          :key="`indicator-${screenshot.id}`"
          type="button"
          :data-bs-target="
            `#${carouselId}`
          "
          :data-bs-slide-to="index"
          :class="{
            active:
              index === 0
          }"
          :aria-current="
            index === 0
              ? 'true'
              : undefined
          "
          :aria-label="
            `Screenshot ${index + 1}: ${screenshot.alt}`
          "
        ></button>
      </div>


      <!-- Screenshot Images -->
      <div class="carousel-inner">

        <div
          v-for="(screenshot, index) in screenshots"
          :key="screenshot.id"
          :class="[
            'carousel-item',
            {
              active:
                index === 0
            }
          ]"
        >

          <!-- Zoom Viewport -->
          <div
            class="screenshot-zoom-viewport"
            @wheel.prevent="
              handleImageWheel(
                $event,
                screenshot.id
              )
            "
          >

            <!-- Zoom Control -->
            <button
              class="screenshot-zoom-button"
              type="button"
              :class="{
                'is-zoomed':
                  getImageZoom(
                    screenshot.id
                  ) > 1
              }"
              :aria-label="
                getImageZoom(
                  screenshot.id
                ) > 1
                  ? `Reset zoom for ${screenshot.alt}`
                  : `Zoom in on ${screenshot.alt}`
              "
              :title="
                getImageZoom(
                  screenshot.id
                ) > 1
                  ? 'Click to reset zoom'
                  : 'Click where you want to zoom'
              "
              @click="
                handleImageClick(
                  $event,
                  screenshot.id
                )
              "
            >
              <img
                :src="
                  `${imagePath}${screenshot.image}`
                "
                :alt="screenshot.alt"
                :style="
                  getImageStyle(
                    screenshot.id
                  )
                "
                loading="lazy"
                decoding="async"
              >
            </button>

          </div>

        </div>

      </div>


      <!-- Previous Screenshot -->
      <button
        v-if="screenshots.length > 1"
        class="carousel-control-prev"
        type="button"
        :data-bs-target="
          `#${carouselId}`
        "
        data-bs-slide="prev"
        aria-label="Previous screenshot"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
      </button>


      <!-- Next Screenshot -->
      <button
        v-if="screenshots.length > 1"
        class="carousel-control-next"
        type="button"
        :data-bs-target="
          `#${carouselId}`
        "
        data-bs-slide="next"
        aria-label="Next screenshot"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
      </button>

    </div>

  </BaseModal>
</template>


<script>
import { Carousel, Modal } from 'bootstrap';

import BaseModal from '@/components/BaseModal.vue';

import imageZoomMixin from '@/mixins/imageZoomMixin';

export default {
  name: "ProjectScreenshotModal",

  components: {
    BaseModal
  },


  mixins: [
    imageZoomMixin
  ],


  props: {
    modalName: {
      type: String,
      required: true
    },

    projectName: {
      type: String,
      required: true
    },

    screenshots: {
      type: Array,
      required: true
    },

    imagePath: {
      type: String,
      required: true
    }
  },


  data() {
    return {
      currentTitle: ''
    };
  },


  computed: {

    /* Get Modal ID */
    modalId() {
      return `carouselModal${this.modalName}`;
    },


    /* Get Modal Label ID */
    labelId() {
      return `${this.modalId}Label`;
    },


    /* Get Carousel ID */
    carouselId() {
      return `carouselSlidesOnly${this.modalName}Modal`;
    }
  },


  methods: {

    /* Reset Modal Before Open */
    resetForOpen() {
      this.resetAllImageZoom();

      this.currentTitle =
        this.screenshots[0]?.title ||
        '';
    },


    /* Update Current Screenshot */
    updateCurrentSlide(event) {
      this.resetAllImageZoom();

      const screenshot =
        this.screenshots[
          event.to
        ];

      if (screenshot) {
        this.currentTitle =
          screenshot.title;
      }
    },


    /* Reset Screenshot Modal */
    resetModal() {
      const carouselElement =
        document.getElementById(
          this.carouselId
        );

      this.resetAllImageZoom();

      this.currentTitle =
        this.screenshots[0]?.title ||
        '';

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
        this.carouselId
      );

    const modalElement =
      document.getElementById(
        this.modalId
      );

    if (carouselElement) {
      carouselElement.addEventListener(
        'slide.bs.carousel',
        this.updateCurrentSlide
      );
    }

    if (modalElement) {
      modalElement.addEventListener(
        'show.bs.modal',
        this.resetForOpen
      );

      modalElement.addEventListener(
        'hidden.bs.modal',
        this.resetModal
      );
    }

    this.currentTitle =
      this.screenshots[0]?.title ||
      '';
  },


  beforeUnmount() {
    const carouselElement =
      document.getElementById(
        this.carouselId
      );

    const modalElement =
      document.getElementById(
        this.modalId
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
        'show.bs.modal',
        this.resetForOpen
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