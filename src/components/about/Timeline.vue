<!-- Timeline Component -->
<template>
  <section class="timeline-container">

    <SectionHeader
      eyebrow="Experience · Education · Growth"
      title="Experience & Education Timeline"
      description="The work, education and technical training that shaped how I approach problems today."
    />


    <!-- Desktop Timeline -->
    <div class="desktop-timeline">

      <div class="timeline-line">

        <!-- Year Markers -->
        <span
          v-for="marker in timelineMarkers"
          :key="marker.label"
          class="timeline-marker"
          :style="{ left: `${marker.position}%` }"
          aria-hidden="true"
        >
          {{ marker.label }}
        </span>


        <!-- Timeline Events -->
        <button
          v-for="(item, index) in timelineItems"
          :key="item.id"
          class="timeline-item"
          type="button"
          :class="{ active: activeIndex === index }"
          :style="{ left: `${itemPosition(item.start)}%` }"
          :aria-label="`${item.title}, ${item.dates}`"
          :aria-expanded="activeIndex === index"
          aria-controls="timelineDescription"
          @mouseenter="showDescription(index)"
          @mouseleave="hideDescription"
          @focus="showDescription(index)"
          @blur="hideDescription"
        >
          <span
            class="timeline-circle accent-glow"
            :style="{
              background:
                activeIndex === index
                  ? `linear-gradient(to bottom, ${item.color})`
                  : defaultColor
            }"
            aria-hidden="true"
          ></span>
        </button>

      </div>


      <!-- Event Description -->
      <transition name="fade">
        <aside
          v-if="activeItem"
          id="timelineDescription"
          class="timeline-description"
          aria-live="polite"
        >
          <p class="description-dates">
            {{ activeItem.dates }}
          </p>

          <h3>
            {{ activeItem.title }}
          </h3>

          <p class="description-place">
            {{ activeItem.place }}
          </p>

          <p class="description-text">
            {{ activeItem.description }}
          </p>
        </aside>
      </transition>

    </div>


    <!-- Responsive Timeline -->
    <div class="responsive-timeline">

      <div class="responsive-items">

        <article
          v-for="item in timelineItems"
          :key="`responsive-${item.id}`"
          class="responsive-item"
        >

          <!-- Timeline Marker -->
          <div class="responsive-marker">
            <span
              class="responsive-circle"
              :style="{
                background:
                  `linear-gradient(to bottom, ${item.color})`
              }"
              aria-hidden="true"
            ></span>
          </div>


          <!-- Timeline Content -->
          <div class="responsive-content">

            <p class="responsive-dates">
              {{ item.dates }}
            </p>

            <h3>
              {{ item.title }}
            </h3>

            <p class="responsive-place">
              {{ item.place }}
            </p>

            <p class="responsive-description">
              {{ item.description }}
            </p>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>


<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: "Timeline",

  components: {
    SectionHeader
  },


  data() {
    return {
      activeIndex: null,

      defaultColor:
        "var(--color-border)",


      /* Timeline Year Markers */
      timelineMarkers: [
        {
          label: "2005",
          position: 0
        },
        {
          label: "2010",
          position: 25
        },
        {
          label: "2015",
          position: 50
        },
        {
          label: "2020",
          position: 75
        },
        {
          label: "Present",
          position: 100
        }
      ],


      /* Experience & Education */
      timelineItems: [
        {
          id: 1,
          place: "Marion Technical College",
          title: "College Coursework & CCNA",
          dates: "September 2006 - June 2008",
          description:
            "Completed college coursework, earned Dean's List recognition and CCNA certification before transferring to Ohio State University.",
          start: 2006,
          color:
            "var(--color-accent-green), var(--color-accent-blue)"
        },
        {
          id: 2,
          place: "Clean, Inc.",
          title: "Route Manager",
          dates: "July 2007 - February 2019",
          description:
            "Managed routing, scheduling and client service workflows for 50-80 clients while coordinating daily work for a small field team.",
          start: 2007,
          color:
            "var(--color-accent-green), var(--color-accent-blue), var(--color-accent-lime)"
        },
        {
          id: 3,
          place: "Ohio State University",
          title: "Architecture Coursework",
          dates: "January 2009 - December 2009",
          description:
            "Completed architecture coursework as part of 111 total college credit hours, including transfer credits.",
          start: 2009,
          color:
            "var(--color-accent-blue), var(--color-accent-green)"
        },
        {
          id: 4,
          place:
            "Ohio Construction & Maintenance Services, Inc.",
          title: "Office Manager",
          dates: "May 2012 - May 2015",
          description:
            "Managed invoicing, payroll, customer data and documentation while improving internal administrative workflows.",
          start: 2012,
          color:
            "var(--color-accent-blue), var(--color-accent-green)"
        },
        {
          id: 5,
          place: "LELORR Properties, LLC.",
          title: "Property Manager",
          dates: "April 2013 - May 2015",
          description:
            "Managed operations for 33 residential properties, including tenant communication, maintenance, vendors and leasing documentation.",
          start: 2013,
          color:
            "var(--color-accent-blue), var(--color-accent-lime)"
        },
        {
          id: 6,
          place: "Freelance",
          title: "IT Consultant",
          dates: "June 2022 - January 2025",
          description:
            "Designed containerized infrastructure using Docker Swarm and virtualization with a focus on redundancy, scalability and operational stability.",
          start: 2022,
          color:
            "var(--color-accent-lime), var(--color-accent-green)"
        },
        {
          id: 7,
          place: "Tech Elevator",
          title: "Java Full-Stack Bootcamp",
          dates: "September 2023 - December 2023",
          description:
            "Completed an 800+ hour Java full-stack bootcamp focused on Java, Spring Boot, PostgreSQL, JavaScript and Vue.js.",
          start: 2023,
          color:
            "var(--color-accent-lime), var(--color-accent-green), var(--color-accent-blue)"
        },
        {
          id: 8,
          place: "Freelance",
          title: "Web Designer & Developer",
          dates: "January 2025 - Present",
          description:
            "Translate business requirements into web applications, integrate APIs and manage projects through development, testing and deployment.",
          start: 2025,
          color:
            "var(--color-accent-green), var(--color-accent-lime), var(--color-accent-blue)"
        }
      ]
    };
  },


  computed: {

    /* Get Active Timeline Item */
    activeItem() {
      if (this.activeIndex === null) {
        return null;
      }

      return this.timelineItems[
        this.activeIndex
      ];
    }
  },


  methods: {

    /* Show Timeline Description */
    showDescription(index) {
      this.activeIndex = index;
    },


    /* Hide Timeline Description */
    hideDescription() {
      this.activeIndex = null;
    },


    /* Calculate Timeline Position */
    itemPosition(startYear) {
      const baseYear = 2005;

      const currentYear =
        new Date().getFullYear();

      const totalYears =
        currentYear - baseYear;

      const yearDifference =
        startYear - baseYear;

      return (
        yearDifference /
        totalYears
      ) * 100;
    }
  }
};
</script>


<style scoped>
/* ========================================
   Timeline Container
======================================== */

.timeline-container {
  position: relative;

  width: 100%;
}


/* ========================================
   Desktop Timeline
======================================== */

.desktop-timeline {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 4rem;

  margin-top: 2rem;

  padding-inline: 2rem;
}


/* ========================================
   Timeline Line
======================================== */

.timeline-line {
  position: relative;

  width: 100%;
  height: .6rem;

  background-color:
    var(--color-border);

  border-radius: 1rem;
}


/* ========================================
   Year Markers
======================================== */

.timeline-marker {
  position: absolute;

  top: 50%;

  color:
    var(--color-text-muted);

  font-size: .9rem;
  font-weight: 700;
  white-space: nowrap;

  transform:
    translate(-50%, -50%);
}

.timeline-marker:first-child {
  transform:
    translate(0, -50%);
}

.timeline-marker:last-child {
  transform:
    translate(-100%, -50%);
}


/* ========================================
   Timeline Events
======================================== */

.timeline-item {
  position: absolute;

  top: 50%;

  width: 3rem;
  height: 3rem;

  padding: 0;

  background: transparent;

  border: 0;
  border-radius: 50%;

  cursor: pointer;

  transform:
    translate(-50%, -50%);

  z-index: 2;
}


/* ========================================
   Timeline Circle
======================================== */

.timeline-circle {
  position: relative;

  display: block;

  width: 100%;
  height: 100%;

  border: none;
  border-radius: 50%;

  opacity: .5;

  box-shadow:
    .25rem .35rem .5rem
    var(--color-shadow-strong);

  transition:
    transform .3s ease-in-out,
    background .3s ease-in-out,
    box-shadow .3s ease-in-out;

  z-index: 2;
}


/* ========================================
   Timeline Hover & Focus
======================================== */

.timeline-item:hover,
.timeline-item:focus-visible {
  transform:
    translate(-50%, -50%)
    translateY(-2px)
    scale(1.05);
}

.timeline-item:hover
.timeline-circle,
.timeline-item:focus-visible
.timeline-circle {
  transform:
    scale(1.05);

  box-shadow:
    0 .35rem .65rem
    var(--color-shadow-strong);

  opacity: 1;
}

.timeline-item:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}


/* ========================================
   Desktop Description
======================================== */

.timeline-description {
  position: absolute;

  width:
    clamp(18rem, 30vw, 28rem);

  left: 50%;

  bottom:
    calc(50% + 3rem);

  padding: 1.25rem;

  background-color:
    var(--color-surface);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: 1rem;

  box-shadow:
    .4rem .5rem .75rem
    var(--color-shadow-strong);

  text-align: center;

  transform:
    translateX(-50%);

  z-index: 10;
}

.description-dates {
  margin-bottom: .35rem;

  color:
    var(--color-accent-muted);

  font-size:
    clamp(.75rem, .8vw, .9rem);

  font-weight: 600;
  letter-spacing: .05em;
  text-transform: uppercase;
}

.timeline-description h3 {
  margin-bottom: .35rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.15rem, 1.4vw, 1.5rem);

  font-weight: 400;
  line-height: 1.25;
}

.description-place {
  margin-bottom: .75rem;

  color:
    var(--color-text-muted);

  font-size:
    clamp(.9rem, 1vw, 1rem);

  font-weight: 400;
}

.description-text {
  margin: 0;

  color:
    var(--color-text-body);

  font-size:
    clamp(.95rem, 1vw, 1.05rem);

  line-height: 1.6;
}


/* ========================================
   Responsive Timeline
======================================== */

.responsive-timeline {
  display: none;
}

.responsive-items {
  position: relative;

  width:
    min(100%, 48rem);

  margin-inline: auto;
}

.responsive-items::before {
  content: "";

  position: absolute;

  top: 0;
  bottom: 0;
  left: 1rem;

  width: .25rem;

  background-color:
    var(--color-border);

  border-radius: 1rem;
}

.responsive-item {
  position: relative;

  display: grid;
  grid-template-columns:
    2rem 1fr;

  gap: 1.25rem;

  padding-bottom: 2rem;
}

.responsive-item:last-child {
  padding-bottom: 0;
}

.responsive-marker {
  position: relative;

  display: flex;
  justify-content: center;

  z-index: 2;
}

.responsive-circle {
  width: 1.35rem;
  height: 1.35rem;

  margin-top: .25rem;

  border:
    2px solid
    var(--color-white);

  border-radius: 50%;

  box-shadow:
    .2rem .25rem .35rem
    var(--color-shadow-strong);

  transition:
    transform .2s ease;
}

.responsive-content {
  padding:
    1rem
    1.25rem;

  background-color:
    var(--color-surface);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: .75rem;

  box-shadow:
    .25rem .35rem .5rem
    var(--color-shadow);

  transition:
    transform .2s ease,
    border-color .2s ease,
    box-shadow .2s ease;
}

.responsive-dates {
  margin-bottom: .3rem;

  color:
    var(--color-accent-muted);

  font-size: .8rem;
  font-weight: 600;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.responsive-content h3 {
  margin-bottom: .25rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.05rem, 2vw, 1.2rem);

  font-weight: 500;
  line-height: 1.3;
}

.responsive-place {
  margin-bottom: .6rem;

  color:
    var(--color-text-muted);

  font-size: .9rem;
}

.responsive-description {
  margin: 0;

  color:
    var(--color-text-body);

  font-size:
    clamp(.9rem, 1.5vw, 1rem);

  line-height: 1.6;
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 1100px) {
  .desktop-timeline {
    display: none;
  }

  .responsive-timeline {
    display: block;

    width: 100%;

    padding-top: 1rem;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .responsive-items::before {
    left: .75rem;
  }

  .responsive-item {
    grid-template-columns:
      1.5rem 1fr;

    gap: .9rem;

    padding-bottom: 1.25rem;
  }

  .responsive-circle {
    width: 1.1rem;
    height: 1.1rem;
  }

  .responsive-content {
    padding:
      .9rem
      1rem;
  }

  .responsive-content h3 {
    font-size: 1.05rem;
  }

  .responsive-description {
    font-size: .9rem;
  }
}


/* ========================================
   Touch Interaction
======================================== */

@media (hover: none) and
       (pointer: coarse) {

  .responsive-content:active {
    transform:
      scale(.99);

    border-color:
      var(--color-border);

    box-shadow:
      .3rem .4rem .6rem
      var(--color-shadow-strong);
  }

  .responsive-item:active
  .responsive-circle {
    transform:
      scale(1.08);
  }
}


/* ========================================
   Fade Transition
======================================== */

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity .25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .timeline-circle,
  .responsive-circle,
  .responsive-content,
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>