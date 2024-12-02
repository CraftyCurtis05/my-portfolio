<template>
    <!-- Navbar Component -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- Navbar Toggler Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navbar Links List-->
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav mx-auto">
                    <router-link to="/" class="nav-item nav-link pe-4">Home</router-link>
                    <router-link to="/about" class="nav-item nav-link ps-4 pe-4">About</router-link>
                    <router-link to="/education" class="nav-item nav-link ps-4 pe-4">Education</router-link>
                    <router-link to="/experience" class="nav-item nav-link ps-4 pe-4">Experience</router-link>
                    <router-link to="/projects" class="nav-item nav-link ps-4 pe-4">Projects</router-link>
                    <router-link to="/contact" class="nav-item nav-link ps-4 me-5">Contact</router-link> 
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
nav {
    height: 3.5rem;
}
</style>