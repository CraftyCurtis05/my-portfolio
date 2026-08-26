<!-- Image Component -->
<template>
  <div class="image-container">

    <!-- Hover Image -->
    <button
      class="image"
      :class="{
        'no-hover':
          receivedData ||
          imageModalOpen
      }"
      type="button"
      aria-label="Open profile image"
      title="Click to enlarge"
      @click="openImageModal"
    >
      <img
        src="/assets/images/about/images/top_image.webp"
        class="top-image"
        alt="Jennifer Curtis"
      >

      <img
        src="/assets/images/about/images/bottom_image.webp"
        class="bottom-image"
        alt=""
        aria-hidden="true"
      >
    </button>


    <!-- Image Modal -->
    <BaseModal
      modal-id="aboutImageModal"
      label-id="aboutImageModalLabel"
      dialog-class="modal-dialog-centered"
      close-label="Close image"
    >

      <!-- Modal Title -->
      <template #title>
        Jennifer Curtis
      </template>


      <!-- Zoom Viewport -->
      <div
        class="image-zoom-viewport"
        @wheel.prevent="
          handleImageWheel(
            $event,
            'profile'
          )
        "
      >

        <!-- Zoom Control -->
        <button
          class="modal-image-button"
          type="button"
          :class="{
            'is-zoomed':
              getImageZoom('profile') > 1
          }"
          :aria-label="
            imageZoom.scale > 1
              ? 'Reset profile image zoom'
              : 'Zoom in on profile image'
          "
          :title="
            getImageZoom('profile') > 1
              ? 'Click to reset zoom'
              : 'Click where you want to zoom'
          "
          @click="
            handleImageClick(
              $event,
              'profile'
            )
          "
        >
          <img
            src="/assets/images/about/images/top_image.webp"
            class="modal-image"
            alt="Jennifer Curtis"
            :style="
              getImageStyle(
                'profile'
              )
            "
          >
        </button>

      </div>

    </BaseModal>

  </div>
</template>


<script>
import { Modal } from 'bootstrap';

import BaseModal from '@/components/BaseModal.vue';

import imageZoomMixin from '@/mixins/imageZoomMixin';

export default {
  name: "ProfileImage",

  components: {
    BaseModal
  },

  mixins: [
    imageZoomMixin
  ],


  props: {
    receivedData: {
      type: Boolean,
      required: true
    }
  },


  data() {
    return {
      imageModalOpen: false
    };
  },


  methods: {

    /* Open Image Modal */
    openImageModal() {
      const modalElement =
        document.getElementById(
          'aboutImageModal'
        );

      if (!modalElement) {
        return;
      }

      this.resetImageZoom(
        'profile'
      );

      /*
       * Keep the professional image visible while
       * its full-size modal is open.
       */
      this.imageModalOpen = true;

      Modal.getOrCreateInstance(
        modalElement
      ).show();
    },


    /* Reset Image Modal */
    resetModal() {
      this.resetImageZoom(
        'profile'
      );

      this.imageModalOpen = false;
    }
  },


  mounted() {
    const modalElement =
      document.getElementById(
        'aboutImageModal'
      );

    if (modalElement) {
      modalElement.addEventListener(
        'hidden.bs.modal',
        this.resetModal
      );
    }
  },


  beforeUnmount() {
    const modalElement =
      document.getElementById(
        'aboutImageModal'
      );

    if (modalElement) {
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


<style scoped>
/* ========================================
   Image Container
======================================== */

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
}


/* ========================================
   Image Button
======================================== */

.image {
  position: relative;

  width:
    clamp(15rem, 20vw, 24rem);

  aspect-ratio: 1 / 1;

  padding: 0;

  overflow: hidden;

  background: transparent;

  border: 0;
  border-radius: 1rem;

  box-shadow:
    0 .3rem .55rem
    var(--color-shadow);

  cursor: zoom-in;

  isolation: isolate;

  transition:
    transform .25s ease,
    box-shadow .25s ease;
}


/* ========================================
   Image Layers
======================================== */

.top-image,
.bottom-image {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: inherit;

  /*
   * These images are visual layers only.
   * The parent button handles all interaction.
   */
  pointer-events: none;
  user-select: none;

  transition:
    opacity 5s ease;
}

.top-image {
  opacity: 1;

  z-index: 2;
}

.bottom-image {
  opacity: 1;

  z-index: 1;
}


/* ========================================
   Hover State
======================================== */

.image:not(.no-hover):hover
.top-image {
  opacity: 0;
}

.image:not(:hover)
.top-image {
  opacity: 1;
}

.image:focus-visible {
  outline:
    3px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}


/* ========================================
   Modal / Disabled Hover State
======================================== */

/*
 * Keep the professional image visible while
 * either the certificate modal or image modal
 * is open.
 */
.image.no-hover
.top-image {
  opacity: 1;

  transition: none;
}

.image.no-hover
.bottom-image {
  opacity: 0;
}


/* ========================================
   Image Modal
======================================== */

:deep(.modal-dialog) {
  width:
    min(94vw, 900px);

  max-width: none;

  margin:
    1rem
    auto;
}

:deep(.modal-content) {
  max-height:
    calc(100vh - 2rem);

  overflow: hidden;
}

:deep(.modal-header) {
  flex-shrink: 0;
}

:deep(.modal-title) {
  font-size:
    clamp(
      1rem,
      1.3vw,
      1.4rem
    );

  font-weight: 500;
}

:deep(.modal-body) {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 0;

  padding: 1rem;

  overflow: hidden;
}


/* ========================================
   Zoom Viewport
======================================== */

.image-zoom-viewport {
  width: 100%;

  height:
    calc(100vh - 8rem);

  overflow: hidden;

  overscroll-behavior: contain;
}


/* ========================================
   Modal Image Button
======================================== */

.modal-image-button {
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

.modal-image-button.is-zoomed {
  cursor: zoom-out;
}

.modal-image-button:focus-visible {
  outline:
    3px solid
    var(--color-accent-blue);

  outline-offset: -3px;
}


/* ========================================
   Modal Image
======================================== */

.modal-image {
  display: block;

  width: auto;
  height: auto;

  max-width: 100%;
  max-height: 100%;

  object-fit: contain;

  pointer-events: none;
  user-select: none;

  will-change: transform;

  transition:
    transform .2s ease;
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 1100px) {
  .image {
    width:
      clamp(
        14rem,
        28vw,
        19rem
      );
  }
}


/* ========================================
   Smaller Tablet
======================================== */

@media (max-width: 768px) {
  .image {
    width:
      min(
        18rem,
        65vw
      );
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .image {
    width:
      min(
        17rem,
        82vw
      );
  }

  :deep(.modal-dialog) {
    width: 98vw;

    margin:
      .5rem
      auto;
  }

  :deep(.modal-content) {
    max-height:
      calc(100vh - 1rem);
  }

  :deep(.modal-header) {
    padding: .75rem;
  }

  :deep(.modal-body) {
    padding: .5rem;
  }

  .image-zoom-viewport {
    height:
      calc(100vh - 6rem);
  }
}


/* ========================================
   Touch Interaction
======================================== */

@media (hover: none) and
       (pointer: coarse) {

  /*
   * Keep the professional image visible
   * when touch devices simulate hover.
   */
  .image:not(.no-hover):hover
  .top-image {
    opacity: 1;
  }


  /*
   * Briefly reveal the creative image
   * while the profile image is pressed.
   */
  .image:not(.no-hover):active
  .top-image {
    opacity: .3;
  }

  .image:active {
    transform:
      scale(.985);

    box-shadow:
      0 .2rem .4rem
      var(--color-shadow);
  }

  .top-image,
  .bottom-image {
    transition:
      opacity .2s ease;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .image,
  .top-image,
  .bottom-image,
  .modal-image {
    transition: none;
  }
}
</style>