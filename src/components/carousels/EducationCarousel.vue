<!-- Education Carousel Component-->
<template>
    <article id="carouselIndicators" class="carousel slide mx-auto" data-bs-ride="carousel">
        
        <section class="carousel-indicators mx-auto">
            <button
                v-for="(item, index) in education"
                :key="item.id"
                type="button"
                :data-bs-target="'#carouselIndicators'"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                :aria-current="index === 0 ? 'true' : undefined"
                :aria-label="'Slide ' + (index + 1)"
            ></button>
        </section>

        <section class="carousel-inner">

            <div
                v-for="(item, index) in education"
                :key="item.id"
                :class="['carousel-item', { active: index === 0 }]"
            >
                <div class="card text-center pb-4 mx-auto">
                    <img 
                        class="card-img-top mx-auto"
                        :src="(`/assets/education/logos/${item.image}`)"
                        :alt="item.alt"
                    />
                    <div class="card-body">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <h4 class="card-subtitle text-muted mb-2" >{{ item.dates }}</h4>
                        <p class="degree h5 my-1">{{ item.degree }}</p>
                        <p class="major lead my-1">{{ item.major }}</p>
                        <p class="skills lead my-1">{{ item.skills }}</p>
                        <p class="card-link"><a :href="item.website" target="_blank" :title="item.siteTitle">{{ item.siteTitle }}</a></p>
                    </div>
                </div>
            </div>

        </section>

        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
        </button>

    </article>
</template>

<script>
export default {
    name: "EducationCarousel",
    data() {
        return {
            education: [
                {
                    id: 1,
                    title: "Tech Elevator Bootcamp",
                    dates: "2023 - 2023",
                    degree: "Certificate of Completion",
                    major: "Java Full-Stack Web Application",
                    skills: "Java, Vue.js, PostgreSQL Stack",
                    image: "te_logo.webp",
                    alt: "Tech Elevator Logo",
                    website: "https://www.techelevator.com/",
                    siteTitle: "Visit Tech Elevator"
                },
                {
                    id: 2,
                    title: "Ohio State University",
                    dates: "2009 - 2010",
                    degree: "Knowlton School of Architecture",
                    major: "Completed 111 credit hrs towards BS Architecture",
                    skills: "CAD, Sketchup, Adobe Suite & Photoshop",
                    image: "osu_logo.webp",
                    alt: "Ohio State University Logo",
                    website: "https://www.osu.edu/",
                    siteTitle: "Visit Ohio State University"
                },
                {
                    id: 3,
                    title: "Marion Technical College",
                    dates: "2006 - 2008",
                    degree: "General Studies",
                    major: "Completed 74 credit hours to transfer",
                    skills: "Dean's List & STNA Certification",
                    image: "mtc_logo.webp",
                    alt: "Marion Technical College Logo",
                    website: "https://www.mtc.edu/",
                    siteTitle: "Visit Marion Technical College"
                },
                {
                    id: 4,
                    title: "Canal Winchester High School",
                    dates: "2001 - 2005",
                    degree: "College Prep & Advanced Placement",
                    major: "Art, French & Pride Club",
                    skills: "Cheerleading",
                    image: "cwhs_logo.webp",
                    alt: "Canal Winchester High School Logo",
                    website: "https://highschool.cwschools.org/",
                    siteTitle: "Visit Canal Winchester High School"
                }
            ]
        }
    }        
};
</script>

<style scoped>
.carousel,
.card {
    width: 75vw;
    height: 75vh;
}

.carousel-indicators,
.carousel-control-next-icon,
.carousel-control-prev-icon {
    filter: invert(50%);
}

.carousel-inner {
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1);
}

.card img {
    height: 15rem;
    width: 15rem;
}

.card-link a:hover {
    font-weight: 500;
}

button {
    width: 5%;
    background-color: #dadae2;
}

button:hover {
    background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454);
    background-size: 250% 250%;
    border: .1vw solid #cccce4;
    border-radius: .2rem;
    opacity: .7;
    animation: gradient-animation 3s ease infinite;
    box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.15);
}

/* Define the animation */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%; /* Start position */
  }
  50% {
    background-position: 100% 50%; /* End position */
  }
  100% {
    background-position: 0% 50%; /* Back to start */
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