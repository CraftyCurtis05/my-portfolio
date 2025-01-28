<template>
    <head>
      <title>About | J.Curtis Portfolio</title>
    </head>
  
    <header id="top">
      <Header/>
    </header>
  
    <body>
      <main>
        <AboutMe/>
      </main>
    </body>
  
    <footer>
      <Footer/>
    </footer>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import AboutMe from '@/components/about/AboutMe.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: "AboutView",
    components: { 
      Header,
      AboutMe,
      Footer
    }
  };
  </script>
  
  <style scoped>
  body {
  background-color: #dadae2;
}
  </style>