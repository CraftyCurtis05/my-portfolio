<!-- Education Carousel Component-->
<template>
    <aside id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
        
        <article class="carousel-indicators">
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </article>

        <article class="carousel-inner pt-2">
            
            <!-- Tech Elevator Card -->
            <section class="carousel-item active">
                <div class="card">
                    <img class="card-img-top m-auto" src="@/assets/education/logos/te_logo.png" alt="Tech Elevator Logo">
                    <div class="card-body text-center">
                        <h3 class="card-title">Tech Elevator Bootcamp</h3>
                        <h4 class="card-subtitle mb-2 text-muted">2023 - 2023</h4>
                        <ul class="card-text mr-4">
                            <li class="gpa my-1 text-muted h6">100% Completed</li>
                            <li class="degree my-1 h5">Certificate of Completion</li>
                            <li class="major my-1 lead">Full-Stack Web Application</li>
                            <li class="skills my-1 lead">Java, Vue.js, PostgreSQL Stack</li>
                            <li class="card-link"><a href="https://www.techelevator.com/" target="_blank" title="Visit Tech Elevator">Visit Website</a></li>
                        </ul>    
                    </div>
                </div>
            </section>

            <!-- Ohio State Card -->
            <section class="carousel-item">
                <div class="card">
                    <img class="card-img-top m-auto" src="@/assets/education/logos/osu_logo.png" alt="Ohio State University Logo">
                    <div class="card-body text-center">
                        <h3 class="card-title">Ohio State University</h3>
                        <h4 class="card-subtitle mb-2 text-muted">2009-2010</h4>
                        <ul class="card-text mr-4">
                            <li class="gpa my-1 text-muted h6">3.2 GPA</li>
                            <li class="degree my-1 h5">Knowlton School of Architecture</li>
                            <li class="major my-1 lead">Completed 111 credit hrs towards BS Architecture</li>
                            <li class="skills my-1 lead">CAD, Sketchup, Adobe Suite & Photoshop</li>
                            <li class="card-link"><a href="https://www.osu.edu/" target="_blank" title="Visit Ohio State University">Visit Website</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Marion Technical Card -->
            <section class="carousel-item"> 
                <div class="card">
                    <img class="card-img-top m-auto" src="@/assets/education/logos/mtc_logo.png" alt="Marion Technical College Logo">
                    <div class="card-body text-center">
                        <h3 class="card-title">Marion Technical College</h3>
                        <h4 class="card-subtitle mb-2 text-muted">2006 - 2008</h4>
                        <ul class="card-text mr-4">
                            <li class="gpa my-1 text-muted h6">3.9 GPA</li>
                            <li class="degree my-1 h5">Dean's List</li>
                            <li class="major my-1 lead">Completed 74 credit hours to transfer</li>
                            <li class="skills my-1 lead">General studies & STNA Certification</li>
                            <li class="card-link"><a href="https://www.mtc.edu/" target="_blank" title="Visit Marion Technical College">Visit Website</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Canal Winchester Card -->
            <section class="carousel-item">
                <div class="card">
                    <img class="card-img-top m-auto" src="@/assets/education/logos/cwhs_logo.png" alt="Canal Winchester High School Logo">
                    <div class="card-body text-center">
                        <h3 class="card-title">Canal Winchester High School</h3>
                        <h4 class="card-subtitle mb-2 text-muted">2001 - 2005</h4>
                        <ul class="card-text mr-4">
                            <li class="gpa my-1 text-muted h6">3.5 GPA</li>
                            <li class="degree my-1 h5">College Prep & Advanced Placement</li>
                            <li class="major my-1 lead">Art, French & Pride Club</li>
                            <li class="skills my-1 lead">Cheerleading</li>
                            <li class="card-link"><a href="https://highschool.cwschools.org/" target="_blank" title="Visit Canal Winchester High School">Visit Website</a></li>
                        </ul>
                    </div>
                </div>
            </section>

        </article>

        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>

    </aside>
</template>

<script>
export default {
    name: "EducationCarousel"
}
</script>

<style scoped>
.carousel {
    width: 100vw;
    height: auto;
    background-color: #dadae2;
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
    height: 15rem;
    width: 15rem;
}

.card ul {
    list-style: none;
}

.card-link a:hover {
    font-weight: 500;
}

button {
    background-color: #dadae2;
}
</style>