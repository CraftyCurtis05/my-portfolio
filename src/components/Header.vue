<!-- Header Component -->
<template>
  <div class="header-content">

    <!-- Header Top Area -->
    <div class="header-top">

      <!-- Desktop / Large Screen Logo -->
      <div class="logo">
        <router-link
          to="/"
          class="logo-link"
          aria-label="Go to home page"
        >
          <img
            :src="
              theme === 'light'
                ? '/assets/images/logo/light_theme/logo_light.webp'
                : '/assets/images/logo/dark_theme/logo_dark.webp'
            "
            alt="Jennifer Curtis"
            title="Go to My Home Page"
          >
        </router-link>
      </div>


      <!-- Professional Profiles -->
      <nav
        class="profile-links"
        aria-label="Professional profiles and theme controls"
      >

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/jcurtisdeveloper/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link accent-glow"
          aria-label="Visit my LinkedIn profile"
          title="Visit My LinkedIn Profile"
        >
          <img
            class="icon icon-default"
            :src="
              theme === 'light'
                ? '/assets/images/icons/light_theme/linkedin_light.webp'
                : '/assets/images/icons/dark_theme/linkedin_dark.webp'
            "
            alt=""
            aria-hidden="true"
          >

          <img
            class="icon icon-hover"
            :src="
              theme === 'light'
                ? '/assets/images/icons/dark_theme/linkedin_dark.webp'
                : '/assets/images/icons/light_theme/linkedin_light.webp'
            "
            alt=""
            aria-hidden="true"
          >
        </a>


        <!-- GitHub -->
        <a
          href="https://github.com/CraftyCurtis05"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link accent-glow"
          aria-label="Visit my GitHub profile"
          title="Visit My GitHub Profile"
        >
          <img
            class="icon icon-default"
            :src="
              theme === 'light'
                ? '/assets/images/icons/light_theme/github_light.webp'
                : '/assets/images/icons/dark_theme/github_dark.webp'
            "
            alt=""
            aria-hidden="true"
          >

          <img
            class="icon icon-hover"
            :src="
              theme === 'light'
                ? '/assets/images/icons/dark_theme/github_dark.webp'
                : '/assets/images/icons/light_theme/github_light.webp'
            "
            alt=""
            aria-hidden="true"
          >
        </a>


        <!-- Theme Toggle -->
        <button
          class="theme-toggle"
          type="button"
          :aria-label="
            theme === 'light'
              ? 'Switch to dark theme'
              : 'Switch to light theme'
          "
          :title="
            theme === 'light'
              ? 'Switch to Dark Theme'
              : 'Switch to Light Theme'
          "
          @click="$emit('toggle-theme')"
        >
          <img
            :src="
              theme === 'light'
                ? '/assets/images/icons/light_theme/theme_light.webp'
                : '/assets/images/icons/dark_theme/theme_dark.webp'
            "
            alt=""
            aria-hidden="true"
          >
        </button>

      </nav>

    </div>


    <!-- Main Navigation -->
    <div class="navbar-container">
      <NavBar
        :theme="theme"
      />
    </div>

  </div>
</template>


<script>
import NavBar from './NavBar.vue';

export default {
  name: "Header",

  components: {
    NavBar
  },


  props: {
    theme: {
      type: String,
      required: true
    }
  },


  emits: [
    "toggle-theme"
  ]
};
</script>


<style scoped>
/* ========================================
   Header
======================================== */

.header-content {
  position: relative;

  width: 100%;

  background-color:
    var(--color-background);

  transition:
    background-color .3s ease-in-out;
}

.header-top {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  min-height:
    clamp(4rem, 4.5vw, 5.5rem);

  padding-inline:
    clamp(1rem, 2vw, 2.5rem);
}


/* ========================================
   Main Header Logo
======================================== */

.logo {
  position: absolute;

  left:
    clamp(1rem, 2vw, 2.5rem);

  top: 50%;

  z-index: 100;

  transform:
    translateY(-24%);
}

.logo-link {
  display: inline-flex;
  align-items: center;
}

.logo-link:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;

  border-radius: .25rem;
}

.logo img {
  display: block;

  width:
    clamp(10rem, 11.9vw, 16.4rem);

  height: auto;

  transition:
    opacity .3s ease-in-out;
}


/* ========================================
   Professional Profiles
======================================== */

.profile-links {
  display: flex;
  align-items: center;

  gap:
    clamp(.6rem, 1vw, 1rem);

  margin-right: -.35rem;
}

.icon {
  width:
    clamp(2.4rem, 2.75vw, 4rem);

  height: auto;
}


/* ========================================
   Theme Toggle
======================================== */

.theme-toggle {
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-left: -.2rem;

  padding: .15rem;

  background: transparent;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  isolation: isolate;
}

.theme-toggle::before {
  content: "";

  position: absolute;

  inset: -.15rem;

  background-image:
    var(--accent-gradient);

  background-size:
    300% 300%;

  border-radius: 50%;

  opacity: 0;

  filter:
    blur(.45rem);

  pointer-events: none;

  transform:
    scale(.85);

  transition:
    opacity .3s ease-in-out,
    transform .3s ease-in-out;

  z-index: -1;
}

.theme-toggle:hover::before,
.theme-toggle:focus-visible::before {
  opacity: .4;

  transform:
    scale(1);

  animation:
    gradient-animation
    5s
    ease
    infinite;
}

.theme-toggle img {
  display: block;

  width:
    clamp(1.4rem, 1.6vw, 2.3rem);

  height: auto;

  transition:
    transform .3s ease-in-out,
    filter .3s ease-in-out;
}

.theme-toggle:hover img,
.theme-toggle:focus-visible img {
  transform:
    scale(1.12);

  filter:
    invert(1);
}

.theme-toggle:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}


/* ========================================
   Navigation Container
======================================== */

.navbar-container {
  width: 100%;
}


/* ========================================
   Tablet
   900px - 769px
======================================== */

@media (max-width: 900px) and (min-width: 769px) {
  .logo {
    left: 1rem;
    top: 50%;

    transform:
      translateY(-50%);
  }

  .logo img {
    width:
      clamp(8.5rem, 18vw, 10.5rem);
  }

  .icon,
  .theme-toggle {
    width:
      clamp(2rem, 5vw, 2.6rem);

    height:
      clamp(2rem, 5vw, 2.6rem);
  }

  .theme-toggle img {
    width:
      clamp(1.25rem, 2.75vw, 1.6rem);
  }
}


/* ========================================
   Smaller Tablet
   768px - 601px
======================================== */

@media (max-width: 768px) {
  .header-top {
    justify-content: space-between;

    min-height: 4.5rem;

    padding-inline: 1rem;
  }

  .logo {
    position: static;

    display: flex;
    align-items: center;

    margin-right: auto;

    transform: none;
  }

  .logo img {
    width:
      clamp(6rem, 17vw, 7.5rem);
  }

  .profile-links {
    margin-left: auto;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .header-top {
    justify-content: space-between;

    min-height: 4rem;

    padding-left: .75rem;
    padding-right: .5rem;
  }


  /* ========================================
     Mobile Logo
  ======================================== */

  .logo {
    position: static;

    display: flex;
    align-items: center;

    margin-right: auto;

    transform: none;
  }

  .logo img {
    width:
      clamp(5rem, 22vw, 6.25rem);
  }


  /* ========================================
     Mobile Profile Links
  ======================================== */

  .profile-links {
    margin-left: auto;

    gap: .4rem;
  }

  .icon,
  .theme-toggle {
    width: 2.1rem;
    height: 2.1rem;
  }

  .theme-toggle img {
    width: 1.3rem;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .header-content,
  .logo img,
  .theme-toggle img,
  .theme-toggle::before {
    transition: none;
    animation: none;
  }
}
</style>