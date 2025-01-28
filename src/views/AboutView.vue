<template>
    <head>
      <title>About | J.Curtis Portfolio</title>
    </head>
  
    <header id="top">
      <Header/>
    </header>
  
    <body>
      <main>
        <AboutText/>
      </main>
    </body>
  
    <footer>
      <Footer/>
    </footer>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import AboutText from '@/components/about/About.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: "AboutView",
    components: { 
      Header,
      AboutText,
      Footer
    }
  };
  </script>
  
  <style scoped>
  
  </style>