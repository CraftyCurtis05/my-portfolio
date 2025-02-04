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
}
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
</style>