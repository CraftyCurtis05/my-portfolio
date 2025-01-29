<template>
    <!-- About Me -->
    <main class="container">
      <div class="row justify-content-center">
        <div class="col-sm-7 paragraph">
          <p class="p-4">
            Hey there!
            <br><br>
            I'm a web developer who loves coding as much as I love finding the perfect coffee to fuel my sessions (and yes, that’s a journey on its own). 
            I’m an entry-level full-stack developer with hands-on experience in Java, Vue3, and PostgreSQL, thanks to completing Tech Elevator's Java Bootcamp. 
            <br><br>
            During that time, I led teams through exciting projects like a dispensary locator app and an inventory management system. 
            These projects not only let me flex my coding skills but also sharpened my leadership and mentoring abilities—because teaching others only strengthens your own knowledge, right?
            <br><br>
            Before diving into tech, I spent some time in business management, where I picked up key skills in communication, conflict resolution, and keeping customers happy. 
            My journey in education was a bit of a twist: 
            I started in general studies at Marion Technical College and later explored Architecture at Ohio State, where I honed my attention to detail and creative problem-solving—skills I now apply in my development work every day.
            <br><br>
            When I’m not coding, you’ll find me sketching, geeking out over CAD software, or curating the perfect Spotify playlist. 
            Music is my creative fuel—whether I’m working, brainstorming, or just relaxing, there’s always a beat in the background. 
            <br><br>
            If you're looking for someone who can tackle challenges with a smile, work well in teams, and deliver solid results (all while jamming to some great tunes), I’m your person!
          </p>
        </div>  
        <div class="col-sm-5 picture d-flex ">
          <span><em>(placeholder picture)</em></span>
          <img src="@/assets/about/portfolio_portrait_temp.jpg" alt="Picture of Jennifer Curtis" style="width: 30vw"/>
          <div class="col-sm-4 resume">
            <a href="src/assets/about/jennifer_curtis_resume.pdf" target="_blank" class="btn">
              <span>View My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </main>

</template>

<script>
export default {
    name: "AboutMe"
}
</script>

<style scoped>
.paragraph {
  background-color: #ecebef;
  border: 1px solid black;
  margin-top: 3rem;
}

.picture {
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

/* Base Styling for the Button */
.btn {
  width: 12rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: 2px solid #7c7c8a;
  border-radius: 2rem;
  padding: .5vw 1.5vw;
  margin-top: 1vw;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.btn:hover {
  color: #ffffff;
  background-image: radial-gradient(circle, #8787c3, #b9b9c6); /* Subtle gradient background */
  background-size: 300% 300%;
  border: 2px solid #cccce4;
  transform: scale(1.1) translateY(-5px); /* Adds 3D effect */
  animation: gradient-animation 2s ease infinite;
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
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
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