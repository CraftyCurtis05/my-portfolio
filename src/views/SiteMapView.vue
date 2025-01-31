<!-- SiteMap View -->
<template>
  <head>
    <title>SiteMap | J.Curtis Portfolio</title>
  </head>

  <header id="top">
    <Header/>
  </header>

  <body>
    <main>
      <h1 class="display-6">Under construction—good things take time!</h1>
    </main>
  </body>

  <footer id="bottom">
    <Footer/>
  </footer>
</template>
  
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "AboutView",
  components: { 
    Header,
    Footer
  }
};
</script>
  
<style scoped>
body {
  min-height: 45.7vh;
  background-color: #dadae2;
  text-align: center;
}
</style>