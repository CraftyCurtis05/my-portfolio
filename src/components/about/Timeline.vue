<template>
    <aside class="timeline-container pb-5 my-5">
      <h2 class="text-center display-4 mb-4 text-white">My Journey</h2>
  
      <!-- Timeline Wrapper -->
      <article class="timeline-wrapper">
  
        <!-- Horizontal Timeline Line -->
        <section class="timeline-line">
          <!-- Marker for 2005 -->
          <div class="timeline-marker" style="left: 5%;">2005</div>
  
          <!-- Marker for 2010 -->
          <div class="timeline-marker" style="left: 20%;">2010</div>
  
          <!-- Marker for 2015 -->
          <div class="timeline-marker" style="left: 45%;">2015</div>
  
          <!-- Marker for 2020 -->
          <div class="timeline-marker" style="left: 70%;">2020</div>
  
          <!-- Marker for 2025 -->
          <div class="timeline-marker" style="left: 95%;">2025</div>
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
            <!-- <div 
              class="timeline-circle"
              :style="{ width: itemWidth(item.dateRange) + 'px', height: itemWidth(item.dateRange) + 'px' }"
            >
              <span class="timeline-year">{{ item.dates }}</span>
            </div> -->
  
            <!-- Description Box -->
            <div v-if="isHovered === index" class="timeline-description p-3 shadow">
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
                    end: 2008
                },
            {
                title: "Route Manager at Clean, Inc.",
                dates: "Jul '07 - Feb '19",
                description: "Managed a route of 80-100 clients annually and led a team of 2-4 staff while improving client retention and satisfaction."
            },
          {
            title: "Bachelor of Science in Architecture, Ohio State University",
            dates: "Jan '09 - Dec '09",
            description: "Completed 111 credit hours in the Knowlton School of Architecture, gaining skills in design, problem-solving, and creativity."
          },
          {
            title: "Office Manager at OCMS, Inc.",
            dates: "May '12 - May '15",
            description: "Modernized business operations, integrated QuickBooks for invoicing and payroll, and improved client relations and internal processes."
          },
          {
            title: "Property Manager at LELORR Properties, LLC",
            dates: "Apr '13 - May '15",
            description: "Managed 33 rental properties, implemented new leasing systems, and hired contractors for maintenance and tenant support."
          },
          {
            title: "Freelance Information Technology Consultant",
            dates: "Jun '22 - Present",
            description: "Developed and launched a container system for a virtual server for a cybersecurity company, and self-instructed Docker Swarm for redundancy."
          },
          {
            title: "Tech Elevator - Full Stack Java Bootcamp",
            dates: "Sep '23 - Dec '23",
            description: "Completed a 14-week Full-Stack Java Bootcamp with over 800 hours of hands-on development education using Java, PostgreSQL, and Vue.js."
          },
          {
            title: "Inventory Management Application",
            dates: "Oct '23 - Present",
            description: "Collaborating with 3 other developers to build a warehouse inventory management app with Vue.js, PostgreSQL, and integration testing in Postman."
          },
          {
            title: "Coffee Shop Locator Web Application",
            dates: "Dec '23 - Dec '24",
            description: "Developed a web app that uses the Yelp Fusion API to help users locate nearby coffee shops based on their address, with both mobile and desktop functionality."
          },
          {
            title: "Water Quality Management Application",
            dates: "Jan '24 - Feb '24",
            description: "Completed a Spring Boot application to analyze water quality parameters and connect data to a PostgreSQL database, including user authentication."
          },
          {
            title: "Dispensary Locator Web Application",
            dates: "Mar '24 - Present",
            description: "Currently working to develop a Vue.js and Spring Boot-based application for dispensary location services using Google and Yelp APIs."
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
      itemWidth(dateRange) {
        // Extract the years from the dateRange
        const years = dateRange.split(" - ");
        const startYear = parseInt(years[0].split(" ")[1]);
        const endYear = years[1] === "Present" ? new Date().getFullYear() : parseInt(years[1].split(" ")[1]);
  
        // Calculate the difference in years (in pixels or other unit)
        const yearDifference = endYear - startYear;
        
        // Return a width based on the year difference, for example, 40px per year of difference
        return yearDifference * 40;
      }
    }
  };
  </script>
  
  
<style scoped>
.timeline-wrapper {
    position: relative;
    width: 95vw;
    max-width: 100%;
    padding: 5rem 0;
    margin: 0 auto;
}

.timeline-line {
    position: absolute;
    width: 100%;
    height: 2rem;
    background: linear-gradient(to right, #c2fdcf, #70d3fb, #bef454); /* Gradient color for the line */
    border-radius: 1rem;
}

.timeline-marker {
    position: absolute;
    top: -20px;
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    transform: translateX(-50%);
}

.timeline-marker:after {
    content: "";
    position: absolute;
    top: 5px; /* Line under the marker */
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 10px;
    background-color: black;
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
    position: relative;
    background-color: transparent; /* White circle */
    color: #000; /* Black text */
    border: .1rem black solid;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.timeline-item .timeline-year {
    font-size: 1rem;
}

.timeline-description {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #000;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 250px;
    z-index: 10;
}

.timeline-item:hover .timeline-circle {
    transform: scale(1.2); /* Increase size on hover */
}

.timeline-description p {
    margin: 0;
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
        width: 4px;
        height: 100%;
        top: 10px;
    }

    .timeline-item {
        margin-bottom: 40px;
    }

    .timeline-connector {
        width: 0;
        height: 0;
    }

    .timeline-description {
        width: 80%;
    }
}
</style>
  