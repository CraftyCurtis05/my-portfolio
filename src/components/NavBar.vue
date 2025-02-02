<!-- Navbar Component -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light row d-flex justify-content-center align-items-center mx-1">
        <article class="container-fluid">
   
            <!-- Navbar Toggler Button -->
            <button
                    class="navbar-toggler m-auto p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar Links List-->
            <section class="collapse navbar-collapse bg-light d-flex justify-content-center align-items-center" id="navbarNav">
                <ul class="navbar-nav nav lead mx-auto">
                    <li class="nav-item py-1 px-3">
                        <router-link to="/" class="nav-link" active-class="active-link" title="Go to Home Page">Home</router-link>
                    </li>
                    <li class="nav-item py-1 px-3">
                        <router-link to="/about" class="nav-link" active-class="active-link" title="Go to About Me Page">About</router-link>
                    </li>
                    <li class="nav-item py-1 px-3">
                        <router-link to="/education" class="nav-link" active-class="active-link" title="Go to Education Page">Education</router-link>
                    </li>
                    <li class="nav-item py-1 px-3">
                        <router-link to="/experience" class="nav-link" active-class="active-link" title="Go to Experience Page">Experience</router-link>
                    </li>
                    <li class="nav-item py-1 px-3">
                        <router-link to="/projects" class="nav-link" active-class="active-link" title="Go to Projects Page">Projects</router-link>
                    </li>
                    <li class="nav-item py-1 px-3">
                        <router-link to="/contact" class="nav-link" active-class="active-link" title="Go to Contact Me Page">Contact</router-link>
                    </li>
                </ul>
            </section>

        </article>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
nav {
    width: 100vw;
    height: calc(2rem + 1.5vw); /* Combines fixed and viewport-relative units */
    z-index: 500;
}

.navbar-brand {
    width: 13vw;
}

.navbar-brand img {
    width: 100%;
    height: auto;
    object-fit: contain;
}

.navbar-toggler-icon {
    width: calc(1.2rem + 2vw); /* Combines fixed and viewport-relative units */
}

.nav-item {
    font-size: clamp(1.125rem, 1vw + .25rem, 2.5rem);
    font-weight: 300;
    transition: all 0.1s ease-in-out;
}

.nav-item:hover {
    font-weight: 400;
    background-image: radial-gradient(circle, #dadae2, #f8f9fb); /* Subtle gradient background */
    background-size: 300% 300%;
    transform: scale(1.02);
    animation: gradient-animation 3s ease infinite;
}

.nav-item .active-link {
    font-weight: 400;
    transform: scale(1.02);
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