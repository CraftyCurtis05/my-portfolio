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

/* Extra Small (Mobile) */
@media (max-width: 480px) {
  /* Styles for phones in portrait mode */
}

/* Small (Mobile) */
@media (max-width: 600px) {
  /* Styles for phones in landscape mode */
}

/* Medium (Tablet) */
@media (max-width: 768px) {
  /* Styles for tablets in portrait mode */
}

/* Large (Tablet, Small Laptops) */
@media (max-width: 1024px) {
  /* Styles for small laptops and tablets in landscape mode */
}

/* Extra Large (Laptops, Desktops) */
@media (min-width: 1025px) {
  /* Styles for laptops and desktop screens */
}

/* Ultra Large (Wider Desktop Screens) */
@media (min-width: 1440px) {
  /* Styles for large desktop displays */
}
</style>