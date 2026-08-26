<!-- Education Carousel Component -->
<template>
  <section class="education-section">

    <!-- Education Carousel -->
    <div
      id="educationCarousel"
      class="carousel slide"
      data-bs-ride="false"
      role="region"
      aria-roledescription="carousel"
      aria-label="Education"
    >

      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(item, index) in education"
          :key="item.id"
          type="button"
          data-bs-target="#educationCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : undefined"
          :aria-label="`Education item ${index + 1}: ${item.title}`"
        ></button>
      </div>


      <!-- Education Cards -->
      <div class="carousel-inner">

        <div
          v-for="(item, index) in education"
          :key="item.id"
          :class="[
            'carousel-item',
            { active: index === 0 }
          ]"
        >

          <article class="education-card">

            <!-- School Logo -->
            <div class="logo-container">
              <img
                :src="`/assets/images/education/logos/${item.image}`"
                :alt="item.alt"
                loading="lazy"
                decoding="async"
              >
            </div>


            <!-- Education Details -->
            <div class="card-body">

              <h2 class="card-title">
                {{ item.title }}
              </h2>

              <p class="dates">
                {{ item.dates }}
              </p>

              <h3 class="program">
                {{ item.program }}
              </h3>

              <p class="description">
                {{ item.description }}
              </p>

              <p class="skills">
                <strong>
                  Focus:
                </strong>

                {{ item.skills }}
              </p>

              <a
                :href="item.website"
                class="school-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ item.siteTitle }}
              </a>

            </div>

          </article>

        </div>

      </div>


      <!-- Previous Education Item -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#educationCarousel"
        data-bs-slide="prev"
        aria-label="Previous education item"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
      </button>


      <!-- Next Education Item -->
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#educationCarousel"
        data-bs-slide="next"
        aria-label="Next education item"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
      </button>

    </div>

  </section>
</template>


<script>
export default {
  name: "EducationCarousel",


  data() {
    return {
      education: [
        {
          id: 1,
          title: "Tech Elevator",
          dates: "September 2023 - December 2023",
          program: "Full-Stack Java Bootcamp",
          description:
            "Completed an 800+ hour full-stack development program focused on building web applications from database to frontend.",
          skills:
            "Java, Spring Boot, PostgreSQL, JavaScript, Vue.js, HTML and CSS",
          image: "te_logo.webp",
          alt: "Tech Elevator logo",
          website: "https://www.techelevator.com/",
          siteTitle: "Visit Tech Elevator"
        },
        {
          id: 2,
          title: "Ohio State University",
          dates: "January 2009 - December 2009",
          program: "Architecture Coursework",
          description:
            "Completed coursework toward a B.S. in Architecture, reaching 111 total college credit hours including transfer credits.",
          skills:
            "Design, CAD, Adobe tools, visual problem-solving and technical planning",
          image: "osu_logo.webp",
          alt: "Ohio State University logo",
          website: "https://www.osu.edu/",
          siteTitle: "Visit Ohio State University"
        },
        {
          id: 3,
          title: "Marion Technical College",
          dates: "September 2006 - June 2008",
          program: "College Coursework",
          description:
            "Completed transfer coursework before attending Ohio State University and earned Dean’s List recognition.",
          skills:
            "General studies, networking fundamentals and CCNA certification",
          image: "mtc_logo.webp",
          alt: "Marion Technical College logo",
          website: "https://www.mtc.edu/",
          siteTitle: "Visit Marion Technical College"
        }
      ]
    };
  }
};
</script>


<style scoped>
/* ========================================
   Education Section
======================================== */

.education-section {
  width: min(92%, 1100px);

  margin-inline: auto;

  padding-bottom:
    clamp(2rem, 4vw, 4rem);
}


/* ========================================
   Carousel
======================================== */

.carousel-inner {
  overflow: hidden;

  border-radius: 1rem;

  box-shadow:
    0 .5rem .75rem
    var(--color-shadow);
}


/* ========================================
   Education Card
======================================== */

.education-card {
  display: grid;
  grid-template-columns:
    minmax(13rem, .7fr)
    minmax(0, 1.5fr);

  align-items: center;

  gap:
    clamp(2rem, 4vw, 4rem);

  min-height: 30rem;

  padding:
    clamp(2rem, 4vw, 4rem)
    clamp(3rem, 7vw, 6rem);

  background-color:
    var(--color-surface-transparent-strong);
}


/* ========================================
   School Logo
======================================== */

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container img {
  display: block;

  width: min(14rem, 100%);
  max-height: 14rem;

  object-fit: contain;
}


/* ========================================
   Education Details
======================================== */

.card-body {
  min-width: 0;

  text-align: left;
}

.card-title {
  margin-bottom: .4rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.6rem, 2vw, 2.3rem);

  font-weight: 500;
  line-height: 1.2;
}

.dates {
  margin-bottom: 1rem;

  color:
    var(--color-text-secondary);

  font-size: .95rem;
  font-style: italic;
}

.program {
  margin-bottom: 1rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.1rem, 1.4vw, 1.4rem);

  font-weight: 500;
}

.description,
.skills {
  color:
    var(--color-text-body);

  font-size:
    clamp(1rem, 1.1vw, 1.15rem);

  line-height: 1.65;
}

.skills {
  margin-bottom: 1.25rem;
}


/* ========================================
   School Link
======================================== */

.school-link {
  display: inline-block;

  color:
    var(--color-text);

  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;

  border-bottom:
    1px solid
    transparent;

  transition:
    font-weight .2s ease,
    border-color .2s ease;
}

.school-link:hover,
.school-link:focus-visible {
  font-weight: 500;

  border-color:
    var(--color-text);
}

.school-link:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}


/* ========================================
   Carousel Indicators
======================================== */

.carousel-indicators {
  bottom: 1rem;
}


/* ========================================
   Carousel Controls
======================================== */

.carousel-control-prev,
.carousel-control-next {
  width: 6%;
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 900px) {
  .education-section {
    width: min(94%, 800px);
  }

  .education-card {
    grid-template-columns: 1fr;

    gap: 1.5rem;

    min-height: auto;

    padding:
      2.5rem
      4rem
      4rem;
  }

  .logo-container img {
    width:
      min(11rem, 45vw);

    max-height: 11rem;
  }

  .card-body {
    text-align: center;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 8%;
  }
}


/* ========================================
   Smaller Tablet
======================================== */

@media (max-width: 768px) {
  .education-card {
    padding:
      2.25rem
      3.25rem
      3.75rem;
  }

  .description,
  .skills {
    line-height: 1.6;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .education-section {
    width: min(96%, 600px);
  }

  .education-card {
    gap: 1.25rem;

    padding:
      2rem
      2.5rem
      3.5rem;
  }

  .logo-container img {
    width:
      min(8rem, 40vw);

    max-height: 8rem;
  }

  .card-title {
    font-size: 1.45rem;
  }

  .program {
    font-size: 1.1rem;
  }

  .description,
  .skills {
    font-size: .95rem;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 10%;
  }
}


/* ========================================
   Small Mobile
======================================== */

@media (max-width: 400px) {
  .education-card {
    padding-inline: 2rem;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 12%;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .school-link {
    transition: none;
  }
}
</style>