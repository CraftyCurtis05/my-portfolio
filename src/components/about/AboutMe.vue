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
            <a href="src/assets/about/jennifer_curtis_resume.pdf" target="_blank" class="btn">View My Resume</a>
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

.btn {
    width: 10vw;
    font-size: .9rem;
    color: #858585;
    background-color: #dadae2;
    border: 1px #b9b8b8 solid;
    margin-top: .5vw;
    transition: transform 0.3s ease-in;
}

.btn:hover {
    font-weight: 500;
    color: #696969;
    background-image: radial-gradient(circle, #b9b9d7, #dadae2);
    background-size: 300% 300%; /* Makes the gradient larger than the element */
    animation: gradient-animation 3s ease infinite; /* Applies the animation */
    border: 1px #b9b9d7 solid;
    margin-top: .5vw;
    transform: scale(1.05);
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
</style>