<!-- About Me Component -->
<template>
  <aside class="container d-flex flex-column mb-5">
    
    <!-- About Me Section -->
    <article class="row">

      <!-- About Me Picture -->
      <section class="picture d-flex flex-column align-items-center mt-3">
        <img src="@/assets/about/portfolio_portrait_temp.jpg" alt="Picture of Jennifer Curtis" title="Jennifer Curtis"/>
        <div class="mt-3">
          <a class="btn text-align-center" href="src/assets/about/jennifer_curtis_resume.pdf" target="_blank" title="Click to View My Resume">
            My Resume
          </a>
        </div>
      </section>

      <!-- About Me Text -->
      <section class="text-container col-lg-6 col-md-8 col-sm-12 p-4">
        <p class="title lead ml-1">About Jennifer Curtis</p>
        <hr>
        <p class="about lead ">
          <b><em>I’m a full-stack web developer from Columbus, Ohio, with a passion for creating apps that are as clever as they are easy to use—where code meets creativity!</em></b>
        </p>
        <p class="background lead">
          After completing Tech Elevator’s bootcamp, I’ve worked on projects like dispensary locators and inventory systems, honing my coding and leadership skills. With a background in business management, I bring strong communication and problem-solving to every project. Outside of coding, I’m all about remodeling, perfecting my coffee brew, and curating playlists for inspiration.
        </p>
        <hr>
        <span class="sell lead text-center">
          <b>If you're looking for a passionate, collaborative developer, let's create something amazing together!</b>
        </span>
      </section>

      <!-- Experience Timeline -->
      <section class="timeline">
        <ExperienceTimeline/>
      </section>

    </article>

  </aside>
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
  width: 100vw;
}

.picture {
  width: 30%;
}

.picture img {
  width: 100%;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
}

.btn {
  width: 10rem;
  font-size: 1rem;
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: .1rem solid #7c7c8a;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  font-size: 1.05rem;
  font-weight: 500;
  color: white;
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454);
  background-size: 500% 500%;
  border: .1vw solid #cccce4;
  transform: translateY(-1px);
  animation: gradient-animation 5s ease infinite;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.2);
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
  width: 45%;
}
.title {
  font-size: 1.5rem;
  font-weight: 500;
  margin: -1.2rem;
}

.text-container hr {

}

.about {
  font-size: 1.1rem;
  padding: .5rem 0;
}

.background {
  font-size: 1.05rem;
}

.sell {

}

.timeline {
  width: 25%;
}
</style>