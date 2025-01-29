<!-- Contact View -->
<template>
  <head>
    <title>Contact | J.Curtis Portfolio</title>
  </head>

  <header id="top">
    <component><Header/></component>
  </header>

  <body>
    <main>
      <component><Contact/></component>
    </main>
  </body>

  <footer id="bottom">
    <component><Footer/></component>
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
body {
  background-color: #dadae2;
}
</style>