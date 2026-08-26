<!-- Experience Carousel Component -->
<template>
  <section class="experience-section">

    <!-- Experience Carousel -->
    <div
      id="experienceCarousel"
      class="carousel slide"
      data-bs-ride="false"
      role="region"
      aria-roledescription="carousel"
      aria-label="Professional experience"
    >

      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(item, index) in experience"
          :key="item.id"
          type="button"
          data-bs-target="#experienceCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : undefined"
          :aria-label="`Experience item ${index + 1}: ${item.title}`"
        ></button>
      </div>


      <!-- Experience Cards -->
      <div class="carousel-inner">

        <div
          v-for="(item, index) in experience"
          :key="item.id"
          :class="[
            'carousel-item',
            { active: index === 0 }
          ]"
        >

          <article class="experience-card">

            <!-- Experience Header -->
            <div class="experience-header">

              <p class="experience-label">
                {{ item.type }}
              </p>

              <h2 class="card-title">
                {{ item.title }}
              </h2>

              <p class="company">
                {{ item.company }}
              </p>

              <p class="card-subtitle">
                {{ item.dates }}
                ·
                {{ item.location }}
              </p>

            </div>


            <!-- Experience Details -->
            <ul class="experience-list">
              <li
                v-for="detail in item.details"
                :key="detail"
              >
                {{ detail }}
              </li>
            </ul>

          </article>

        </div>

      </div>


      <!-- Previous Experience Item -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#experienceCarousel"
        data-bs-slide="prev"
        aria-label="Previous experience item"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
      </button>


      <!-- Next Experience Item -->
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#experienceCarousel"
        data-bs-slide="next"
        aria-label="Next experience item"
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
  name: "ExperienceCarousel",


  data() {
    return {
      experience: [
        {
          id: 1,
          type: "Technology · Development",
          title: "Web Designer & Developer",
          company: "Freelance",
          dates: "January 2025 - Present",
          location: "Columbus, OH",
          details: [
            "Gather and translate client requirements into practical website and application solutions.",
            "Design and develop responsive web applications using JavaScript, Vue.js, Java, Spring Boot and Node.js.",
            "Integrate third-party APIs including Yelp Fusion, Google Maps and news services.",
            "Manage the full project lifecycle from requirements and development through testing, deployment and client communication."
          ]
        },
        {
          id: 2,
          type: "Systems · Infrastructure",
          title: "IT Consultant",
          company: "Freelance",
          dates: "June 2022 - January 2025",
          location: "Columbus, OH",
          details: [
            "Designed containerized server environments using Docker Swarm and virtualization for a cybersecurity client.",
            "Focused infrastructure decisions on redundancy, scalability and operational stability.",
            "Completed more than 400 hours of independent technical training across systems administration, networking and cloud technologies."
          ]
        },
        {
          id: 3,
          type: "Operations · Client Services",
          title: "Route Manager",
          company: "Clean, Inc.",
          dates: "July 2007 - February 2019",
          location: "Dublin, OH",
          details: [
            "Managed day-to-day operations including financial tracking, invoicing, payroll and recurring business workflows.",
            "Improved administrative processes to increase accuracy and operational efficiency.",
            "Coordinated scheduling and workflows across teams of two to four employees.",
            "Maintained client communication and adjusted services to support changing customer and operational needs."
          ]
        },
        {
          id: 4,
          type: "Operations · Property Management",
          title: "Property Manager",
          company: "LELORR Properties, LLC.",
          dates: "April 2013 - May 2015",
          location: "Plain City, OH",
          details: [
            "Managed operations for 33 rental properties including tenant relations, maintenance coordination and vendor management.",
            "Standardized leasing and documentation processes to improve consistency across properties.",
            "Maintained financial, property and compliance records while coordinating ongoing operational needs."
          ]
        },
        {
          id: 5,
          type: "Business Operations · Administration",
          title: "Office Manager",
          company: "OCMS, Inc.",
          dates: "May 2012 - May 2015",
          location: "Plain City, OH",
          details: [
            "Managed business operations including invoicing, payroll, documentation and administrative workflows.",
            "Centralized business processes and documentation to improve organization and day-to-day efficiency.",
            "Created company branding materials, logos and document templates using Adobe Creative Suite."
          ]
        }
      ]
    };
  }
};
</script>


<style scoped>
/* ========================================
   Experience Section
======================================== */

.experience-section {
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
   Experience Card
======================================== */

.experience-card {
  min-height: 30rem;

  padding:
    clamp(2.5rem, 5vw, 4.5rem)
    clamp(4rem, 8vw, 7rem);

  background-color:
    var(--color-surface-transparent-strong);
}


/* ========================================
   Experience Header
======================================== */

.experience-header {
  margin-bottom: 1.75rem;
}

.experience-label {
  margin-bottom: .5rem;

  color:
    var(--color-accent-muted);

  font-size: .8rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.card-title {
  margin-bottom: .35rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.6rem, 2vw, 2.3rem);

  font-weight: 500;
  line-height: 1.2;
}

.company {
  margin-bottom: .25rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.05rem, 1.3vw, 1.3rem);

  font-weight: 500;
}

.card-subtitle {
  margin-bottom: 0;

  color:
    var(--color-text-secondary);

  font-size: .95rem;
  font-style: italic;
}


/* ========================================
   Experience Details
======================================== */

.experience-list {
  margin: 0;

  padding-left: 1.25rem;

  color:
    var(--color-text-body);
}

.experience-list li {
  margin-bottom: .85rem;

  padding-left: .25rem;

  font-size:
    clamp(1rem, 1.1vw, 1.15rem);

  line-height: 1.65;
}

.experience-list li:last-child {
  margin-bottom: 0;
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
  .experience-section {
    width: min(94%, 800px);
  }

  .experience-card {
    min-height: auto;

    padding:
      2.5rem
      4rem
      4rem;
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
  .experience-card {
    padding:
      2.25rem
      3.25rem
      3.75rem;
  }

  .experience-list li {
    line-height: 1.6;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .experience-section {
    width: min(96%, 600px);
  }

  .experience-card {
    padding:
      2rem
      2.5rem
      3.5rem;
  }

  .experience-label {
    font-size: .75rem;
  }

  .card-title {
    font-size: 1.45rem;
  }

  .company {
    font-size: 1.05rem;
  }

  .card-subtitle {
    margin-bottom: 1.5rem;

    font-size: .85rem;
  }

  .experience-list {
    padding-left: 1.1rem;
  }

  .experience-list li {
    margin-bottom: .75rem;

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
  .experience-card {
    padding-inline: 2rem;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 12%;
  }
}
</style>