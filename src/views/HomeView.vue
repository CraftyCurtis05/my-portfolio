<template>
  <head>
    <title>Home | J.Curtis Portfolio</title>
  </head>

  <header id="top">
    <Header/>
  </header>

  <body>
    <main>
      <Jumbotron/>
    </main>
  </body>

  <footer>
    <Footer/>
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

</style>