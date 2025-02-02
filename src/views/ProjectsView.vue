<!-- Projects View -->
<template>

  <head>
    <title>Projects | J.Curtis Portfolio</title>
  </head>

  <body>
    <main>
      <Projects/>
    </main>
  </body>

</template>
  
<script>
import Projects from '@/components/projects/Projects.vue';

export default {
  name: "ProjectsView",
  components: { 
    Projects
  }
};
</script>

<style scoped>
body {
  background-color: #dadae2;
}
</style>