<!-- Navbar Component -->
<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <article class="container-fluid">
   
      <!-- Navbar Toggler Button -->
      <button
        class="navbar-toggler m-auto p-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links List-->
      <section 
        class="offcanvas offcanvas-end bg-light" 
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >

        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <!-- Logo -->
            <section class="logo" data-bs-dismiss="offcanvas">
              <router-link 
                to="/"
                title="Go to Home Page"
              >
                <img
                  src="/assets/logo/light_theme/logo_blk_01.webp"
                  alt="Jennifer Curtis Logo"
                  title="Go to My Home Page"
                >
              </router-link>    
            </section>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 lead justify-content-center">
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link
                          class="nav-link"
                          to="/"
                          exact-active-class="active"
                          title="Go to Home Page"
                        >Home</router-link>
                    </li>
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link
                          class="nav-link"
                          to="/about"
                          exact-active-class="active"
                          title="Go to About Me Page"
                        >About</router-link>
                    </li>
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link
                          class="nav-link"
                          to="/education"
                          exact-active-class="active"
                          title="Go to Education Page"
                        >Education</router-link>
                    </li>
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link
                          class="nav-link"
                          to="/experience"
                          exact-active-class="active"
                          title="Go to Experience Page"
                        >Experience</router-link>
                    </li>
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link
                          class="nav-link"
                          to="/projects"
                          exact-active-class="active"
                          title="Go to Projects Page"
                        >Projects</router-link>
                    </li>
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link
                          class="nav-link"
                          to="/contact"
                          exact-active-class="active"
                          title="Go to Contact Me Page"
                        >Contact</router-link>
                    </li>
                </ul>
              </div>
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
@media (min-width: 1000px) {
  nav {
    width: 100vw;
    height: clamp(3rem, 3.5vw, 4.8rem); /* 1024px - 2560 */
    z-index: 500;
  }

  .navbar-toggler-icon {
      width: calc(1rem + 2vw); /* Combines fixed and viewport-relative units */
  }

  .nav-item {
      font-size: clamp(1.125rem, 1vw + .3rem, 2.5rem);  /* 1024px - 2560 */
      font-weight: 300;
      padding-inline: clamp(.5rem, 1vw, 1.6rem); /* 1024px - 2560 */
      padding-block: clamp(.125rem, .25vw, .5rem); /* 1024px - 2560 */
      transition: all 0.1s ease-in-out;
  }

  .nav-item:hover {
      font-weight: 400;
      background-image: radial-gradient(circle, #dadae2, #f8f9fb);
      background-size: 300% 300%;
      transform: scale(1.02);
      animation: gradient-animation 3s ease infinite;
  }

  .nav-link.active {
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

  /* Extra Small (Mobile) */
  @media (max-width: 480px) {
    /* Styles for phones in portrait mode */
  }

  /* Small (Mobile) */
  @media (max-width: 600px) {
    /* Styles for phones in landscape mode */
  }
}

/* Medium (Tablet) */
@media (max-width: 768px) {
  /* Styles for tablets in portrait mode */
}

/* Large (Tablet, Small Laptops) */
@media (max-width: 1024px) {
  /* Styles for small laptops and tablets in landscape mode */
}

/* Extra Large (Laptops, Desktops) */
@media (min-width: 1025px) {
  /* Styles for laptops and desktop screens */
}

/* Ultra Large (Wider Desktop Screens) */
@media (min-width: 1440px) {
  /* Styles for large desktop displays */
}
</style>