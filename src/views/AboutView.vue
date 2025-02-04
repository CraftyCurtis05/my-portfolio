<!-- About View -->
<template>
  
  <head>
    <title>About | J.Curtis Portfolio</title>
  </head>

  <body>
    <main class="row d-flex flex-row justify-content-center mx-auto">

      <!-- About Me Image -->
      <section class="image-container col-3 d-flex flex-column pt-3">
        <Image/>
        <Certificates/>
      </section>

      <!-- About Me Text -->
      <section class="text-container col-6 pt-5 mx-3">
        <AboutMe/>
      </section>

      <!-- Experience Timeline -->
      <section class="timeline-container col-1">
        <Timeline/>
      </section>

    </main>
  </body>

</template>

<script>
import Image from '@/components/about/Image.vue';
import Certificates from '@/components/about/Certificates.vue';
import AboutMe from '@/components/about/AboutMe.vue';
import Timeline from '@/components/about/Timeline.vue';

export default {
  name: "AboutView",
  components: { 
    Image,
    Certificates,
    AboutMe,
    Timeline
  }
};
</script>

<style scoped>
body {
  background-color: #dadae2;
}
</style>