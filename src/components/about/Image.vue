<!-- Image Component -->
<template>
  <article 
    class="image-container position-relative p-0 m-0" 
  >

    <!-- Transition Image -->
    <section class="image position-relative" :class="{ 'no-hover': receivedData }">
      <img
        src="/about/images/top_image.webp"
        class="top-image img-fluid position-absolute"
        alt="Picture of Jennifer Curtis"
        title="Jennifer Curtis"
      />
      <img 
        src="/about/images/bottom_image.webp"
        class="bottom-image img-fluid position-absolute"
        alt="Picture of Jennifer Curtis"
        title="Jennifer Curtis"
      />
    </section>

  </article>
</template>

<script>
export default {
  name: "Image",
  props: {
    receivedData: {
      type: Boolean,
      required: true
    }  
  },
  watch: {
    receivedData() {
      this.receivedData;
    }
  }
};
</script>

<style scoped>
@media (min-width: 1000px) {
  .image {
    width: clamp(15rem, 20vw, 35rem);
    height: clamp(15rem, 20vw, 35rem);
    border-radius: 1rem;
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

  .no-hover .top-image {
    transition: none; /* Prevent hover effect */
    visibility: visible; /* Ensure top image is visible */
  }

  .no-hover .bottom-image {
    display: none; /* Hide bottom image */
    visibility: hidden; /* Hide bottom image */
  }
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