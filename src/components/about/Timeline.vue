<template>
  <aside class="timeline-container">
    <!-- Timeline Wrapper -->
    <article class="timeline-wrapper mx-auto">
      <!-- Vertical Timeline Line -->
      <section class="timeline-line lead">
        <!-- Year Markers -->
        <div class="timeline-marker" style="top: 0%;">2005</div>
        <div class="timeline-marker" style="top: 25%;">2010</div>
        <div class="timeline-marker" style="top: 50%;">2015</div>
        <div class="timeline-marker" style="top: 75%;">2020</div>
        <div class="timeline-marker" style="top: 100%;">Present</div>
      </section>

      <!-- Timeline Items -->
      <section class="timeline-items d-flex">
        <!-- Loop through timeline events -->
        <div v-for="(item, index) in timelineItems" :key="index" class="text-center timeline-item">
          <!-- Event Circle -->
          <div
            class="timeline-circle"
            :style="{ 
              width: itemWidth(item.start, item.end) + 'px',
              height: itemWidth(item.start, item.end) + 'px',
              transform: `translateY(${itemPosition(item.start)}px)`,
              left: getXPosition(index),
              background: `linear-gradient(to bottom, ${item.color})`
            }"
            @mouseover="showDescription(index)"
            @mouseleave="hideDescription"
          >
            <span class="timeline-title">{{ item.nickname }}</span>
          </div>

          <!-- Description Box -->
          <div v-if="isHovered === index" class="timeline-description p-4 rounded shadow-lg bg-white">
            <div class="d-flex flex-column">
              <!-- Dates and Place -->
              <div class="mb-3">
                <p class="text-muted mb-1"><strong>Dates:</strong> {{ item.dates }}</p>
                <p class="text-muted"><strong>Place:</strong> {{ item.place }}</p>
              </div>

              <!-- Title -->
              <div class="mb-3">
                <p class="h5 font-weight-bold">{{ item.title }}</p>
              </div>

              <!-- Description -->
              <div>
                <p class="text-dark">{{ item.description }}</p>
              </div>
            </div>
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
      xPositions: [], // Store x positions to check for overlaps
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
      return yearDifference * 25; // Adjust multiplier as needed for the circle's size
    },
    itemPosition(start) {
      const baseYear = 2005; // Starting year
      const totalYears = 2025 - baseYear; // Total year range
      const yearDifference = start - baseYear;
      const maxHeight = 550; // Max height for the vertical timeline

      // Calculate the position as a percentage relative to the total year range
      return (yearDifference / totalYears) * maxHeight;
    },
    randomXPosition() {
      const maxWidth = 90; // Max width as a percentage
      return Math.random() * maxWidth; // Generate random value between 0 and maxWidth
    },
    isOverlap(newX, circles) {
      // Check if the new x position overlaps with any existing circles
      const tolerance = 15; // Tolerance to prevent overlap (adjust as needed)
      return circles.some(circle => Math.abs(circle.x - newX) < tolerance);
    },
    getXPosition(index) {
      let attempts = 0;
      const maxAttempts = 100; // Max attempts to avoid infinite loops
      let xPos = this.randomXPosition();

      // Try to find a non-overlapping position
      while (this.isOverlap(xPos, this.xPositions) && attempts < maxAttempts) {
        xPos = this.randomXPosition();
        attempts++;
      }

      if (attempts >= maxAttempts) {
        console.warn(`Max attempts reached for item ${index}. Using fallback position.`);
      }

      // Store the x position for this item to check future overlaps
      this.xPositions.push({ index, x: xPos });

      return `${xPos}%`; // Return as a percentage
    }
  }
};
</script>
  
<style scoped>
.timeline-wrapper {
  position: relative;
  max-width: 25vw;
  height: 70vh;
}

.timeline-line {
  position: absolute;
  width: .3rem;
  height: 100%;
  background: linear-gradient(to bottom, #c2fdcf, #70d3fb, #bef454);
  border-radius: 1rem;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
}

.timeline-marker {
  position: absolute;
  font-size: 1rem;
  font-weight: 800;
  color: #666666;
  transform: translateY(-50%);
}

.timeline-items {
  height: 100%;
}

.timeline-item {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.timeline-item:hover {
  transform: scale(1.05);
}

.timeline-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  border-radius: 50%;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.timeline-title {
  font-size: 1rem;
}

.timeline-description {
  position: absolute;
  width: 30vw;
  background-color: #fff;
  font-size: 1.1rem;
  color: #000000;
  border-radius: 1rem;
  z-index: 10;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 5000;
}

.timeline-description p {
  margin: .5rem 0;
}
</style>