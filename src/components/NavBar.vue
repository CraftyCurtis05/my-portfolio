<template>
    <!-- Navbar Component -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- Navbar Toggler Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navbar Links List-->
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav mx-auto">
                    <router-link to="/" class="nav-item nav-link px-4 mx-1" title="Home">Home</router-link>
                    <router-link to="/about" class="nav-item nav-link ps-4 pe-4 mx-1" title="About Me">About</router-link>
                    <router-link to="/education" class="nav-item nav-link ps-4 pe-4 mx-1" title="My Education">Education</router-link>
                    <router-link to="/experience" class="nav-item nav-link ps-4 pe-4 mx-1" title="My Experience">Experience</router-link>
                    <router-link to="/projects" class="nav-item nav-link ps-4 pe-4 mx-1" title="My Projects">Projects</router-link>
                    <router-link to="/contact" class="nav-item nav-link px-4 mx-1" title="Contact Me">Contact</router-link> 
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
nav {
    height: 3.5rem;
}

.nav-item {
    padding: 1vw 0;
    transition: all 0.1s ease-in-out;
}

.nav-item:hover {
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