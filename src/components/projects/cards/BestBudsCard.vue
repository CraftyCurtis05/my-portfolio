<template>
    <article class="card mb-3" style="max-width: 45vw;">
        <div class="row g-0">
            <section class="col-md-4">
                <!-- Image Carousel -->
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/1-best-buds-login.png" class="d-block w-100" alt="Best Buds App Screenshot 1">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/2-best-buds-home-top.png" class="d-block w-100" alt="Best Buds App Screenshot 2">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/3-best-buds-home-bottom.png" class="d-block w-100" alt="Best Buds App Screenshot 3">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/4-best-buds-search.png" class="d-block w-100" alt="Best Buds App Screenshot 4">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/5-best-buds-shop.png" class="d-block w-100" alt="Best Buds App Screenshot 5">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/6-best-buds-tips-tricks-top.png" class="d-block w-100" alt="Best Buds App Screenshot 6">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/7-best-buds-tips-tricks-middle.png" class="d-block w-100" alt="Best Buds App Screenshot 7">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/8-best-buds-articles.png" class="d-block w-100" alt="Best Buds App Screenshot 8">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/9-best-buds-news.png" class="d-block w-100" alt="Best Buds App Screenshot 9">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/10-best-buds-about.png" class="d-block w-100" alt="Best Buds App Screenshot 10">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/11-best-buds-contact.png" class="d-block w-100" alt="Best Buds App Screenshot 11">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/projects/project-examples/best-buds-dispensary-locator-app/12-best-buds-profile.png" class="d-block w-100" alt="Best Buds App Screenshot 12">
                        </div>
                    </div>
                </div>
            </section>
            <section class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">"Best Buds" Dispensary Locator App</h5>
                    <p class="card-text"><strong>Tech Stack:</strong> Vue.js, Spring Boot, PostgreSQL, Yelp API, Google Maps API, TheNews API, Axios</p>
                    <p class="card-text">
                        Best Buds helps users find nearby dispensaries, learn about cannabis, and access important information about product choices, legality, and safety.
                    </p>
                    <ul>
                        <li>User Authentication & Profile Management</li>
                        <li>Locator with Google Maps for nearby dispensaries</li>
                        <li>State Law SVG map for cannabis legality</li>
                        <li>Tips & Tricks, News, and Articles on Cannabis</li>
                        <li>Contact form for user inquiries (Email.js)</li>
                    </ul>
                    <p class="card-text"><small class="text-muted">Originally designed to provide a comprehensive cannabis resource, now continuously enhanced with new features.</small></p>
                </div>
            </section>
        </div>
    </article>    
</template>

<script>
export default {
    name: "BestBudsCard"
}
</script>

<style scoped>

</style>