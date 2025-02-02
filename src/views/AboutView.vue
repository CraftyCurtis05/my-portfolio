<!-- About View -->
<template>
  
  <head>
    <title>About | J.Curtis Portfolio</title>
  </head>

  <body>
    <main>
      <AboutMe/>
    </main>
  </body>

</template>

<script>
import AboutMe from '@/components/about/AboutMe.vue';

export default {
  name: "AboutView",
  components: { 
    AboutMe
  }
};
</script>

<style scoped>
body {
  background-color: #dadae2;
}
</style>