<!-- Projects View -->
<template>
  <head>
    <title>Projects | J.Curtis Portfolio</title>
  </head>

  <header id="top">
    <component><Header/></component>
  </header>

  <body>
    <main>
      <component><Projects/></component>
    </main>
  </body>

  <footer id="bottom">
    <component><Footer/></component>
  </footer>
</template>
  
<script>
import Header from '@/components/Header.vue';
import Projects from '@/components/projects/Projects.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "ProjectsView",
  components: { 
    Header,
    Projects,
    Footer
  }
};
</script>

<style scoped>
body {
  background-color: #dadae2;
  min-height: 23vh;
}
</style>