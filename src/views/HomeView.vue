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

main {
  margin-top: 2.5vw;
}
</style>