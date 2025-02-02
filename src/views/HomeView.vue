<!-- Home View -->
<template>

  <head>
    <title>Home | J.Curtis Portfolio</title>
  </head>

  <body>
    <main>
      <Jumbotron />
    </main>
  </body>

</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue';

export default {
  name: "HomeView",
  components: { 
    Jumbotron
  }
};
</script>

<style scoped>
body {
  background-image: linear-gradient(
    to bottom,
    #dadae2,
    1%,
    #dddbe7,
    #d5d3e0,
    99%,
    #dadae2
  );
}
</style>