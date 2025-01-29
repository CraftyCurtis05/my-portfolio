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
    background: url('@/assets/home/temp_portrait.jpg') no-repeat center center;
    background-size: 100vw auto;
}
</style>