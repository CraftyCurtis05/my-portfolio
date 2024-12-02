<template>
    <head>
      <title>Experience | J.Curtis Portfolio</title>
    </head>
  
    <header id="top">
      <Header/>
    </header>
  
    <body>
      <main>
        <ExperienceCarousel/>
      </main>
    </body>
  
    <footer>
      <Footer/>
    </footer>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import ExperienceCarousel from '@/components/carousels/ExperienceCarousel.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: "ExperienceView",
    components: { 
      Header,
      ExperienceCarousel,
      Footer
    }
  };
  </script>
  
  <style scoped>
  
  </style>