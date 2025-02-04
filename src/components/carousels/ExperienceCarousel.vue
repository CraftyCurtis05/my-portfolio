<!-- Experience Carousel Component -->
<template>
    <article id="carouselIndicators" class="carousel slide mx-auto mx-5" data-bs-ride="carousel">

        <section class="carousel-indicators m-auto">
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
                        :src="(`src/assets/experience/icons/${item.image}`)"
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
          image: "bootstrap_icon.png",
          alt: "Bootstrap 5 Logo"
        },
        {
          id: 2,
          title: "CSS 3",
          subtitle: "2 years experience",
          image: "css_icon.png",
          alt: "CSS 3 Logo"
        },
        {
          id: 3,
          title: "Docker",
          subtitle: "1 year experience",
          image: "docker_icon.png",
          alt: "Docker Logo"
        },
        {
          id: 4,
          title: "Express",
          subtitle: "2 years experience",
          image: "express_icon.png",
          alt: "Express Logo"
        },
        {
          id: 5,
          title: "Git",
          subtitle: "2 years experience",
          image: "git_icon.png",
          alt: "Git Logo"
        },
        {
          id: 6,
          title: "HTML 5",
          subtitle: "3 years experience",
          image: "html_icon.png",
          alt: "HTML 5 Logo"
        },
        {
          id: 7,
          title: "Adobe Illustrator",
          subtitle: "3 years experience",
          image: "illustrator_icon.png",
          alt: "Adobe Illustrator Logo"
        },
        {
          id: 8,
          title: "Intellij IDEA",
          subtitle: "2 years experience",
          image: "intellij_icon.png",
          alt: "Intellij IDEA Logo"
        },
        {
          id: 9,
          title: "Java",
          subtitle: "2 years experience",
          image: "java_icon.png",
          alt: "Java Logo"
        },
        {
          id: 10,
          title: "JavaScript",
          subtitle: "2 years experience",
          image: "javascript_icon.png",
          alt: "JavaScript Logo"
        },
        {
          id: 11,
          title: "J-Unit 5",
          subtitle: "1 year experience",
          image: "junit_icon.png",
          alt: "J-Unit 5 Logo"
        },
        {
          id: 12,
          title: "Node.js",
          subtitle: "2 years experience",
          image: "nodejs_icon.png",
          alt: "Node.js Logo"
        },
        {
          id: 13,
          title: "Adobe Photoshop",
          subtitle: "5 years experience",
          image: "photoshop_icon.png",
          alt: "Adobe Photoshop Logo"
        },
        {
          id: 14,
          title: "PostgreSQL",
          subtitle: "2 years experience",
          image: "postgresql_icon.png",
          alt: "PostgreSQL Logo"
        },
        {
          id: 15,
          title: "Python",
          subtitle: "2 years experience",
          image: "python_icon.png",
          alt: "Python Logo"
        },
        {
          id: 16,
          title: "SketchUp",
          subtitle: "5 years experience",
          image: "sketchup_icon.png",
          alt: "SketchUp Logo"
        },
        {
          id: 17,
          title: "Spring Boot",
          subtitle: "2 years experience",
          image: "spring_boot_icon.png",
          alt: "Spring Boot Logo"
        },
        {
          id: 18,
          title: "SQL",
          subtitle: "2 years experience",
          image: "sql_icon.png",
          alt: "SQL Logo"
        },
        {
          id: 19,
          title: "Visual Studio Code",
          subtitle: "2 years experience",
          image: "vscode_icon.png",
          alt: "Visual Studio Code Logo"
        },
        {
          id: 20,
          title: "Vue.js",
          subtitle: "2 years experience",
          image: "vue_icon.png",
          alt: "Vue.js Logo"
        }
      ]
    };
  }
};
</script>

<style scoped>
article {
  width: 75%;
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
</style>