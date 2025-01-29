<!-- Education View -->
<template>
  <head>
    <title>Education | J.Curtis Portfolio</title>
  </head>

  <header id="top">
    <component><Header/></component>
  </header>

  <body>
    <main>
      <component><EducationCarousel/></component>
    </main>
  </body>

  <footer id="bottom">
    <component><Footer/></component>
  </footer>
</template>

<script>
import Header from '@/components/Header.vue';
import EducationCarousel from '@/components/carousels/EducationCarousel.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "EducationView",
  components: { 
    Header,
    EducationCarousel,
    Footer
  }
};
</script>

<style scoped>
body {
  background-color: #dadae2;
}
</style>