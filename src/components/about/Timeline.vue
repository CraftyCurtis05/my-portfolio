<template>
  <hr class="mt-3">
  <aside class="timeline-container py-2">
    <h2 class="text-center display-5 py-3">My Journey</h2>
  
    <!-- Timeline Wrapper -->
    <article class="timeline-wrapper mx-auto">
  
      <!-- Horizontal Timeline Line -->
      <section class="timeline-line lead">

        <!-- Year Markers -->
        <div class="timeline-marker" style="left: 0%;">2005</div>

        <div class="timeline-marker" style="left: 25%;">2010</div>

        <div class="timeline-marker" style="left: 50%;">2015</div>

        <div class="timeline-marker" style="left: 75%;">2020</div>

        <div class="timeline-marker" style="left: 100%;">Present</div>
      </section>
  
      <!-- Timeline Items -->
      <section class="timeline-items pt-5">
        <!-- Loop through timeline events -->
        <div
          v-for="(item, index) in timelineItems"
          :key="index"
          class="timeline-item  pt-1"
        >
          <!-- Event Bar -->
          <div 
            class="timeline-bar"
            :style="{
                width: itemWidth(item.start, item.end) + 'vw', 
                transform: `translateX(${itemPosition(item.start)}vw)`, 
                background: `linear-gradient(to right, ${item.color})`
            }"
            @mouseover="showDescription(index)"
            @mouseleave="hideDescription"
          >
            <span class="timeline-title">{{ item.nickname }}</span>
          </div>

          <!-- Description Box -->
          <div v-if="isHovered === index" class="timeline-description p-3 lead">
            <p>{{ item.dates }}</p>
            <p>{{ item.place }}</p>
            <p><b>{{ item.title }}</b></p>
            <p>{{ item.description }}</p>
          </div>

        </div>
      </section>

    </article>
  </aside>
</template>


<script>
export default {
  name: "ExperienceTimeline",
  data() {
    return {
      isHovered: null,
      timelineItems: [
        {
          nickname: "MTC",
          place: "Marion Technical College",
          title: "Associate in Nursing",
          dates: "September 2006 - June 2008",
          description: "Finished 74 general studies credit hours for transfer to Ohio State University and maintained Dean’s List status. Earned CCNA certification.",
          start: 2006,
          end: 2008,
          color: "#b9f9d4, #b0f4d9, #a8efdd"
        },
        {
          nickname: "Clean, Inc.",
          place: "Clean, Inc. (aka Classic Maid)",
          title: "Route Manager",
          dates: "July 2007 - February 2019",
          description: "Managed a route of 80-100 clients annually and led a team of 2-4 staff while improving client retention and satisfaction.",
          start: 2007,
          end: 2019,
          color: "#b1f4d8, #7bd9f5, #99e3a2"
        },
        {
          nickname: "OSU",
          place: "Ohio State University",
          title: "Bachelor of Science in Architecture",
          dates: "January 2009 - December 2009",
          description: "Completed 111 credit hours in the Knowlton School of Architecture, gaining skills in design, problem-solving, and creativity.",
          start: 2009,
          end: 2010,
          color: "#a0ece0, #9ce9e2, #94e9e2"
        },
        {
          nickname: "OCMS, Inc.",
          place: "Ohio Construction & Maintenance Services, Inc.",
          title: "Office Manager",
          dates: "May 2012 - May 2015",
          description: "Modernized business operations, integrated QuickBooks for invoicing and payroll, and improved client relations and internal processes.",
          start: 2012,
          end: 2015,
          color: "#89e0ef, #7bd9f5, #74d3f8"
        },
        {
          nickname: "LELORR Properties",
          place: "LELORR Properties, LLC.",
          title: "Property Manager",
          dates: "April 2013 - May 2015",
          description: "Managed 33 rental properties, implemented new leasing systems, and hired contractors for maintenance and tenant support.",
          start: 2013,
          end: 2015,
          color: "#80daf2, #76d7f8, #74d3f8"
        },
        {
          nickname: "Freelance",
          place: "Freelance",
          title: "Information Technology Consultant",
          dates: "June 2022 - Present",
          description: "Developed and launched a container system for a virtual server for a cybersecurity company, and self-instructed Docker Swarm for redundancy.",
          start: 2022,
          end: 2025,
          color: "#a7e985, #b3ef6b, #bdf84e"
        },
        {
          nickname: "TE",
          place: "Tech Elevator",
          title: "Full Stack Java Bootcamp",
          dates: "September 2023 - December 2023",
          description: "Completed a 14-week Full-Stack Java Bootcamp with over 800 hours of hands-on development education using Java, PostgreSQL, and Vue.js.",
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
    },
    hideDescription() {
      this.isHovered = null;
    },
    itemWidth(start, end) {
      const yearDifference = end - start;
      console.log(`Width for item (${start} - ${end}): ${yearDifference * 5}vw`);
      return yearDifference * 5;
    },
    itemPosition(start) {
      const baseYear = 2005; // Starting year
      const yearRange = 2025 - baseYear; // Total year range
      const yearDifference = start - baseYear;
      const maxWidth = 88;
      return (yearDifference / yearRange) * maxWidth;
    }
  }
};
</script>

  
<style scoped>
.timeline-wrapper {
  position: relative;
  width: 90vw;
  max-width: 100%;
  padding-bottom: 12vw;
}

.timeline-line {
  position: absolute;
  width: 100%;
  height: .5rem;
  background: linear-gradient(to right, #c2fdcf, #70d3fb, #bef454);
  border-radius: 1rem;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
}

.timeline-marker {
  position: absolute;
  font-size: 1.7rem;
  font-weight: 800;
  color: #ffffff;
  transform: translateX(-50%);
}

.timeline-item {
  text-align: center;
  cursor: pointer;
}

.timeline-item .timeline-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: transparent;
  color: #515151;
  border: .1rem black solid;
  border-radius: 1rem;
}

.timeline-item .timeline-title {
  font-size: 1.1rem;
}

.timeline-description {
  position: absolute;
  width: 30vw;
  background-color: #fff;
  font-size: 1.1rem;
  color: #000000;
  border-radius: 1rem;
  z-index: 10;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.timeline-description p {
  padding: -1rem;
  margin: .1rem;
}

@media (max-width: 768px) {
  .timeline-wrapper {
    flex-direction: column;
  }

  .timeline-items {
      flex-direction: column;
      align-items: center;
  }

  .timeline-line {
      width: .2rem;
      height: 100%;
      top: 11rem;
  }

  .timeline-item {
      margin-bottom: 40px;
  }

  .timeline-description {
      width: 80%;
  }
}
</style> 