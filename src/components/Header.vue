<!-- Header Component Display--->
<template>

    <!-- Display Component Body -->
    <body>

        <!-- Logo -->
        <div class="logo">
            <router-link to="/">
                <img src="@/assets/logo/logo_blk_01.png" alt="logo">
            </router-link>    
        </div>

        <!-- Header Component -->
        <header class="icons d-flex flex-row-reverse bd-highlight">  
            <!-- Social Media Icons -->
            <a href="https://www.hackerrank.com/profile/craftycurtis05" target="_blank">
                <img class="icon" src="@/assets/icons/hackerrank_icon.png">
            </a>
            <a href="https://www.codecademy.com/profiles/CraftyCurtis05" target="_blank">
                <img class="icon" src="@/assets/icons/codecademy_icon.png">
            </a>
            <a href="https://github.com/CraftyCurtis05">
                <img class="icon" src="@/assets/icons/github_icon.png" target="_blank">
            </a>
            <a href="https://www.linkedin.com/in/jcurtisdeveloper/">
                <img class="icon" src="@/assets/icons/linkedin_icon.png" target="_blank">
            </a>
        </header>

        <!-- Display NavBar Component -->
        <section id="navbar">
            <NavBar/>
        </section>

    </body>

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
    z-index: 1000;
    padding: 1rem;
}

.logo img {
    width: 12rem;
    height: auto;
}

header {
    width: 100vw;
    block-size: 4rem;
    background-color: #dadae2;
}

header .icon {
    margin-right: 1rem;
}

.icon {
    width: 3rem;
    height: auto;
    padding: .2rem;
}
</style>
