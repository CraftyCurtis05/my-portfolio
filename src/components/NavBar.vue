<!-- Navbar Component -->
<template>
  <nav
    class="navbar navbar-expand-lg"
    aria-label="Main navigation"
  >
    <div class="container-fluid">

      <!-- Navbar Toggler -->
      <button
        class="navbar-toggler m-auto p-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Open navigation menu"
      >
        <span
          class="navbar-toggler-icon"
          aria-hidden="true"
        ></span>
      </button>


      <!-- Navigation Links -->
      <div
        id="offcanvasNavbar"
        class="offcanvas offcanvas-end"
        tabindex="-1"
        aria-labelledby="offcanvasNavbarLabel"
      >

        <!-- Offcanvas Header -->
        <div class="offcanvas-header">

          <!-- Offcanvas Navigation Title -->
          <h2
            id="offcanvasNavbarLabel"
            class="visually-hidden"
          >
            Main Navigation
          </h2>


          <!-- Mobile / Offcanvas Logo -->
          <div
            class="offcanvas-logo"
            data-bs-dismiss="offcanvas"
          >
            <router-link
              to="/"
              aria-label="Go to home page"
            >
              <img
                :src="
                  theme === 'light'
                    ? '/assets/images/logo/light_theme/logo_light.webp'
                    : '/assets/images/logo/dark_theme/logo_dark.webp'
                "
                alt=""
                aria-hidden="true"
              >
            </router-link>
          </div>


          <!-- Close Button -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close navigation menu"
          ></button>

        </div>


        <!-- Offcanvas Body -->
        <div class="offcanvas-body">

          <ul class="navbar-nav flex-grow-1">

            <!-- Home -->
            <li
              class="nav-item"
              data-bs-dismiss="offcanvas"
            >
              <router-link
                class="nav-link"
                to="/"
                exact-active-class="active"
              >
                Home
              </router-link>
            </li>


            <!-- About -->
            <li
              class="nav-item"
              data-bs-dismiss="offcanvas"
            >
              <router-link
                class="nav-link"
                to="/about"
                exact-active-class="active"
              >
                About
              </router-link>
            </li>


            <!-- Education -->
            <li
              class="nav-item"
              data-bs-dismiss="offcanvas"
            >
              <router-link
                class="nav-link"
                to="/education"
                exact-active-class="active"
              >
                Education
              </router-link>
            </li>


            <!-- Experience -->
            <li
              class="nav-item"
              data-bs-dismiss="offcanvas"
            >
              <router-link
                class="nav-link"
                to="/experience"
                exact-active-class="active"
              >
                Experience
              </router-link>
            </li>


            <!-- Projects -->
            <li
              class="nav-item"
              data-bs-dismiss="offcanvas"
            >
              <router-link
                class="nav-link"
                to="/projects"
                exact-active-class="active"
              >
                Projects
              </router-link>
            </li>


            <!-- Contact -->
            <li
              class="nav-item"
              data-bs-dismiss="offcanvas"
            >
              <router-link
                class="nav-link"
                to="/contact"
                exact-active-class="active"
              >
                Contact
              </router-link>
            </li>

          </ul>

        </div>

      </div>

    </div>
  </nav>
</template>


<script>
export default {
  name: "NavBar",

  props: {
    theme: {
      type: String,
      required: true
    }
  }
};
</script>


<style scoped>
/* ========================================
   Base Navbar
======================================== */

.navbar {
  width: 100%;

  background-color:
    var(--color-navbar);
}


/* ========================================
   Navigation Links
======================================== */

.nav-link:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}


/* ========================================
   Desktop Navigation
======================================== */

@media (min-width: 992px) {
  .navbar {
    min-height:
      clamp(3rem, 3.5vw, 4.8rem);
  }

  .navbar-nav {
    width: 100%;

    justify-content: center;
  }

  .nav-item {
    padding-inline:
      clamp(.5rem, 1vw, 1.6rem);

    padding-block:
      clamp(.125rem, .25vw, .5rem);
  }

  .nav-link {
    position: relative;

    color:
      var(--color-text);

    font-size:
      clamp(1.125rem, 1vw + .3rem, 2.5rem);

    font-weight: 300;

    transition:
      color .2s ease,
      transform .2s ease,
      font-weight .2s ease;
  }

  .nav-link::after {
    content: "";

    position: absolute;

    left: 50%;
    bottom: .1rem;

    width: 0;
    height: .15rem;

    background-image:
      linear-gradient(
        90deg,
        var(--color-accent-green),
        var(--color-accent-blue),
        var(--color-accent-lime)
      );

    border-radius: 1rem;

    transform:
      translateX(-50%);

    transition:
      width .25s ease;
  }

  .nav-link:hover,
  .nav-link:focus-visible {
    font-weight: 400;

    transform:
      translateY(-1px);
  }

  .nav-link:hover::after,
  .nav-link:focus-visible::after {
    width: 80%;
  }

  .nav-link.active {
    font-weight: 500;
  }

  .nav-link.active::after {
    width: 65%;
    height: .2rem;

    background-size:
      200% 200%;

    animation:
      gradient-animation
      5s
      ease
      infinite;
  }
}


/* ========================================
   Hamburger Button
======================================== */

.navbar-toggler {
  border: 0;

  box-shadow: none;

  transition:
    transform .2s ease;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}

.navbar-toggler-icon {
  width:
    clamp(2rem, 4vw, 2.75rem);

  height:
    clamp(2rem, 4vw, 2.75rem);
}


/* ========================================
   Offcanvas Navigation
======================================== */

.offcanvas {
  width:
    min(85vw, 24rem);

  background-color:
    var(--color-navbar);
}

.offcanvas-header {
  align-items: flex-start;

  padding: 1rem;
}

.offcanvas-logo {
  margin: 0;
}

.offcanvas-logo a {
  display: inline-flex;

  transition:
    transform .2s ease;
}

.offcanvas-logo a:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}

.offcanvas-logo img {
  display: block;

  width: 10rem;
  height: auto;
}


/* ========================================
   Offcanvas Links
======================================== */

.offcanvas-body {
  padding-top: 1rem;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    align-items: center;
  }

  .nav-item {
    width: 100%;

    padding-block: .65rem;

    text-align: center;
  }

  .nav-link {
    position: relative;

    display: inline-block;

    padding:
      .5rem
      1rem;

    color:
      var(--color-text);

    font-size: 1.25rem;
    font-weight: 300;

    transition:
      transform .2s ease,
      font-weight .2s ease;
  }

  .nav-link::after {
    content: "";

    position: absolute;

    left: 50%;
    bottom: .2rem;

    width: 0;
    height: .15rem;

    background-image:
      linear-gradient(
        90deg,
        var(--color-accent-green),
        var(--color-accent-blue),
        var(--color-accent-lime)
      );

    background-size:
      200% 200%;

    border-radius: 1rem;

    transform:
      translateX(-50%);

    transition:
      width .25s ease;
  }

  .nav-link:hover,
  .nav-link:focus-visible {
    transform:
      translateY(-1px);
  }

  .nav-link:hover::after,
  .nav-link:focus-visible::after {
    width: 80%;
  }

  .nav-link.active {
    font-weight: 500;
  }

  .nav-link.active::after {
    width: 65%;
    height: .2rem;

    animation:
      gradient-animation
      5s
      ease
      infinite;
  }
}


/* ========================================
   Touch Interaction
======================================== */

@media (hover: none) and
       (pointer: coarse) {

  .nav-link:active {
    transform:
      translateY(1px)
      scale(.98);
  }

  .nav-link:active::after {
    width: 80%;
  }

  .navbar-toggler:active {
    transform:
      scale(.94);
  }

  .offcanvas-logo a:active {
    transform:
      scale(.98);
  }
}


/* ========================================
   Small Mobile
======================================== */

@media (max-width: 600px) {
  .offcanvas {
    width:
      min(90vw, 22rem);
  }

  .offcanvas-header {
    padding: .75rem;
  }

  .offcanvas-logo img {
    width: 8.5rem;
  }

  .nav-item {
    padding-block: .5rem;
  }

  .nav-link {
    font-size: 1.15rem;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .nav-link,
  .nav-link::after,
  .navbar-toggler,
  .offcanvas-logo a {
    transition: none;
    animation: none;
  }
}
</style>