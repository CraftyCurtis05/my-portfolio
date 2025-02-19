<!-- About Me Component -->
<template>

    <!-- About Me Section -->
    <article class="row p-0 m-0">

      <!-- About Me Text -->
      <section class="text-container lead d-flex flex-column">
        <p class="title">About Jennifer Curtis</p>
        <hr>
        <p class="about">
          <b><em>I’m a full-stack web developer from Columbus, Ohio, with a passion for creating apps that are as clever as they are easy to use—where code meets creativity!</em></b>
        </p>
        <p class="background">
          After completing Tech Elevator’s bootcamp, I’ve worked on projects like dispensary locators and inventory systems, honing my coding and leadership skills. 
          With a background in business management, I bring strong communication and problem-solving to every project. 
          Outside of coding, I’m all about remodeling, perfecting my coffee brew and curating playlists for inspiration.
        </p>
        <hr>
        <span class="sell">
          <b>If you're looking for a passionate, collaborative developer, let's create something amazing together!</b>
        </span>
      </section>

    </article>
  </template>

<script>
import Timeline from './Timeline.vue';

export default {
    name: "AboutMe",
    components: {
      Timeline
    }
};
</script>

<style scoped>
@media (min-width: 1000px) {
  .text-container {
    width: 90%;
    background-color: transparent;
    background-size: contain;
    z-index: 10;
  }

  .title {
    font-size: clamp(1.1rem, 1.5vw, 2.5rem);
    font-weight: 500;
    margin-block: -.5vw;
  }

  .about {
    font-size: clamp(1rem, 1.25vw, 1.9rem);
  }

  .background {
    font-size: clamp(.95rem, 1.2vw, 1.8rem);
  }

  .sell {
    font-size: clamp(1rem, 1.25vw, 1.9rem);
    margin-block: -.5vw;
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