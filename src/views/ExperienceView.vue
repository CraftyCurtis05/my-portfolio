<!-- Experience View -->
<template>
  <head>
    <title>Experience | J.Curtis Portfolio</title>
  </head>
  
  <header id="top">
    <component><Header/></component>
  </header>
  
  <body>
    <main>
      <component><ExperienceCarousel/></component>
    </main>
  </body>

  <footer id="bottom">
    <component><Footer/></component>
  </footer>
</template>
  
<script>
import Header from '@/components/Header.vue';
import ExperienceCarousel from '@/components/carousels/ExperienceCarousel.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "ExperienceView",
  components: { 
    Header,
    ExperienceCarousel,
    Footer
  }
};
</script>
  
<style scoped>
body {
  background-color: #dadae2;
}
</style>