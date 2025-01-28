<template>
    <head>
      <title>Contact | J.Curtis Portfolio</title>
    </head>
  
    <header id="top">
      <Header/>
    </header>
  
    <body>
      <main>
        <Contact/>
      </main>
    </body>
  
    <footer>
      <Footer/>
    </footer>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Contact from '@/components/contact/ContactForm.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: "ContactView",
    components: { 
      Header,
      Contact,
      Footer
    }
  };
  </script>
  
  <style scoped>
  
  </style>