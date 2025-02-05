<!-- About Me Component -->
<template>

    <!-- About Me Section -->
    <article class="row px-5">

      <!-- About Me Text -->
      <section class="text-container lead">
        <p class="title ml-1">About Jennifer Curtis</p>
        <hr>
        <p class="about py-2">
          <b><em>I’m a full-stack web developer from Columbus, Ohio, with a passion for creating apps that are as clever as they are easy to use—where code meets creativity!</em></b>
        </p>
        <p class="background pb-1">
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
.text-container {
  width: 50vw;
  background-color: #dadae2;
  z-index: 1;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  margin: -1.2rem;
}

.about {
  font-size: 1.1rem;
}

.background {
  font-size: 1.05rem;
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