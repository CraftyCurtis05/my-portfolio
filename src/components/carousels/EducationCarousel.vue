<template>
    <!-- Education Carousel -->
    <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">

            <!-- Tech Elevator Card -->
            <div class="carousel-item active">
                <div class="card">
                    <img class="card-img-top m-auto" src="@/assets/education/te_logo.png" alt="te image card">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Tech Elevator Bootcamp</h4>
                        <h5 class="card-subtitle mb-2 text-muted text-center">2023 - 2023</h5>
                        <ul class="card-text text-center">
                            <li>100% Completed</li>
                            <li>Certificate of Completion</li>
                            <li>Full-Stack Web Application</li>
                            <li>Java, Vue.js, PostgreSQL Stack</li>
                            <li><a href="https://www.techelevator.com/" class="card-link">Visit Website</a></li>
                        </ul>    
                    </div>
                </div>
            </div>

            <!-- Ohio State Card -->
            <div class="carousel-item">
                <div class="card">
                    <img class="card-img-top m-auto" src="@/assets/education/osu_logo.png" alt="osu image card">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Ohio State University</h4>
                        <h5 class="card-subtitle mb-2 text-muted text-center">2009-2010</h5>
                        <ul class="card-text mr-4 text-center">
                            <li>3.2 GPA</li>
                            <li>Knowlton School of Architecture</li>
                            <li>Completed 128 credit hrs towards BS</li>
                            <li>CAD, Sketchup, Adobe Suite & Photoshop</li>
                            <li><a href="https://www.osu.edu/" class="card-link">Visit Website</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Marion Technical Card -->
            <div class="carousel-item"> 
                <div class="card">
                    <img class="card-img-top m-auto" src="@/assets/education/mtc_logo.png" alt="mtc image card">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Marion Technical College</h4>
                        <h5 class="card-subtitle mb-2 text-muted text-center">2006 - 2008</h5>
                        <ul class="card-text text-center">
                            <li>3.9 GPA</li>
                            <li>Dean's List</li>
                            <li>STNA Certification</li>
                            <li>CPR Certification</li>
                            <li><a href="https://www.mtc.edu/" class="card-link">Visit Website</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Canal Winchester Card -->
            <div class="carousel-item">
                <div class="card">
                    <img class="card-img-top m-auto" src="@/assets/education/cwhs_logo.png" alt="cwhs image card">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Canal Winchester High School</h4>
                        <h5 class="card-subtitle mb-2 text-muted text-center">2001 - 2005</h5>
                        <ul class="card-text text-center">
                            <li>3.5 GPA</li>
                            <li>College Prep</li>
                            <li>Art, French & Pride Club</li>
                            <li>Cheerleading</li>
                            <li><a href="https://highschool.cwschools.org/" class="card-link">Visit Website</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "EducationCarousel"
}
</script>

<style scoped>
.carousel {
    width: 50vw;
    height: auto;
    background-color: #dadae2;
    padding: 3rem 0rem;
    margin: auto;
}

.carousel-indicators,
.carousel-control-next-icon,
.carousel-control-prev-icon {
    filter: invert(100%);
    margin: auto;
}

.card {
    padding-bottom: 2rem;
}

.card img {
    height: 20rem;
    width: 20rem;
}

.card ul {
    list-style: none;
}

button {
    background-color: #dadae2;
}
</style>