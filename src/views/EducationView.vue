<template>
    <head>
      <title>Education | J.Curtis Portfolio</title>
    </head>
  
    <header id="top">
      <Header/>
    </header>
  
    <body>
      <main>
        <EducationCarousel/>
      </main>
    </body>
  
    <footer>
      <Footer/>
    </footer>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import EducationCarousel from '@/components/carousels/EducationCarousel.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: "EducationView",
    components: { 
      Header,
      EducationCarousel,
      Footer
    }
  };
  </script>
  
  <style scoped>
  body {
  background-color: #dadae2;
}
</style>