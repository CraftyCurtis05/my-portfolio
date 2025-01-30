<!-- Navbar Component -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <article class="container-fluid">

            <!-- Navbar Toggler Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar Links List-->
            <section class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav mx-auto lead">
                    <router-link to="/" class="nav-item nav-link px-4 mx-1" title="Go to Home Page">Home</router-link>
                    <router-link to="/about" class="nav-item nav-link ps-4 pe-4 mx-1" title="Go to About Me Page">About</router-link>
                    <router-link to="/education" class="nav-item nav-link ps-4 pe-4 mx-1" title="Go to Education Page">Education</router-link>
                    <router-link to="/experience" class="nav-item nav-link ps-4 pe-4 mx-1" title="Go to Experience Page">Experience</router-link>
                    <router-link to="/projects" class="nav-item nav-link ps-4 pe-4 mx-1" title="Go to Projects Page">Projects</router-link>
                    <router-link to="/contact" class="nav-item nav-link px-4 mx-1" title="Go to Contact Me Page">Contact</router-link> 
                </div>
            </section>
            
        </article>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
nav {
    height: 3.5vw;
}

.nav-item {
    font-weight: 300;
    height: 3.3vw;
    transition: all 0.1s ease-in-out;
}

.nav-item:hover {
    font-weight: 400;
    background-image: radial-gradient(circle, #dadae2, #f8f9fb); /* Subtle gradient background */
    background-size: 300% 300%;
    transform: scale(1.01);
    animation: gradient-animation 2s ease infinite;
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