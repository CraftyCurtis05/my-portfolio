<!-- Timeline Component -->
<template>
  <article class="timeline-container position-relative p-0 m-0">

    <!-- Vertical Timeline Line -->
    <section class="timeline-line position-absolute lead">
      <div class="timeline-marker position-relative" style="top: 1%;">2005</div>
      <div class="timeline-marker position-relative" style="top: 28%;">2010</div>
      <div class="timeline-marker position-relative" style="top: 46%;">2015</div>
      <div class="timeline-marker position-relative" style="top: 64%;">2020</div>
      <div class="timeline-marker position-relative" style="top: 80%;">Present</div>
    </section>

    <!-- Timeline Items -->
    <section class="timeline-items d-flex flex-column ml-5">
      <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item"
        @mouseover="showDescription(index)"
        @mouseleave="hideDescription(index)"
        :style="{ transform: `translateY(${itemPosition(item.start)}vw)` }">

        <!-- Event Circle -->
        <div
          class="timeline-circle position-relative d-flex justify-content-center align-items-center"
          :style="{ 
            background: hoverIndex === index ? `linear-gradient(to bottom, ${item.color})` : defaultColor
          }">
        </div>

      </div>
    </section>

    <!-- Description Box -->
    <transition name="fade">
      <div v-if="isHovered !== null" class="timeline-description position-fixed rounded shadow-lg bg-white p-3">
        <div class="d-flex flex-column justify-content-center align-items-center text-center">

          <!-- Title , Place & Dates-->
          <div>
            <p class="text-muted"><em>{{ timelineItems[isHovered].dates }}</em></p>
            <p class="h5 lead"><b>{{ timelineItems[isHovered].title }}</b></p>
            <p class="text-muted">{{ timelineItems[isHovered].place }}</p>
          </div>

          <!-- Description -->
          <div>
            <p class="text-dark">{{ timelineItems[isHovered].description }}</p>
          </div>

        </div>
      </div>
    </transition>
    
  </article>
</template>


<script>
export default {
  name: "Timeline",
  data() {
    return {
      isHovered: null,
      hoverIndex: null,
      defaultColor: "rgba(0, 0, 0, 0.05)",
      timelineItems: [
        {
          place: "Marion Technical College",
          title: "Associate in Nursing",
          dates: "September 2006 - June 2008",
          description: "Finished 74 general studies credit hours for transfer to Ohio State University and maintained Dean’s List status. Earned CCNA certification.",
          start: 2006,
          end: 2008,
          color: "#b9f9d4, #b0f4d9, #a8efdd"
        },
        {
          place: "Clean, Inc.",
          title: "Route Manager",
          dates: "July 2007 - February 2019",
          description: "Managed 80-100 clients annually, overseeing client procurement and retention. Led a team of 2-4 in providing in-home cleaning services and revamped training methods to boost efficiency and client satisfaction.",
          start: 2007,
          end: 2019,
          color: "#b1f4d8, #7bd9f5, #99e3a2"
        },
        {
          place: "Ohio State University",
          title: "Bachelor of Science in Architecture",
          dates: "January 2009 - December 2009",
          description: "Completed 111 credit hours in the Knowlton School of Architecture, gaining skills in design, problem-solving and creativity.",
          start: 2009,
          end: 2010,
          color: "#a0ece0, #9ce9e2, #94e9e2"
        },
        {
          place: "Ohio Construction & Maintenance Services, Inc.",
          title: "Office Manager",
          dates: "May 2012 - May 2015",
          description: "Modernized business operations, integrated QuickBooks for invoicing and payroll and improved client relations and internal processes.",
          start: 2012,
          end: 2015,
          color: "#89e0ef, #7bd9f5, #74d3f8"
        },
        {
          place: "LELORR Properties, LLC.",
          title: "Property Manager",
          dates: "April 2013 - May 2015",
          description: "Managed 33 rental properties, implemented new leasing systems and hired contractors for maintenance and tenant support.",
          start: 2013,
          end: 2015,
          color: "#80daf2, #76d7f8, #74d3f8"
        },
        {
          place: "Freelance",
          title: "Information Technology Consultant",
          dates: "June 2022 - Present",
          description: "Developed and launched a container system for a virtual server for a cybersecurity company and self-instructed Docker Swarm for redundancy.",
          start: 2022,
          end: 2025,
          color: "#a7e985, #b3ef6b, #bdf84e"
        },
        {
          place: "Tech Elevator",
          title: "Java Full-Stack Bootcamp",
          dates: "September 2023 - December 2023",
          description: "Completed a 14-week Full-Stack Java Bootcamp with over 800 hours of hands-on development education using Java, PostgreSQL and Vue.js.",
          start: 2023,
          end: 2024,
          color: "#aeee76, #b3ef6b, #b7f065"
        }
      ]
    };
  },
  methods: {
    showDescription(index) {
      this.isHovered = index;
      this.hoverIndex = index; // Track which item is hovered
    },
    hideDescription() {
      this.isHovered = null;
      this.hoverIndex = null; // Reset hover state
    },
    itemPosition(start) {
      const baseYear = 2005; // Starting year
      const totalYears = 2025 - baseYear; // Total year range
      const yearDifference = start - baseYear;
      const maxHeight = 15; // Max height for the vertical timeline

      // Calculate the position as a percentage relative to the total year range
      return (yearDifference / totalYears) * maxHeight;
    }
  }
};
</script>
  
<style scoped>
article {
  height: 100%;
  right: 20%;
}

.timeline-line {
  width: 10px;
  height: 100%;
  background-color: #bbbbbb;
  border-radius: 15px;
}

.timeline-marker {
  font-size: 1rem;
  font-weight: 800;
  color: #666666;
  transform: translateY(-50%);
}

.timeline-item {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.timeline-item:hover {
  transform: scale(1.01);
}

.timeline-circle {
  width: 40px;
  height: 40px;
  font-weight: 700;
  color: #ffffff;
  border-radius: 50%;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* Smooth transition for background color */
  z-index: 1;
}

.timeline-description {
  width: 30vw;
  top: 30%;
  right: 15%;
  background-color: #fff;
  font-size: 1rem;
  border-radius: 15px;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
  z-index: 500;
  overflow-y: auto;
}

/* Transition effect for description */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
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