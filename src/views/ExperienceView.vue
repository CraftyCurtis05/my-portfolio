<!-- Experience View -->
<template>

  <head>
    <title>Experience | J.Curtis Portfolio</title>
  </head>
  
  <body>
    <main>
      <ExperienceCarousel/>
    </main>
  </body>

</template>
  
<script>
import ExperienceCarousel from '@/components/carousels/ExperienceCarousel.vue';

export default {
  name: "ExperienceView",
  components: { 
    ExperienceCarousel
  }
};
</script>
  
<style scoped>
body {
  background-color: #dadae2;
}
</style>