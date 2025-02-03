<!-- About Me Component -->
<template>

    <!-- About Me Section -->
    <article class="row mx-auto">

      <!-- About Me Picture -->
      <section class="container position-relative d-flex flex-column justify-content-center p-0 m-0 mx-auto">
        <div class="image-container position-relative">
          <img 
            src="@/assets/about/generated_pic.webp" 
            class="top-image img-fluid position-absolute" 
            alt="Picture of Jennifer Curtis" 
            title="Jennifer Curtis"
          />
          <img 
            src="@/assets/about/portfolio_portrait_temp.jpg" 
            class="bottom-image img-fluid position-absolute" 
            alt="Picture of Jennifer Curtis" 
            title="Jennifer Curtis"
          />
        </div>
        <div class="btn-container d-flex justify-content-center mt-2">
          <a 
            class="btn position-absolute mx-auto"
            href="src/assets/about/jennifer_curtis_resume.pdf" 
            target="_blank" 
            title="Click to View My Resume"
          >
            My Resume
          </a>
        </div>
      </section>

      <!-- About Me Text -->
      <section class="text-container lead d-flex flex-column justify-content-center m-0 p-0 mx-auto">
        <p class="title ml-1">About Jennifer Curtis</p>
        <hr>
        <p class="about py-2">
          <b><em>I’m a full-stack web developer from Columbus, Ohio, with a passion for creating apps that are as clever as they are easy to use—where code meets creativity!</em></b>
        </p>
        <p class="background pb-1">
          After completing Tech Elevator’s bootcamp, I’ve worked on projects like dispensary locators and inventory systems, honing my coding and leadership skills. With a background in business management, I bring strong communication and problem-solving to every project. Outside of coding, I’m all about remodeling, perfecting my coffee brew, and curating playlists for inspiration.
        </p>
        <hr>
        <span class="sell">
          <b>If you're looking for a passionate, collaborative developer, let's create something amazing together!</b>
        </span>
      </section>

      <!-- Experience Timeline -->
      <section class="timeline">
        <ExperienceTimeline/>
      </section>

    </article>
  </template>


<script>
import ExperienceTimeline from './Timeline.vue';

export default {
    name: "AboutMe",
    components: {
      ExperienceTimeline
    }
}
</script>

<style scoped>
.container {
  width: 25vw;
}

.image-container {
  width: 100%;
  height: 70%;
  overflow: hidden;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
}

.top-image,
.bottom-image {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: opacity 10s ease;
}

.top-image {
  z-index: 2; /* Ensures the top image is above the bottom image */
}

.image-container:hover .top-image {
  opacity: 0; /* Fade out top image */
}

.image-container:hover .bottom-image {
  opacity: 1; /* Ensure bottom image is visible */
}

.btn {
  width: 25vw;
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: 1px solid #7c7c8a;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1);
}

.btn:hover {
  font-size: 1.05rem;
  font-weight: 500;
  color: white;
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454);
  background-size: 500% 500%;
  border: 1px solid #cccce4;
  transform: translateY(-1px);
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.2);
  animation: gradient-animation 5s ease infinite;
}

/* Animation for button */
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

.text-container {
  width: 40vw;
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

.timeline {
  width: 30vw;
}
</style>