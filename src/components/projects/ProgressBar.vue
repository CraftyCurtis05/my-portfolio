<!-- Progress Bar Component -->
<template>
    <article class="progress-bar-container position-relative my-2">

        <section
            class="progress-bar position-relative"
            :style="{ width: progress + '%' }"
            title="Progress Completed"
        ><span class="progress-text position-absolute lead">{{ progress }}%</span>
        </section>

    </article>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        progress: {
            type: Number,
            required: true
        }
    }
};
</script>

<style scoped>
.progress-bar-container {
    width: 70%;
    height: 20px;
    background-color: #fff;
    border: 2px solid #505050;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
}

.progress-bar {
    height: 100%;
    background: linear-gradient(to right, #c2fdcf, #70d3fb, #bef454);
    background-size: 200% 200%;
    animation: gradient-animation 6s ease infinite, width-animation 4s ease backwards;
}

.progress-text {
    top: 50%;
    left: 50%;
    color: white;
    font-size: .9rem;
    font-weight: 500;
    transform: translate(-50%, -50%);
}

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

/* Extra Small (Mobile) */
@media (max-width: 480px) {
  /* Styles for phones in portrait mode */
}

/* Small (Mobile) */
@media (max-width: 600px) {
  /* Styles for phones in landscape mode */
}

/* Medium (Tablet) */
@media (max-width: 768px) {
  /* Styles for tablets in portrait mode */
}

/* Large (Tablet, Small Laptops) */
@media (max-width: 1024px) {
  /* Styles for small laptops and tablets in landscape mode */
}

/* Extra Large (Laptops, Desktops) */
@media (min-width: 1025px) {
  /* Styles for laptops and desktop screens */
}

/* Ultra Large (Wider Desktop Screens) */
@media (min-width: 1440px) {
  /* Styles for large desktop displays */
}
</style>