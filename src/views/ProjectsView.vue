<template>
  <head>
    <title>Projects | J.Curtis Portfolio</title>
  </head>

  <header id="top">
    <Header/>
  </header>

  <body>
    <main>
      <Projects/>
    </main>
  </body>

  <footer>
    <Footer/>
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