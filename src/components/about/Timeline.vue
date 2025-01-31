<template>
    <aside class="timeline-container pb-5 my-5">
      <h2 class="text-center display-4 mb-4 text-white">My Journey</h2>
  
      <!-- Timeline Wrapper -->
      <article class="timeline-wrapper">
  
        <!-- Horizontal Timeline Line -->
        <section class="timeline-line lead">
          <!-- Marker for 2005 -->
          <div class="timeline-marker" >2005</div>
  
          <!-- Marker for 2010 -->
          <div class="timeline-marker" style="left: 25%;">2010</div>
  
          <!-- Marker for 2015 -->
          <div class="timeline-marker" style="left: 50%;">2015</div>
  
          <!-- Marker for 2020 -->
          <div class="timeline-marker" style="left: 75%;">2020</div>
  
          <!-- Marker for 2025 -->
          <div class="timeline-marker" style="left: 100%;">Present</div>
        </section>
  
        <!-- Timeline Items -->
        <section class="timeline-items">
          <!-- Loop through timeline events -->
          <div
            v-for="(item, index) in timelineItems"
            :key="index"
            class="timeline-item"
            @mouseover="showDescription(index)"
            @mouseleave="hideDescription"
          >
            <!-- Event Circle -->
            <div 
                class="timeline-circle"
                :style="{
                    width: itemWidth(item.start, item.end) + 'rem',
                    height: itemWidth(item.start, item.end) + 'rem',
                    left: itemPosition(item.start, item.end) + 'rem'
                }"
            >
              <span class="timeline-title">{{ item.title }}</span>
            </div>
  
            <!-- Description Box -->
            <div v-if="isHovered === index" class="timeline-description p-3 lead">
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
                    title: "Marion Technical College",
                    dates: "Sep '06 - Jun '08",
                    description: "Finished 74 general studies credit hours for transfer to Ohio State University and maintained Dean’s List status. Earned CCNA certification.",
                    start: 2006,
                    end: 2008,
                    color: "#b4f9d7, #aaf3dc, #a4edde"
                },
                {
                    title: "Route Manager at Clean, Inc.",
                    dates: "Jul '07 - Feb '19",
                    description: "Managed a route of 80-100 clients annually and led a team of 2-4 staff while improving client retention and satisfaction.",
                    start: 2007,
                    end: 2019,
                    color: "#b0efda, #6fd5fd, #a7ea87"
                },
                {
                    title: "Bachelor of Science in Architecture, Ohio State University",
                    dates: "Jan '09 - Dec '09",
                    description: "Completed 111 credit hours in the Knowlton School of Architecture, gaining skills in design, problem-solving, and creativity.",
                    start: 2009,
                    end: 2010,
                    color: "#9ae7e0, #8ee5e2, #8de4eb"
                },
                {
                    title: "Office Manager at OCMS, Inc.",
                    dates: "May '12 - May '15",
                    description: "Modernized business operations, integrated QuickBooks for invoicing and payroll, and improved client relations and internal processes.",
                    start: 2012,
                    end: 2015,
                    color: "#79dcf4, #72d6f1, #81dad6"
                },
                {
                    title: "Property Manager at LELORR Properties, LLC",
                    dates: "Apr '13 - May '15",
                    description: "Managed 33 rental properties, implemented new leasing systems, and hired contractors for maintenance and tenant support.",
                    start: 2013,
                    end: 2015,
                    color: "#78d0fd, #79d6e8, #81dad6"
                },
                {
                    title: "Freelance Information Technology Consultant",
                    dates: "Jun '22 - Present",
                    description: "Developed and launched a container system for a virtual server for a cybersecurity company, and self-instructed Docker Swarm for redundancy.",
                    start: 2022,
                    end: 2025,
                    color: ""
                },
                {
                    title: "Tech Elevator - Full Stack Java Bootcamp",
                    dates: "Sep '23 - Dec '23",
                    description: "Completed a 14-week Full-Stack Java Bootcamp with over 800 hours of hands-on development education using Java, PostgreSQL, and Vue.js.",
                    start: 2023,
                    end: 2024,
                    color: ""
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
        // console.log(yearDifference);
        return yearDifference * 5;
      },
      itemPosition(start, end) {
        const baseYear = 2005;
        const yearDifference = start - baseYear;
        console.log(yearDifference);
        return yearDifference * 4.5;
      }
    }
};
</script>

  
<style scoped>
.timeline-wrapper {
    position: relative;
    width: 90vw;
    max-width: 100%;
    padding: 5rem 0;
    margin: 0 auto;
}

.timeline-line {
    position: absolute;
    width: 100%;
    height: 2.75rem;
    background: linear-gradient(to right, #c2fdcf, #70d3fb, #bef454); /* Gradient color for the line */
    border-radius: 1rem;
    box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.timeline-marker {
    position: absolute;
    font-size: 1.7rem;
    font-weight: 800;
    color: #ffffff;
    transform: translateX(-50%);
}

.timeline-items {
    display: flex;
    width: 100%;
}

.timeline-item {
    position: relative;
    text-align: center;
    cursor: pointer;
}

.timeline-item .timeline-circle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #515151;
    border: .1rem black solid;
    border-radius: 50%;
    transform: translatey(-50%);
}

.timeline-item .timeline-title {
    font-size: 1.1rem;
}

.timeline-description {
    position: absolute;
    width: 20rem;
    background-color: #fff;
    color: #000000;
    border-radius: 1rem;
    z-index: 10;
    box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
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
  