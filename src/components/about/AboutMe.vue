<!-- About Me Component -->
<template>
  <component class="container d-flex align-items-center">
    <article class="row d-flex justify-content-center">

      <!-- About Me Text -->
      <section class="text-container row col-sm-6">
        <p>
          <span class="lead"><strong>Who is Jennifer Curtis?</strong></span>
          <br><br>
          <span class="lead">I'm a web developer who loves coding as much as I love finding the perfect coffee to fuel my sessions (and yes, that’s a journey on its own).</span>
          <br><br>
          <span class="lead">I’m an entry-level full-stack developer with hands-on experience in Java, Vue3, and PostgreSQL, thanks to completing Tech Elevator's Java Bootcamp.</span>
          <br><br>
          <span class="lead">Since that time, I have led teams through exciting projects like a dispensary locator app and an inventory management system. These projects not only let me flex my coding skills but also sharpened my leadership and mentoring abilities—because teaching others only strengthens your own knowledge, right?</span>
          <br><br>
          <span class="lead">Before diving into tech, I spent some time in business management, where I picked up key skills in communication, conflict resolution, and keeping customers happy. My journey in education was a bit of a twist: I started in general studies at Marion Technical College and later explored Architecture at Ohio State, where I honed my attention to detail and creative problem-solving—skills I now apply in my development work every day.</span>
          <br><br>
          <span class="lead">When I’m not coding, you’ll find me remodeling a room in my home, geeking out over CAD software, or curating the perfect Spotify playlist. Music is my creative fuel—whether I’m working, brainstorming, or just relaxing, there’s always a beat in the background.</span>
          <br><br>
          <span class="lead"><strong><em>"If you're looking for someone who can tackle challenges with a smile, work well in teams, and deliver solid results (all while jamming to some great tunes), I’m your person!" -Jennifer Curtis</em></strong></span>
        </p>
      </section>

      <!-- About Me Picture -->
      <section class="col-sm-5 d-flex flex-column align-items-center picture">
        <span><em>(placeholder picture)</em></span>
        <img src="@/assets/about/portfolio_portrait_temp.jpg" alt="Picture of Jennifer Curtis" style="width: 30vw"/>

        <!-- View Resume Button -->
        <div class="col-sm-5">
          <a class="btn" href="src/assets/about/jennifer_curtis_resume.pdf" target="_blank" title="My Resume">
            <span>View My Resume</span>
          </a>
        </div>
      </section>

    </article>
  </component>
</template>

<script>
export default {
    name: "AboutMe"
}
</script>

<style scoped>
.text-container {
  min-width: 45vw;
  max-height: 30vw;
  background-color: #f9f9f9;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
}

.picture img {
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.1);
}

/* Base Styling for the Button */
.btn {
  width: 200px;
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: .1vw solid #7c7c8a;
  border-radius: 2vw;
  padding: .5vw 1.5vw;
  margin-top: .5vw;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.btn:hover {
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454); /* Subtle gradient background */
  background-size: 500% 500%;
  border: 2px solid #cccce4;
  transform: scale(1.01) translateY(-5px); /* Adds 3D effect */
  animation: gradient-animation 5s ease infinite;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2); /* Stronger shadow effect */
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