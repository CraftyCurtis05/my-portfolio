<!-- npm install -->
<!-- npm install bootstrap -->
<!-- npm install @emailjs/browser@latest -->

<template>
  <div id="portfolio-app">
    
    <header id="top">
      <Header/>
    </header>
    
    <body>
      <router-view />
    </body>
    
    <footer id="bottom">
      <Footer/>
    </footer>

  </div>
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
body {
  width: 100vw;
  height: auto;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  background-color: #dadae2;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
  caret-color: transparent;
}

main {
  background-color: #dadae2;
  width: 100vw;
  padding: 0;
  margin: 0 auto;
  margin-top: 2.5vw;
}
</style>
