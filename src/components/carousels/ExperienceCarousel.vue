<!-- Experience Carousel Component -->
<template>
    <article id="carouselIndicators" class="carousel slide mx-auto" data-bs-ride="carousel">

        <section class="carousel-indicators mx-auto">
            <button
                v-for="(item, index) in experience"
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
                v-for="(item, index) in experience"
                :key="item.id"
                :class="['carousel-item', { active: index === 0 }]"
            >
                <div class="card text-center pb-4 mx-auto">
                    <img 
                        class="card-img-top mx-auto my-5"
                        :src="(`/assets/experience/icons/${item.image}`)"
                        :alt="item.alt"
                    />
                    <div class="card-body my-4">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <h4 class="card-subtitle text-muted">{{ item.subtitle }}</h4>
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
  name: "ExperienceCarousel",
  data() {
    return {
      experience: [
        {
          id: 1,
          title: "Bootstrap 5",
          subtitle: "1 year experience",
          image: "bootstrap_icon.webp",
          alt: "Bootstrap 5 Logo"
        },
        {
          id: 2,
          title: "CSS 3",
          subtitle: "2 years experience",
          image: "css_icon.webp",
          alt: "CSS 3 Logo"
        },
        {
          id: 3,
          title: "Docker",
          subtitle: "1 year experience",
          image: "docker_icon.webp",
          alt: "Docker Logo"
        },
        {
          id: 4,
          title: "Express",
          subtitle: "2 years experience",
          image: "express_icon.webp",
          alt: "Express Logo"
        },
        {
          id: 5,
          title: "Git",
          subtitle: "2 years experience",
          image: "git_icon.webp",
          alt: "Git Logo"
        },
        {
          id: 6,
          title: "HTML 5",
          subtitle: "3 years experience",
          image: "html_icon.webp",
          alt: "HTML 5 Logo"
        },
        {
          id: 7,
          title: "Adobe Illustrator",
          subtitle: "3 years experience",
          image: "illustrator_icon.webp",
          alt: "Adobe Illustrator Logo"
        },
        {
          id: 8,
          title: "Intellij IDEA",
          subtitle: "2 years experience",
          image: "intellij_icon.webp",
          alt: "Intellij IDEA Logo"
        },
        {
          id: 9,
          title: "Java",
          subtitle: "2 years experience",
          image: "java_icon.webp",
          alt: "Java Logo"
        },
        {
          id: 10,
          title: "JavaScript",
          subtitle: "2 years experience",
          image: "javascript_icon.webp",
          alt: "JavaScript Logo"
        },
        {
          id: 11,
          title: "J-Unit 5",
          subtitle: "1 year experience",
          image: "junit_icon.webp",
          alt: "J-Unit 5 Logo"
        },
        {
          id: 12,
          title: "Node.js",
          subtitle: "2 years experience",
          image: "nodejs_icon.webp",
          alt: "Node.js Logo"
        },
        {
          id: 13,
          title: "Adobe Photoshop",
          subtitle: "5 years experience",
          image: "photoshop_icon.webp",
          alt: "Adobe Photoshop Logo"
        },
        {
          id: 14,
          title: "PostgreSQL",
          subtitle: "2 years experience",
          image: "postgresql_icon.webp",
          alt: "PostgreSQL Logo"
        },
        {
          id: 15,
          title: "Python",
          subtitle: "2 years experience",
          image: "python_icon.webp",
          alt: "Python Logo"
        },
        {
          id: 16,
          title: "SketchUp",
          subtitle: "5 years experience",
          image: "sketchup_icon.webp",
          alt: "SketchUp Logo"
        },
        {
          id: 17,
          title: "Spring Boot",
          subtitle: "2 years experience",
          image: "spring_boot_icon.webp",
          alt: "Spring Boot Logo"
        },
        {
          id: 18,
          title: "SQL",
          subtitle: "2 years experience",
          image: "sql_icon.webp",
          alt: "SQL Logo"
        },
        {
          id: 19,
          title: "Visual Studio Code",
          subtitle: "2 years experience",
          image: "vscode_icon.webp",
          alt: "Visual Studio Code Logo"
        },
        {
          id: 20,
          title: "Vue.js",
          subtitle: "2 years experience",
          image: "vue_icon.webp",
          alt: "Vue.js Logo"
        }
      ]
    };
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