<!-- DOWNLOAD BEFORE RUN -->
<!-- npm install                            (v 10.9.0) -->
<!-- npm install -g @vue/cli                (v 3.5.13) -->
<!-- npm install bootstrap                  (v 5.3.3)  -->
<!-- npm install @emailjs/browser@latest    (v 4.4.1)  -->
<!-- npm install vue-meta@^3.0.0-alpha.7    (v 3.0.0)  -->

<template>
  <body id="portfolio-app" class="d-flex flex-column justify-content-center align-items-center p-0 m-0">
    
    <header id="top">
      <Header/>
    </header>
    
    <main class="d-flex flex-row justify-content-center align-items-center p-0 py-5 m-0">
      <router-view />
    </main>
    
    <footer id="bottom">
      <Footer/>
    </footer>

  </body>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

body {
  min-height: 48vh;
  background-color: #dadae2 !important;
  overflow-x: hidden;
  scroll-behavior: smooth;
  caret-color: transparent;
}

header,
main,
footer {
  width: 100%;
  background-color: #dadae2;
}

/* Scoped or global CSS to disable interaction with the backdrop when the modal is active */
.modal-backdrop {
  pointer-events: none; /* This will disable interaction with the backdrop */
}

/* Custom Scroll */
::-webkit-scrollbar {
  width: clamp(.5vw, .6vw, 1vw); /* Width of the scrollbar */
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-image: linear-gradient(to bottom, #c2fdcf, #70d3fb, #bef454);
  background-size: 300% 300%;
}

::-webkit-scrollbar-thumb:hover {
  background-position: 100% 100%;
}

/* Extra Small (Mobile) */
@media (max-width: 480px) {
  /* Styles for phones in portrait mode */
}

/* Small (Mobile) */
@media (max-width: 600px) {
  /* Styles for phones in landscape mode */
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
