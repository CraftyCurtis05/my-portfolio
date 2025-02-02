<!-- Contact View -->
<template>
  
  <head>
    <title>Contact | J.Curtis Portfolio</title>
  </head>

  <body>
    <main class="mt-1">
      <Contact/>
    </main>
  </body>

</template>

<script>
import Contact from '@/components/contact/ContactForm.vue';

export default {
  name: "ContactView",
  components: { 
    Contact
  }
};
</script>

<style scoped>
body {
  background-color: #dadae2;
}
</style>