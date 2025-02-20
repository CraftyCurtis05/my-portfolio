<!-- Jumbotron Component -->
<template>
    <article class="jumbotron jumbotron-fluid p-0 m-0">

        <!-- Full-Stack Dev Paragraph -->
        <section class="paragraph text-dark text-left text-start col-md-4">
            <h1 class="display-4">Full-Stack Developer</h1>
            <p class="lead">
              Versatile with experience in Java, Python, JavaScript, SQL, PostgreSQL 
              + multiple frameworks - such as Spring, Bootstrap, Vue3 - 
              building seamless, data-driven applications from 
              front-end to back-end.</p>
        </section>

        <!-- UI/UX Designer Paragraph -->
        <section class="paragraph text-dark text-right text-end col-md-4">
            <h1 class="display-4">UI/UX Designer</h1>
            <p class="lead">
                Creative with experience in Adobe Suite, CAD, HTML5, 
                CSS3 - crafting captivating, user-friendly designs by 
                blending innovation with an understanding 
                of aesthetics and functionality.</p>
        </section>
    </article>
</template>

<script>
export default {
    name: "Jumbotron"
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .jumbotron {
    width: 100vw;
    height: 80vh;
    background-color: transparent;
  }

  .paragraph {
    position: absolute;
    width: 100%;
  }

  h1 {
    font-size: clamp(1.9rem, 2.4vw, 4rem);
    font-weight: 300;
  }

  p {
    font-size: clamp(1.15rem, 1.35vw, 2.15rem);
  }

  .text-left {
    width: 33%;
    bottom: 43%;
    left: 3%;
  }

  .text-right {
    width: 34%;
    bottom: 25%;
    left: 65%;
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