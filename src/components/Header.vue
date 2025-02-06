<!-- Header Component --->
<template>

    <article>

        <!-- Logo -->
        <section class="logo">
            <router-link to="/">
                <img
                    src="@/assets/logo/light_theme/logo_blk_01.png"
                    alt="Jennifer Curtis Logo"
                    title="Go to My Home Page"
                >
            </router-link>    
        </section>

        <!-- Header -->
        <header class="icons d-flex flex-row-reverse bd-highlight">  
            <!-- Social Media -->
            <a
                href="https://www.hackerrank.com/profile/craftycurtis05"
                target="_blank"
                title="Visit My HackerRank Profile"
            ><img
                class="icon"
                src="@/assets/icons/light_theme/hackerrank_icon_blk.png"
                alt="HackerRank Icon"
            ></a>
            <a
                href="https://www.codecademy.com/profiles/CraftyCurtis05"
                target="_blank"
                title="Visit My Codecademy Profile"
            ><img
                class="icon"
                src="@/assets/icons/light_theme/codecademy_icon_blk.png"
                alt="Codecademy Icon"
            ></a>
            <a
                href="https://github.com/CraftyCurtis05"
                target="_blank"
                title="Visit My GitHub Profile"
            ><img
                class="icon"
                src="@/assets/icons/light_theme/github_icon_blk.png"
                alt="GitHub Icon"
            ></a>
            <a
                href="https://www.linkedin.com/in/jcurtisdeveloper/"
                target="_blank"
                title="Visit My LinkedIn Profile"
            ><img
                class="icon"
                src="@/assets/icons/light_theme/linkedin_icon_blk.png"
                alt="LinkedIn Icon"
            ></a>
        </header>

        <!-- NavBar Component -->
        <section id="navbar">
            <NavBar/>
        </section>

    </article>

</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
    name: "Header",
    components: { NavBar }
}
</script>

<style scoped>
.logo {
    position: absolute;
    padding: clamp(1.1rem, 1vw, 1.6rem); /* 1024px - 2560 */
    z-index: 1000;
}

.logo img {
    width: clamp(10rem, 11.9vw, 16.4rem);  /* 1024px - 2560 */
    height: auto;
}

header {
    height: clamp(3.5rem, 4vw, 5.5rem);  /* 1024px - 2560 */
}

header .icon {
    margin-right: clamp(.4rem, .5vw, 1rem);  /* 1024px - 2560 */
}

.icon {
    width: clamp(2.4rem, 2.75vw, 4.1rem);  /* 1024px - 2560 */
    height: auto;
    margin-inline: clamp(.4rem, .5vw, .6rem);  /* 1024px - 2560 */
    margin-block: clamp(.5rem, .6vw, .75rem);  /* 1024px - 2560 */
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
