<!-- Education View -->
<template>

  <head>
    <title>Education | J.Curtis Portfolio</title>
  </head>

  <body>
    <main>
      <EducationCarousel/>
    </main>
  </body>

</template>

<script>
import EducationCarousel from '@/components/carousels/EducationCarousel.vue';

export default {
  name: "EducationView",
  components: { 
    EducationCarousel
  }
};
</script>

<style scoped>
body {
  background-color: #dadae2;
}
</style>