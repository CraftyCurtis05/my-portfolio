<!-- Application Root -->
<template>
  <div
    id="portfolio-app"
    class="portfolio-app"
  >

    <!-- Site Header -->
    <header id="top">
      <Header
        :theme="theme"
        @toggle-theme="toggleTheme"
      />
    </header>


    <!-- Page Content -->
    <main class="page-content">
      <router-view />
    </main>


    <!-- Back to Top -->
    <BackToTop
      :theme="theme"
    />


    <!-- Cursor Glow -->
    <CursorGlow />


    <!-- Site Footer -->
    <Footer
      id="bottom"
      class="footer"
      :theme="theme"
    />

  </div>
</template>


<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BackToTop from './components/BackToTop.vue';
import CursorGlow from './components/CursorGlow.vue';

export default {
  name: "App",

  components: {
    Header,
    Footer,
    BackToTop,
    CursorGlow
  },


  data() {
    return {
      theme:
        document.documentElement.getAttribute(
          "data-theme"
        ) === "dark"
          ? "dark"
          : "light"
    };
  },


  methods: {

    /* Apply Site Theme */
    applyTheme() {
      document.documentElement.setAttribute(
        "data-theme",
        this.theme
      );

      document.documentElement.setAttribute(
        "data-bs-theme",
        this.theme
      );
    },


    /* Toggle Site Theme */
    toggleTheme() {
      this.theme =
        this.theme === "light"
          ? "dark"
          : "light";

      this.applyTheme();

      localStorage.setItem(
        "portfolio-theme",
        this.theme
      );
    }
  },


  mounted() {
    const savedTheme =
      localStorage.getItem(
        "portfolio-theme"
      );

    if (savedTheme) {
      this.theme =
        savedTheme;
    }

    this.applyTheme();
  }
};
</script>


<style>
/* ========================================
   Light Theme
======================================== */

:root {
  --color-text: #212529;
  --color-text-body: #343a40;
  --color-text-muted: #5f5f69;
  --color-text-secondary: #6c757d;
  --color-accent-muted: #7c7c8a;

  --color-background: #dadae2;
  --color-surface: #f8f8fa;
  --color-navbar: #f8f9fa;
  --color-white: #ffffff;
  --color-input: #ffffff;

  --color-accent-green: #c2fdcf;
  --color-accent-blue: #70d3fb;
  --color-accent-lime: #bef454;

  --accent-gradient:
    radial-gradient(
      circle,
      var(--color-accent-green),
      var(--color-accent-blue),
      var(--color-accent-lime)
    );

  --color-focus-ring:
    rgba(112, 211, 251, .2);

  --color-border: #cccce4;

  --color-surface-transparent:
    rgba(248, 248, 250, .72);

  --color-surface-transparent-strong:
    rgba(248, 248, 250, .88);

  --color-border-transparent:
    rgba(124, 124, 138, .18);

  --color-shadow:
    rgba(0, 0, 0, .1);

  --color-shadow-strong:
    rgba(0, 0, 0, .15);


  --home-background-image:
    url('/assets/images/home/light_theme/jumbotron_bg_light.webp');
}


/* ========================================
   Dark Theme
======================================== */

:root[data-theme="dark"] {
  --color-text: #f3f3f7;
  --color-text-body: #d4d4dc;
  --color-text-muted: #aaaab7;
  --color-text-secondary: #9292a0;
  --color-accent-muted: #b8b8c6;

  --color-background: #333333;
  --color-surface: #414141;
  --color-navbar: #111111;
  --color-white: #ffffff;
  --color-input: #5a5a5f;

  --color-accent-green: #9be7b0;
  --color-accent-blue: #69c9f3;
  --color-accent-lime: #b5e85a;

  --color-focus-ring:
    rgba(105, 201, 243, .22);

  --color-border: #55555f;

  --color-surface-transparent:
    rgba(65, 65, 65, .78);

  --color-surface-transparent-strong:
    rgba(65, 65, 65, .92);

  --color-border-transparent:
    rgba(255, 255, 255, .14);

  --color-shadow:
    rgba(0, 0, 0, .25);

  --color-shadow-strong:
    rgba(0, 0, 0, .38);

  --home-background-image:
    url('/assets/images/home/dark_theme/jumbotron_bg_dark.webp');
}


/* ========================================
   Document
======================================== */

html {
  min-height: 100%;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  scroll-behavior: smooth;
}

body {
  min-height: 100vh;

  margin: 0;

  color:
    var(--color-text);

  background-color:
    var(--color-background);

  overflow-x: hidden;

  transition:
    color .3s ease-in-out,
    background-color .3s ease-in-out;
}


/* ========================================
   Application Layout
======================================== */

.portfolio-app {
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  /*
   * Keeps the small background band above the header
   * that is part of the site's visual design.
   */
  padding-top: 1rem;

  background-color:
    var(--color-background);

  transition:
    background-color .3s ease-in-out;
}


/* ========================================
   Main Page Content
======================================== */

.page-content {
  flex: 1;

  /*
   * Gives the overlapping header logo room before
   * each page's main content begins.
   */
  padding-top:
    clamp(1.5rem, 2vw, 2.5rem);
}


/* ========================================
   Interior Page Layout
======================================== */

.page-shell {
  width: min(92%, 1200px);

  margin-inline: auto;

  padding-bottom:
    clamp(3rem, 5vw, 5rem);
}


/* ========================================
   Section Divider
======================================== */

.section-divider {
  margin-top:
    clamp(3rem, 5vw, 5rem);

  padding-top:
    clamp(3rem, 5vw, 5rem);

  border-top:
    1px solid
    var(--color-border-transparent);
}


/* ========================================
   Custom Scrollbar
======================================== */

::-webkit-scrollbar {
  width: .6rem;
}

::-webkit-scrollbar-track {
  background:
    var(--color-shadow);

  border-radius: 1rem;
}

::-webkit-scrollbar-thumb {
  background-image:
    linear-gradient(
      to bottom,
      var(--color-accent-green),
      var(--color-accent-blue),
      var(--color-accent-lime)
    );

  background-size:
    100% 300%;

  background-position:
    50% 0%;

  border-radius: 1rem;

  transition:
    background-position .3s ease;
}

::-webkit-scrollbar-thumb:hover {
  animation:
    scrollbar-gradient-animation
    1.8s
    ease
    infinite;
}


/* ========================================
   Accent Glow
======================================== */

.accent-glow,
.site-button {
  position: relative;

  isolation: isolate;
}

.accent-glow::before,
.site-button::before,
.carousel-control-prev::before,
.carousel-control-next::before {
  content: "";

  position: absolute;

  inset: -.2rem;

  background-image:
    var(--accent-gradient);

  background-size:
    300% 300%;

  border-radius: inherit;

  opacity: 0;

  filter:
    blur(.55rem);

  pointer-events: none;

  transform:
    scale(.92);

  transition:
    opacity .3s ease-in-out,
    transform .3s ease-in-out;

  z-index: -1;
}

.accent-glow:hover::before,
.accent-glow:focus-visible::before,
.site-button:hover:not(:disabled)::before,
.site-button:focus-visible:not(:disabled)::before,
.carousel-control-prev:hover::before,
.carousel-control-prev:focus-visible::before,
.carousel-control-next:hover::before,
.carousel-control-next:focus-visible::before {
  opacity: .65;

  transform:
    scale(1);

  animation:
    gradient-animation
    5s
    ease
    infinite;
}


/* ========================================
   Gradient Animation
======================================== */

@keyframes gradient-animation {
  0% {
    background-position:
      0% 50%;
  }

  50% {
    background-position:
      100% 50%;
  }

  100% {
    background-position:
      0% 50%;
  }
}


/* ========================================
   Scrollbar Gradient Animation
======================================== */

@keyframes scrollbar-gradient-animation {
  0% {
    background-position:
      50% 0%;
  }

  50% {
    background-position:
      50% 100%;
  }

  100% {
    background-position:
      50% 0%;
  }
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 900px) {
  .page-content {
    padding-top: 1.25rem;
  }

  .page-shell {
    width: min(92%, 700px);

    padding-bottom: 3rem;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .portfolio-app {
    padding-top: .75rem;
  }

  .page-content {
    padding-top: 1rem;
  }

  .page-shell {
    width: min(92%, 600px);

    padding-bottom: 2rem;
  }

  .section-divider {
    margin-top: 2.5rem;
    padding-top: 2.5rem;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  body,
  .portfolio-app {
    transition: none;
  }

  .accent-glow::before,
  .site-button::before,
  .carousel-control-prev::before,
  .carousel-control-next::before {
    transition: none;
    animation: none;
  }

  ::-webkit-scrollbar-thumb:hover {
    animation: none;
  }
}
</style>