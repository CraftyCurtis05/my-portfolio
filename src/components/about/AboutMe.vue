<!-- About Me Component -->
<template>
  <aside class="container d-flex flex-column align-items-center mb-5">

    <article class="row d-flex justify-content-center">

      <!-- About Me Text -->
      <section class="text-container row col-sm-6 mt-4 p-4">
        <h4>About Me</h4>
        <hr>
        <p>
          <span class="lead">Hi there! I’m Jennifer, a full-stack web developer with a strong focus on problem-solving and building dynamic, user-friendly applications.</span>
          <br><br>
          <span class="lead">I completed Tech Elevator's Full-Stack Java Bootcamp, where I gained hands-on experience working with technologies like Java, Vue3, and PostgreSQL. I’ve had the opportunity to lead teams in creating impactful projects like a dispensary locator and an inventory management system, which not only honed my coding skills but also sharpened my leadership and mentoring abilities.</span>
          <br><br>
          <span class="lead">Before diving into tech, I spent over 10 years in business management, where I developed crucial skills in communication, conflict resolution, and customer satisfaction. This background has been invaluable in my approach to both teamwork and client relations. My journey also took me through architecture studies at Ohio State University, which refined my attention to detail and creative problem-solving — skills I apply every day in my development work.</span>
          <br><br>
          <span class="lead">When I'm not coding, I enjoy remodeling spaces in my home and diving into CAD software to design new projects. I’m also a coffee enthusiast, always in search of the perfect brew to fuel my work sessions, and I love curating the perfect Spotify playlist to keep me motivated. Whether I’m working on a new app feature, brainstorming ideas, or relaxing after a long day, there's always a great tune or a fresh cup of coffee to accompany me.</span>
          <br><br>
        </p>
        <hr>
        <span class="lead"><b>If you're looking for someone who’s passionate about coding, enjoys collaboration, and thrives on bringing creative solutions to life, I’d love to connect and work with you!</b></span>
      </section>

      <!-- About Me Picture -->
      <section class="picture col-sm-5 d-flex flex-column align-items-center mt-3">
        <span><em>(placeholder picture)</em></span>
        <img src="@/assets/about/portfolio_portrait_temp.jpg" alt="Picture of Jennifer Curtis" style="width: 30vw"/>

        <!-- View Resume Button -->
        <div class="col-sm-5">
          <a class="btn my-2 py-2" href="src/assets/about/jennifer_curtis_resume.pdf" target="_blank" title="Click to View My Resume" style="width:200px">
            <span>View My Resume</span>
          </a>
        </div>
      </section>

    </article>

    <article class="timeline">
      <ExperienceTimeline/>
    </article>
  </aside>
</template>

<script>
import ExperienceTimeline from './TimeLine.vue';

export default {
    name: "AboutMe",
    components: {
      ExperienceTimeline
    }
}
</script>

<style scoped>
.text-container {
  min-width: 45vw;
  max-height: 33vw;
  background-color: #f9f9f9;
  border-radius: 1rem;
  overflow: hidden scroll;
}

.text-container,
.picture img,
.btn {
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

/* Base Styling for the Button */
.btn {
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
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454); /* Subtle gradient background */
  background-size: 500% 500%;
  border: .1vw solid #cccce4;
  transform: translateY(-1px); /* Adds 3D effect */
  animation: gradient-animation 5s ease infinite;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.2); /* Stronger shadow effect */
}

/* Define the animation */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%; /* Start position */
  }
  50% {
    background-position: 100% 50%; /* End position */
  }
  100% {
    background-position: 0% 50%; /* Back to start */
  }
}

/* Create a subtle glow effect around the button */
.btn::before {
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  border-radius: 2rem;
  transition: opacity 0.4s ease-in-out;
  z-index: -1;
}

.btn:hover::before {
  opacity: 1; /* Glow effect on hover */
}
</style>