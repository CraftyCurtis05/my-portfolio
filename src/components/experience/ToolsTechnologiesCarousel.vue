<!-- Tools & Technologies Component -->
<template>
  <section class="tools-section">

    <SectionHeader
      eyebrow="Tools · Technologies · Systems"
      title="Tools & Technologies"
      description="Technologies and tools I have worked with across development, systems work and hands-on projects."
    />


    <!-- Tools Carousel -->
    <div
      id="toolsCarousel"
      class="carousel slide"
      data-bs-ride="false"
      role="region"
      aria-roledescription="carousel"
      aria-label="Tools and technologies"
    >

      <!-- Carousel Inner -->
      <div class="carousel-inner">

        <div
          v-for="(group, groupIndex) in groupedTools"
          :key="groupIndex"
          :class="[
            'carousel-item',
            { active: groupIndex === 0 }
          ]"
        >

          <!-- Tool Group -->
          <div class="tools-grid">

            <article
              v-for="tool in group"
              :key="tool.id"
              class="tool-card"
            >
              <img
                :src="`/assets/images/experience/icons/${tool.image}`"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              >

              <p>
                {{ tool.name }}
              </p>
            </article>

          </div>

        </div>

      </div>


      <!-- Previous Technologies -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#toolsCarousel"
        data-bs-slide="prev"
        aria-label="Previous technologies"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
      </button>


      <!-- Next Technologies -->
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#toolsCarousel"
        data-bs-slide="next"
        aria-label="Next technologies"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
      </button>


      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(group, index) in groupedTools"
          :key="`indicator-${index}`"
          type="button"
          data-bs-target="#toolsCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : undefined"
          :aria-label="`Technology group ${index + 1}`"
        ></button>
      </div>

    </div>

  </section>
</template>


<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: "ToolsTechnologiesCarousel",

  components: {
    SectionHeader
  },


  data() {
    return {
      tools: [
        {
          id: 1,
          name: "Java",
          image: "java_icon.webp"
        },
        {
          id: 2,
          name: "Spring Boot",
          image: "spring_boot_icon.webp"
        },
        {
          id: 3,
          name: "JavaScript",
          image: "javascript_icon.webp"
        },
        {
          id: 4,
          name: "Vue.js",
          image: "vue_icon.webp"
        },
        {
          id: 5,
          name: "PostgreSQL",
          image: "postgresql_icon.webp"
        },
        {
          id: 6,
          name: "SQL",
          image: "sql_icon.webp"
        },
        {
          id: 7,
          name: "Docker",
          image: "docker_icon.webp"
        },
        {
          id: 8,
          name: "Git",
          image: "git_icon.webp"
        },
        {
          id: 9,
          name: "Python",
          image: "python_icon.webp"
        },
        {
          id: 10,
          name: "Bootstrap",
          image: "bootstrap_icon.webp"
        }
      ]
    };
  },


  computed: {

    /* Group Tools for Carousel */
    groupedTools() {
      const groupSize = 5;
      const groups = [];

      for (
        let i = 0;
        i < this.tools.length;
        i += groupSize
      ) {
        groups.push(
          this.tools.slice(
            i,
            i + groupSize
          )
        );
      }

      return groups;
    }
  }
};
</script>


<style scoped>
/* ========================================
   Tools Section
======================================== */

.tools-section {
  width: 100%;
}


/* ========================================
   Carousel
======================================== */

.carousel-inner {
  overflow: hidden;

  padding:
    1.5rem
    clamp(3rem, 7vw, 6rem)
    3.5rem;

  background-color:
    var(--color-surface-transparent);

  border-radius: 1rem;

  box-shadow:
    0 .5rem .75rem
    var(--color-shadow);
}


/* ========================================
   Tool Grid
======================================== */

.tools-grid {
  display: grid;
  grid-template-columns:
    repeat(5, minmax(0, 1fr));

  align-items: stretch;

  gap:
    clamp(1rem, 2vw, 2rem);
}


/* ========================================
   Tool Card
======================================== */

.tool-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 0;

  padding:
    1.25rem
    .75rem;

  background-color:
    var(--color-surface-transparent-strong);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: .75rem;

  box-shadow:
    .2rem .3rem .45rem
    var(--color-shadow);

  text-align: center;

  transition:
    transform .2s ease,
    box-shadow .2s ease;
}

.tool-card:hover {
  transform:
    translateY(-3px);

  box-shadow:
    .3rem .4rem .55rem
    var(--color-shadow-strong);
}

.tool-card img {
  width:
    clamp(3.5rem, 5vw, 5.5rem);

  height:
    clamp(3.5rem, 5vw, 5.5rem);

  margin-bottom: .75rem;

  object-fit: contain;
}

.tool-card p {
  margin: 0;

  color:
    var(--color-text);

  font-size:
    clamp(.9rem, 1vw, 1.05rem);

  font-weight: 500;
}


/* ========================================
   Carousel Indicators
======================================== */

.carousel-indicators {
  bottom: .75rem;
}


/* ========================================
   Carousel Controls
======================================== */

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 900px) {
  .tools-grid {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
  }

  .carousel-inner {
    padding:
      1.5rem
      3.5rem
      3.5rem;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 7%;
  }
}


/* ========================================
   Smaller Tablet
======================================== */

@media (max-width: 768px) {
  .tools-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .carousel-inner {
    padding:
      1.25rem
      3rem
      3.25rem;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .tools-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: .75rem;
  }

  .carousel-inner {
    padding:
      1rem
      2.5rem
      3rem;
  }

  .tool-card {
    padding:
      1rem
      .5rem;
  }

  .tool-card img {
    width: 3.25rem;
    height: 3.25rem;
  }

  .tool-card p {
    font-size: .85rem;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 9%;
  }
}


/* ========================================
   Small Mobile
======================================== */

@media (max-width: 350px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }

  .carousel-inner {
    padding-inline: 2.25rem;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 11%;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .tool-card {
    transition: none;
  }
}
</style>