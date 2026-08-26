<!-- Back to Top Component -->
<template>
  <button
    v-show="showButton"
    class="back-to-top"
    type="button"
    aria-label="Back to top"
    title="Back to top"
    @click="scrollToTop"
  >
    <img
      class="top-icon top-icon-default"
      :src="
        theme === 'light'
          ? '/assets/images/icons/light_theme/up_arrow_light.webp'
          : '/assets/images/icons/dark_theme/up_arrow_dark.webp'
      "
      alt=""
      aria-hidden="true"
    >

    <img
      class="top-icon top-icon-hover"
      :src="
        theme === 'light'
          ? '/assets/images/icons/dark_theme/up_arrow_dark.webp'
          : '/assets/images/icons/light_theme/up_arrow_light.webp'
      "
      alt=""
      aria-hidden="true"
    >
  </button>
</template>


<script>
export default {
  name: "BackToTop",

  props: {
    theme: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      showButton: false
    };
  },


  methods: {

    /* Check Scroll Position */
    handleScroll() {
      this.showButton =
        window.scrollY > 400;
    },


    /* Return to Top of Page */
    scrollToTop() {
      const reduceMotion =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

      window.scrollTo({
        top: 0,
        behavior:
          reduceMotion
            ? 'auto'
            : 'smooth'
      });
    }
  },


  mounted() {
    window.addEventListener(
      'scroll',
      this.handleScroll,
      {
        passive: true
      }
    );

    this.handleScroll();
  },


  beforeUnmount() {
    window.removeEventListener(
      'scroll',
      this.handleScroll,
      {
        passive: true
      }
    );
  }
};
</script>


<style scoped>
/* ========================================
   Back to Top Button
======================================== */

.back-to-top {
  position: fixed;

  right:
    clamp(1rem, 2vw, 2rem);

  bottom:
    clamp(2.5rem, 4vw, 4rem);

  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 3.5rem;
  height: 3.5rem;

  padding: 0;

  background: transparent;

  border: 0;

  opacity: .5;

  cursor: pointer;

  isolation: isolate;

  z-index: 3000;

  transition:
    opacity .3s ease-in-out,
    transform .3s ease-in-out;
}

.back-to-top::before {
  content: "";

  position: absolute;

  inset: .25rem;

  background-image:
    var(--accent-gradient);

  background-size:
    300% 300%;

  border-radius: 50%;

  opacity: 0;

  filter:
    blur(.45rem);

  pointer-events: none;

  transform:
    scale(.8);

  transition:
    opacity .3s ease-in-out,
    transform .3s ease-in-out;

  z-index: -1;
}

.back-to-top:hover::before,
.back-to-top:focus-visible::before {
  opacity: .35;

  transform:
    scale(1);

  animation:
    gradient-animation
    5s
    ease
    infinite;
}

.back-to-top:hover,
.back-to-top:focus-visible {
  opacity: .85;

  transform:
    scale(1.12);
}

.back-to-top:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}


/* ========================================
   Back to Top Icon
======================================== */

.top-icon {
  width: 2.25rem;
  height: 2.25rem;

  object-fit: contain;

  transition:
    opacity .3s ease-in-out;
}

.top-icon-default {
  opacity: 1;
}

.top-icon-hover {
  position: absolute;

  opacity: 0;
}


/* ========================================
   Icon Hover & Focus
======================================== */

.back-to-top:hover .top-icon-default,
.back-to-top:focus-visible .top-icon-default {
  opacity: 0;
}

.back-to-top:hover .top-icon-hover,
.back-to-top:focus-visible .top-icon-hover {
  opacity: 1;
}


/* ========================================
   Touch Interaction
======================================== */

@media (hover: none) and
       (pointer: coarse) {

  .back-to-top:active {
    opacity: .85;

    transform:
      scale(.94);
  }

  .back-to-top:active::before {
    opacity: .4;

    transform:
      scale(.9);
  }

  .back-to-top:active
  .top-icon-default {
    opacity: 0;
  }

  .back-to-top:active
  .top-icon-hover {
    opacity: 1;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .back-to-top {
    right: 1rem;
    bottom: 2rem;

    width: 3rem;
    height: 3rem;
  }

  .top-icon {
    width: 2rem;
    height: 2rem;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .back-to-top,
  .back-to-top::before,
  .top-icon {
    transition: none;
    animation: none;
  }
}
</style>