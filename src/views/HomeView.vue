<!-- Home View -->
<template>
  <div class="home">

    <Jumbotron />

  </div>
</template>


<script>
import Jumbotron from '@/components/home/Jumbotron.vue';

export default {
  name: "HomeView",

  components: {
    Jumbotron
  }
};
</script>


<style scoped>
/* ========================================
   Home Page
======================================== */

.home {
  width: 100%;

  background-color:
    var(--color-background);

  background-image:
    var(--home-background-image);

  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  transition:
    background-color .3s ease-in-out;
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 900px) {
  .home {
    background-position: center top;
    background-size: cover;
  }
}


/* ========================================
   Smaller Tablet
======================================== */

@media (max-width: 768px) {
  .home {
    background-position: center center;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .home {
    background-position: center top;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .home {
    transition: none;
  }
}
</style>