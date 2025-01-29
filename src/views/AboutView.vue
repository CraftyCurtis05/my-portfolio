<!-- About View -->
<template>
  <head>
    <title>About | J.Curtis Portfolio</title>
  </head>

  <header id="top">
    <component><Header/></component>
  </header>

  <body>
    <main>
      <component><AboutMe/></component>
    </main>
  </body>

  <footer id="bottom">
    <component><Footer/></component>
  </footer>
</template>

<script>
import Header from '@/components/Header.vue';
import AboutMe from '@/components/about/AboutMe.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "AboutView",
  components: { 
    Header,
    AboutMe,
    Footer
  }
};
</script>

<style scoped>
body {
  background-color: #dadae2;
}
</style>