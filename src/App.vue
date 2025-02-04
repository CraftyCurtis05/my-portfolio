<!-- npm install -->
<!-- npm install bootstrap -->
<!-- npm install @emailjs/browser@latest -->

<template>
  <body id="portfolio-app" class="d-flex flex-column justify-content-center align-items-center mx-auto p-0">
    
    <header id="top">
      <Header/>
    </header>
    
    <main class="m-auto px-2 pt-5 pb-3">
      <router-view />
    </main>
    
    <footer id="bottom">
      <Footer/>
    </footer>

  </body>
</template>

<script>
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    NavBar,
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
  min-height: 75vh;
  background-color: #dadae2;
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
  width: .6rem; /* Width of the scrollbar */
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
</style>
