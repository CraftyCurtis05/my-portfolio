<!-- Header Component Display--->
<template>

    <!-- Display Component Body -->
    <body>

        <!-- Logo -->
        <div class="logo">
            <router-link to="/">
                <img src="@/assets/logo/logo_blk_01.png" alt="Jannifer Curtis Logo" title="Go Home">
            </router-link>    
        </div>

        <!-- Header Component -->
        <header class="icons d-flex flex-row-reverse bd-highlight">  
            <!-- Social Media Icons -->
            <a href="https://www.hackerrank.com/profile/craftycurtis05" target="_blank" title="My HackerRank Profile">
                <img class="icon" src="@/assets/icons/hackerrank_icon.png" alt="HackerRank Logo">
            </a>
            <a href="https://www.codecademy.com/profiles/CraftyCurtis05" target="_blank" title="My Codecademy Profile">
                <img class="icon" src="@/assets/icons/codecademy_icon.png" alt="Codecademy Logo">
            </a>
            <a href="https://github.com/CraftyCurtis05" target="_blank" title="My GitHub Profile">
                <img class="icon" src="@/assets/icons/github_icon.png" alt="GitHub Logo">
            </a>
            <a href="https://www.linkedin.com/in/jcurtisdeveloper/" target="_blank" title="My LinkedIn Profile">
                <img class="icon" src="@/assets/icons/linkedin_icon.png" alt="LinkedIn Logo">
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
