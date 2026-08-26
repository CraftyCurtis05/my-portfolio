<!-- Loading Dots Component -->
<template>
  <div
    class="loading-dots"
    role="status"
    aria-live="polite"
  >

    <span
      class="loading-dot loading-dot-green"
      aria-hidden="true"
    ></span>

    <span
      class="loading-dot loading-dot-blue"
      aria-hidden="true"
    ></span>

    <span
      class="loading-dot loading-dot-lime"
      aria-hidden="true"
    ></span>

    <span class="visually-hidden">
      Loading
    </span>

  </div>
</template>


<script>
export default {
  name: "LoadingDots"
};
</script>


<style scoped>
/* ========================================
   Loading Dots
======================================== */

.loading-dots {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  gap: .4rem;
}

.loading-dot {
  width: .6rem;
  height: .6rem;

  border-radius: 50%;

  opacity: .45;

  transform:
    translateY(0);

  animation:
    loading-dot-animation
    1.2s
    ease-in-out
    infinite;
}


/* ========================================
   Loading Dot Colors
======================================== */

.loading-dot-green {
  background-color:
    var(--color-accent-green);

  animation-delay: 0s;
}

.loading-dot-blue {
  background-color:
    var(--color-accent-blue);

  animation-delay: .15s;
}

.loading-dot-lime {
  background-color:
    var(--color-accent-lime);

  animation-delay: .3s;
}


/* ========================================
   Loading Animation
======================================== */

@keyframes loading-dot-animation {
  0%,
  60%,
  100% {
    opacity: .45;

    transform:
      translateY(0)
      scale(.95);
  }

  30% {
    opacity: 1;

    transform:
      translateY(-.2rem)
      scale(1.08);
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .loading-dot {
    opacity: .75;

    animation: none;
  }
}
</style>