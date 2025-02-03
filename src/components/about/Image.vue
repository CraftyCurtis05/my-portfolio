<!-- Image Component -->
<template>
  <article class="image-container position-relative d-flex flex-column justify-content-center mx-auto">

    <!-- Transition Image -->
    <section class="image position-relative">
      <img
        src="@/assets/about/images/top_image.webp"
        class="top-image img-fluid position-absolute"
        alt="Picture of Jennifer Curtis"
        title="Jennifer Curtis"
      />
      <img 
        src="@/assets/about/images/bottom_image.jpg"
        class="bottom-image img-fluid position-absolute"
        alt="Picture of Jennifer Curtis"
        title="Jennifer Curtis"
      />
    </section>

    <!-- Resume Button -->
    <section class="btn-container mt-2">
      <a
        class="btn"
        href="src/assets/about/jennifer_curtis_resume.pdf"
        target="_blank"
        title="Click to View My Resume"
      >
        My Resume
      </a>
    </section>

    <!-- Certificates Button with Modal Trigger -->
    <section class="btn-container mt-1">
      <!-- Add Certificate button styled like Resume Button -->
      <a
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#carouselModalCertificate"
        title="Click to View My Certificates"
      >
        My Certificates
      </a>
    </section>

  </article>
</template>

<script>
import Certificates from './Certificates.vue';

export default {
  name: "Image",
  components: {
    Certificates
  }
};
</script>

<style scoped>
.image {
  width: 25rem;
  height: 25rem;
  border-radius: 15px;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
}

.top-image,
.bottom-image {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: opacity 10s ease;
}

.top-image {
  z-index: 2; /* Ensures the top image is above the bottom image */
}

.image-container:hover .top-image {
  opacity: 0; /* Fade out top image */
}

.image-container:hover .bottom-image {
  opacity: 1; /* Ensure bottom image is visible */
}

.btn {
  width: 25rem;
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: 1px solid #7c7c8a;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1);
}

.btn:hover {
  font-size: 1.05rem;
  font-weight: 500;
  color: white;
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454);
  background-size: 500% 500%;
  border: 1px solid #cccce4;
  transform: translateY(-1px);
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.2);
  animation: gradient-animation 5s ease infinite;
}

/* Animation for button */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>