<template>
    <!-- About Me -->
    <main class="container">
      <div class="row justify-content-center">
        <div class="col-sm-8 paragraph">
          <p class="p-4">
            Hi there! 
            <br><br>
            I’m a web developer who's as enthusiastic about coding as I am about discovering the perfect coffee to fuel my coding sessions (which, trust me, is a journey in itself). 
            I'm an entry-level web developer with a solid foundation in full-stack development, and I recently wrapped up Tech Elevator's Java Bootcamp—where I dove into the world of Java, Vue3, and PostgreSQL, and learned how to tame them into submission. 
            Along the way, I led teams on some pretty exciting projects, like developing a dispensary locator app and designing an inventory management system. 
            These projects not only let me flex my coding muscles but also gave me a chance to step up as a leader and mentor—turns out, explaining code to others helps me solidify my own knowledge too!
            <br><br>
            Before diving into the wonderful world of tech, I took a detour through the business management world, which gave me some seriously useful skills in communication, conflict resolution, and—let’s be real—keeping customers happy. 
            I know how to keep things running smoothly, whether I’m juggling tasks with teammates or resolving issues with a smile. 
            My educational journey has been a bit of a winding road too: I started with general studies at Marion Technical College, then took a dramatic turn into the world of Architecture at Ohio State University. 
            That’s where I really started to sharpen my eye for detail and creative problem-solving—skills that I now apply to my development work every day.
            <br><br>
            But hey, I’m not all about code and business acumen. 
            Outside of work, you’ll find me sketching drawings (because sometimes the best ideas start with a pencil), geeking out over CAD software, or diving deep into my Spotify playlist obsession. 
            Seriously, if there's a new album or hidden indie track, you can bet I’m already on it. 
            Music is my creative fuel—whether I’m coding, sketching, or just chilling, there’s always a soundtrack to my life. 
            I love working with teams and collaborating on innovative projects, and I’m always eager to keep learning and growing in my role as a developer. 
            <br><br>
            If you’re looking for someone who’s not afraid to take on challenges, add a little humor to the mix, and deliver quality work (while blasting some great tunes), I’m your person!
          </p>
        </div>  
        <div class="col-sm-4 picture">
          <span><em>(placeholder picture)</em></span>
          <img src="@/assets/about/portfolio_portrait_temp.jpg" style="width: 500px"/>
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
  margin-top: 3vw;
}

.picture {
  margin-top: 6vw;
}
</style>