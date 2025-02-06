<!-- Jumbotron Component -->
<template>
    <article class="jumbotron">
        <!-- Full-Stack Dev Paragraph -->
        <section class="paragraph text-dark text-left">
            <h1 class="display-4">Full-Stack Developer</h1>
            <p class="lead">Versatile with experience in Java, Python, JavaScript, PostgreSQL, <br>
            SQL + multiple frameworks - such as Spring, Bootstrap, Vue3 - <br>
            building seamless, data-driven applications from <br>
            front-end to back-end.</p>
        </section>

        <!-- UI/UX Designer Paragraph -->
        <section class="paragraph text-dark text-right">
            <h1 class="display-4">UI/UX Designer</h1>
            <p class="lead">Creative with experience in Adobe Suite, CAD, HTML5 <br>
            + CSS - crafting captivating, user-friendly designs by <br>
            blending innovation with an understanding <br>
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
.jumbotron {
  height: 35vw;
  background: url('/home/temp_portrait.jpg') no-repeat center center;
  background-size: 100vw auto;
}

h1 {
  font-size: clamp(1.9rem, 2.4vw, 4rem); /* 1024px - 2560 */
  font-weight: 300;
  margin-inline: clamp(-1rem, -1.5vw, -1.75rem); /* 1024px - 2560 */
}

p {
  font-size: clamp(1.15rem, 1.35vw, 2.15rem); /* 1024px - 2560 */
  margin-inline: clamp(-1rem, -1.5vw, -1.75rem); /* 1024px - 2560 */
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