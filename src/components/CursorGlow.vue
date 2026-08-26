<!-- Cursor Glow Component -->
<template>
  <div
    v-show="isVisible"
    class="cursor-glow"
    :class="{
      'is-interactive':
        isInteractive
    }"
    :style="cursorStyle"
    aria-hidden="true"
  ></div>
</template>


<script>
export default {
  name: "CursorGlow",


  data() {
    return {
      mouseX: 0,
      mouseY: 0,

      isVisible: false,
      isInteractive: false,

      supportsCursor: true
    };
  },


  computed: {

    /* Cursor Glow Position */
    cursorStyle() {
      return {
        left:
          `${this.mouseX}px`,

        top:
          `${this.mouseY}px`
      };
    }
  },


  methods: {

    /* Check Cursor Support */
    checkCursorSupport() {
      this.supportsCursor =
        window.matchMedia(
          '(any-hover: hover) and (any-pointer: fine)'
        ).matches;
    },


    /* Update Cursor Position */
    handleMouseMove(event) {
      this.mouseX =
        event.clientX;

      this.mouseY =
        event.clientY;

      this.isVisible = true;

      this.checkInteractiveElement(
        event.target
      );
    },


    /* Check Interactive Element */
    checkInteractiveElement(target) {
      if (!(target instanceof Element)) {
        this.isInteractive = false;

        return;
      }

      this.isInteractive =
        Boolean(
          target.closest(
            `
              a,
              button,
              [role="button"]
            `
          )
        );
    },


    /* Hide Cursor Glow */
    hideCursorGlow() {
      this.isVisible = false;

      this.isInteractive = false;
    }
  },


  mounted() {
    this.checkCursorSupport();

    if (!this.supportsCursor) {
      return;
    }

    window.addEventListener(
      'mousemove',
      this.handleMouseMove
    );

    document.addEventListener(
      'mouseleave',
      this.hideCursorGlow
    );
  },


  beforeUnmount() {
    if (!this.supportsCursor) {
      return;
    }

    window.removeEventListener(
      'mousemove',
      this.handleMouseMove
    );

    document.removeEventListener(
      'mouseleave',
      this.hideCursorGlow
    );
  }
};
</script>


<style scoped>
/* ========================================
   Cursor Glow
======================================== */

.cursor-glow {
  position: fixed;

  width: 1.4rem;
  height: 1.4rem;

  background-image:
    radial-gradient(
      circle,
      var(--color-accent-blue) 0%,
      var(--color-accent-green) 35%,
      var(--color-accent-lime) 60%,
      transparent 78%
    );

  background-size:
    300% 300%;

  border-radius: 50%;

  opacity: .28;

  filter:
    blur(.22rem);

  pointer-events: none;

  transform:
    translate(-50%, -50%)
    scale(1);

  transition:
    width .25s ease,
    height .25s ease,
    opacity .25s ease,
    filter .25s ease;

  animation:
    gradient-animation
    4s
    ease
    infinite;

  z-index: 9999;
}


/* ========================================
   Interactive State
======================================== */

.cursor-glow.is-interactive {
  width: 1.9rem;
  height: 1.9rem;

  opacity: .42;

  filter:
    blur(.28rem);
}


/* ========================================
   Touch Devices
======================================== */

@media (any-hover: none) and
       (any-pointer: coarse) {
  .cursor-glow {
    display: none;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .cursor-glow {
    display: none;
  }
}
</style>