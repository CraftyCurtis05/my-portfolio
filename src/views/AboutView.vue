<!-- About View -->
<template>
  
  <head>
    <title>About | J.Curtis Portfolio</title>
  </head>

  <body>
    <main class="row g-0">

      <!-- About Me Image -->
      <section class="image-container col-3">
        <Image :receivedData="dataFromCertificates"/>
        <Certificates @data-sent="receiveData"/>
      </section>

      <!-- About Me Text -->
      <section class="text-container col-6">
        <AboutMe/>
      </section>

      <!-- Experience Timeline -->
      <section class="timeline-container col-2">
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
  },
  data() {
    return {
      dataFromCertificates: false
    };
  },
  methods: {
    // Pass data from certificates to image about model open/close
    receiveData(data) {
      this.dataFromCertificates = data;
    }
  }
};
</script>

<style scoped>
body {
  background-color: #dadae2;
}

main {
  margin-block: 5vh;
  transform: translateX(10%);
}

/* Extra Small (Mobile) */
@media (max-width: 480px) {
  /* Styles for phones in portrait mode */
}

/* Small (Mobile) */
@media (max-width: 600px) {
  /* Styles for phones in landscape mode */
}

/* Medium (Tablet) */
@media (max-width: 768px) {
  /* Styles for tablets in portrait mode */
}

/* Large (Tablet, Small Laptops) */
@media (max-width: 1024px) {
  /* Styles for small laptops and tablets in landscape mode */
}

/* Extra Large (Laptops, Desktops) */
@media (min-width: 1025px) {
  /* Styles for laptops and desktop screens */
}

/* Ultra Large (Wider Desktop Screens) */
@media (min-width: 1440px) {
  /* Styles for large desktop displays */
}
</style>