<!-- Home View -->
<template>
  <head>
    <title>Home | J.Curtis Portfolio</title>
  </head>

  <header id="top">
    <component><Header/></component>
  </header>

  <body>
    <main>
      <component><Jumbotron /></component>
    </main>
  </body>

  <footer id="bottom">
    <component><Footer/></component>
  </footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "HomeView",
  components: { 
    Header,
    Jumbotron,
    Footer
  }
};
</script>

<style scoped>
body {
  background-image: linear-gradient(
    to bottom,
    #dadae2,
    1%,
    #dddbe7,
    #d5d3e0,
    99%,
    #dadae2
  );
}
</style>