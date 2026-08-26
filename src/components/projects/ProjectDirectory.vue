<!-- Projects Component -->
<template>
  <section class="projects-section">

    <!-- Project Groups -->
    <div class="projects-container">

      <!-- Personal and Client Projects -->
      <section class="project-group">

        <div class="group-heading">
          <h2 class="group-title">
            Personal & Client Projects
          </h2>

          <p class="group-description">
            Independent and client work focused on practical applications,
            user needs and real-world workflows.
          </p>
        </div>


        <!-- Personal and Client Project List -->
        <ul class="project-list">

          <li
            v-for="project in personalProjects"
            :key="project.card"
            class="project-item"
          >
            <button
              class="project-row"
              type="button"
              @click="
                showModal(
                  project.card,
                  project.title,
                  $event
                )
              "
            >

              <!-- Project Title -->
              <span class="project-button">
                {{ project.title }}
              </span>


              <!-- Project Arrow -->
              <span
                class="project-arrow"
                aria-hidden="true"
              >
                →
              </span>


              <!-- Project Metadata -->
              <span class="project-meta">

                <span
                  class="project-status"
                  :class="
                    statusClass(
                      project.status
                    )
                  "
                >
                  {{ project.status }}
                </span>

                <span class="project-type-label">
                  {{ project.type }}
                </span>

              </span>

            </button>
          </li>

        </ul>

      </section>


      <!-- Educational Projects -->
      <section class="project-group">

        <div class="group-heading">
          <h2 class="group-title">
            Educational Projects
          </h2>

          <p class="group-description">
            Coursework and training projects used to build and reinforce
            technical skills.
          </p>
        </div>


        <!-- Educational Project List -->
        <ul class="project-list">

          <li
            v-for="project in educationalProjects"
            :key="project.card"
            class="project-item"
          >
            <button
              class="project-row"
              type="button"
              @click="
                showModal(
                  project.card,
                  project.title,
                  $event
                )
              "
            >

              <!-- Project Title -->
              <span class="project-button">
                {{ project.title }}
              </span>


              <!-- Project Arrow -->
              <span
                class="project-arrow"
                aria-hidden="true"
              >
                →
              </span>


              <!-- Project Metadata -->
              <span class="project-meta">

                <span
                  class="project-status"
                  :class="
                    statusClass(
                      project.status
                    )
                  "
                >
                  {{ project.status }}
                </span>

                <span class="project-type-label">
                  {{ project.type }}
                </span>

              </span>

            </button>
          </li>

        </ul>

      </section>

    </div>


    <!-- Project Modal -->
    <div
      v-if="showCardModal"
      ref="projectModal"
      class="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="projectModalTitle"
      @click.self="closeModal"
      @keydown="handleModalKeydown"
    >
      <div class="project-modal-dialog">

        <div class="project-modal-content">

          <!-- Modal Heading -->
          <h2
            id="projectModalTitle"
            class="visually-hidden"
          >
            {{ selectedProjectTitle }} Project Details
          </h2>


          <!-- Close Button -->
          <button
            ref="modalCloseButton"
            class="btn-close project-modal-close"
            type="button"
            aria-label="Close project details"
            @click="closeModal"
          ></button>


          <!-- Selected Project -->
          <component
            :is="currentCard"
          />

        </div>

      </div>
    </div>

  </section>
</template>


<script>
import TEVendingMachineCard from './cards/TEVendingMachineCard.vue';
import TEnmoCard from './cards/TEnmoCard.vue';
import TECoffeeCard from './cards/TECoffeeCard.vue';
import WaterSensorCard from './cards/WaterSensorCard.vue';
import CodecademyCard from './cards/CodecademyCard.vue';
import JoltCard from './cards/JoltCard.vue';
import OTLCard from './cards/OTLCard.vue';
import BestBudsCard from './cards/BestBudsCard.vue';
import InventoryManagementCard from './cards/InventoryManagementCard.vue';
import WebDevReferenceCard from './cards/WebDevReferenceCard.vue';

export default {
  name: "ProjectDirectory",

  components: {
    TEVendingMachineCard,
    TEnmoCard,
    TECoffeeCard,
    WaterSensorCard,
    CodecademyCard,
    JoltCard,
    OTLCard,
    BestBudsCard,
    InventoryManagementCard,
    WebDevReferenceCard
  },


  data() {
    return {
      showCardModal: false,
      currentCard: null,
      selectedProjectTitle: '',

      /*
       * Stores the project button that opened the modal
       * so keyboard focus can return to it after closing.
       */
      lastFocusedElement: null,

      personalProjects: [
        {
          title: "Jolt Coffee Shop Locator",
          card: "JoltCard",
          status: "Complete",
          type: "Full-Stack Application"
        },
        {
          title: "OTL Communications Website",
          card: "OTLCard",
          status: "Client Project",
          type: "Web Design & Development"
        },
        {
          title: "Web Development Reference",
          card: "WebDevReferenceCard",
          status: "Complete",
          type: "Frontend Reference Tool"
        },
        {
          title: "Best Buds Dispensary Locator",
          card: "BestBudsCard",
          status: "In Development",
          type: "Full-Stack Application"
        },
        {
          title: "Inventory Management System",
          card: "InventoryManagementCard",
          status: "In Design",
          type: "Business Systems Project"
        }
      ],

      educationalProjects: [
        {
          title: "Tech Elevator Coffee Shop Locator",
          card: "TECoffeeCard",
          status: "Complete",
          type: "Team Capstone"
        },
        {
          title: "TEnmo Peer-to-Peer Payment API",
          card: "TEnmoCard",
          status: "Complete",
          type: "Backend API"
        },
        {
          title: "Tech Elevator Vending Machine Application",
          card: "TEVendingMachineCard",
          status: "Complete",
          type: "Java CLI Application"
        },
        {
          title: "Water Quality Management System",
          card: "WaterSensorCard",
          status: "Complete",
          type: "Backend Application"
        },
        {
          title: "Codecademy Mini Projects",
          card: "CodecademyCard",
          status: "Ongoing Practice",
          type: "Training Projects"
        }
      ]
    };
  },


  methods: {

    /* Open Project Modal */
    showModal(cardName, projectTitle, event) {
      this.currentCard =
        cardName;

      this.selectedProjectTitle =
        projectTitle;

      this.lastFocusedElement =
        event?.currentTarget ||
        document.activeElement;

      this.showCardModal = true;

      document.body.style.overflow =
        'hidden';

      /*
       * Wait until Vue renders the modal before
       * moving keyboard focus into it.
       */
      this.$nextTick(() => {
        this.$refs.modalCloseButton?.focus();
      });
    },


    /* Close Project Modal */
    closeModal() {
      this.showCardModal = false;
      this.currentCard = null;
      this.selectedProjectTitle = '';

      document.body.style.overflow =
        '';

      /*
       * Return focus to the project that opened
       * the modal after the modal is removed.
       */
      this.$nextTick(() => {
        if (
          this.lastFocusedElement &&
          typeof this.lastFocusedElement.focus ===
            'function'
        ) {
          this.lastFocusedElement.focus();
        }

        this.lastFocusedElement = null;
      });
    },


    /* Handle Project Modal Keyboard Navigation */
    handleModalKeydown(event) {
      if (event.key === 'Escape') {
        this.closeModal();

        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const modalElement =
        this.$refs.projectModal;

      if (!modalElement) {
        return;
      }

      const focusableElements =
        modalElement.querySelectorAll(
          [
            'a[href]',
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
          ].join(',')
        );

      const focusable =
        Array.from(
          focusableElements
        ).filter(
          (element) =>
            element.offsetParent !== null
        );

      if (focusable.length === 0) {
        event.preventDefault();

        return;
      }

      const firstElement =
        focusable[0];

      const lastElement =
        focusable[
          focusable.length - 1
        ];

      /*
       * Keep keyboard focus inside the modal.
       */
      if (
        event.shiftKey &&
        document.activeElement ===
          firstElement
      ) {
        event.preventDefault();

        lastElement.focus();

        return;
      }

      if (
        !event.shiftKey &&
        document.activeElement ===
          lastElement
      ) {
        event.preventDefault();

        firstElement.focus();
      }
    },


    /* Get Project Status Class */
    statusClass(status) {
      return {
        'status-complete':
          status === 'Complete',

        'status-client':
          status === 'Client Project',

        'status-development':
          status === 'In Development',

        'status-design':
          status === 'In Design',

        'status-practice':
          status === 'Ongoing Practice'
      };
    }
  },


  beforeUnmount() {
    document.body.style.overflow =
      '';
  }
};
</script>


<style scoped>
/* ========================================
   Projects
======================================== */

.projects-section {
  width: min(94%, 1500px);

  margin-inline: auto;

  padding-bottom:
    clamp(3rem, 5vw, 5rem);
}


/* ========================================
   Project Groups
======================================== */

.projects-container {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    clamp(2rem, 4vw, 5rem);
}

.project-group {
  min-width: 0;

  padding:
    clamp(
      1.5rem,
      2.5vw,
      2.5rem
    );

  background-color:
    var(--color-surface-transparent);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: 1rem;

  box-shadow:
    0 .5rem .75rem
    var(--color-shadow);

  transition:
    border-color .3s ease,
    box-shadow .3s ease;
}

.project-group:hover {
  border-color:
    var(--color-border);

  box-shadow:
    0 .55rem .85rem
    var(--color-shadow);
}

.group-heading {
  margin-bottom: 1.5rem;
}

.group-title {
  margin-bottom: .5rem;

  color:
    var(--color-text);

  font-size:
    clamp(
      1.5rem,
      2vw,
      2rem
    );

  font-weight: 500;

  transition:
    letter-spacing .25s ease;
}

.project-group:hover
.group-title {
  letter-spacing:
    .01em;
}

.group-description {
  margin-bottom: 0;

  color:
    var(--color-text-muted);

  font-size: 1rem;
  line-height: 1.6;
}


/* ========================================
   Project List
======================================== */

.project-list {
  margin: 0;
  padding: 0;

  list-style: none;
}

.project-item {
  margin-inline: -.5rem;

  border-bottom:
    1px solid
    var(--color-border-transparent);

  border-radius: .5rem;
}

.project-item:first-child {
  padding-top: .5rem;
}

.project-item:last-child {
  padding-bottom: .5rem;

  border-bottom: 0;
}


/* ========================================
   Project Row
======================================== */

.project-row {
  position: relative;

  display: block;

  width: 100%;

  padding:
    1.25rem
    .75rem;

  color:
    var(--color-text);

  background-color:
    transparent;

  border: 0;
  border-radius: .5rem;

  text-align: left;

  cursor: pointer;

  isolation: isolate;

  transition:
    background-color .25s ease,
    box-shadow .25s ease,
    transform .25s ease;
}

.project-row::before {
  content: "";

  position: absolute;

  inset: -.15rem;

  background-image:
    var(--accent-gradient);

  background-size:
    300% 300%;

  border-radius: inherit;

  opacity: 0;

  filter:
    blur(.45rem);

  pointer-events: none;

  transform:
    scale(.97);

  transition:
    opacity .3s ease-in-out,
    transform .3s ease-in-out;

  z-index: -1;
}

.project-row:hover,
.project-row:focus-visible {
  background-color:
    var(--color-surface-transparent-strong);

  transform:
    translateY(-1px);

  box-shadow:
    0 .35rem .6rem
    var(--color-shadow);
}

.project-row:hover::before,
.project-row:focus-visible::before {
  opacity: .4;

  transform:
    scale(1);

  animation:
    gradient-animation
    5s
    ease
    infinite;
}

.project-row:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 3px;
}


/* ========================================
   Project Button
======================================== */

.project-button {
  position: relative;

  display: inline-block;

  max-width:
    calc(100% - 2.5rem);

  padding-bottom: .25rem;

  color:
    var(--color-text);

  font-size:
    clamp(
      1rem,
      1.15vw,
      1.2rem
    );

  font-weight: 600;

  transition:
    transform .25s ease;
}

.project-button::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: 0;

  width: 0;
  height: .15rem;

  background-image:
    linear-gradient(
      90deg,
      var(--color-accent-green),
      var(--color-accent-blue),
      var(--color-accent-lime)
    );

  background-size:
    200% 200%;

  border-radius: 1rem;

  transition:
    width .25s ease;
}

.project-row:hover
.project-button,
.project-row:focus-visible
.project-button {
  transform:
    translateX(3px);
}

.project-row:hover
.project-button::after,
.project-row:focus-visible
.project-button::after {
  width: 90%;

  animation:
    gradient-animation
    5s
    ease
    infinite;
}


/* ========================================
   Project Arrow
======================================== */

.project-arrow {
  position: absolute;

  top: 1.3rem;
  right: .75rem;

  color:
    var(--color-accent-muted);

  font-size: 1.1rem;
  line-height: 1;

  opacity: .55;

  transition:
    color .25s ease,
    opacity .25s ease,
    transform .25s ease;
}

.project-row:hover
.project-arrow,
.project-row:focus-visible
.project-arrow {
  color:
    var(--color-text);

  opacity: 1;

  transform:
    translateX(4px);
}


/* ========================================
   Project Metadata
======================================== */

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  margin-top: .6rem;
}

.project-status,
.project-type-label {
  font-size: .85rem;
}

.project-status {
  display: inline-flex;
  align-items: center;

  padding: .25rem .6rem;

  color:
    var(--color-text-muted);

  border:
    1px solid
    var(--color-border);

  border-radius: 2rem;

  font-weight: 500;
}

.project-type-label {
  color:
    var(--color-accent-muted);

  text-align: right;
}


/* ========================================
   Project Statuses
======================================== */

.status-complete {
  background-color:
    color-mix(
      in srgb,
      var(--color-accent-green) 35%,
      transparent
    );
}

.status-client {
  background-color:
    color-mix(
      in srgb,
      var(--color-accent-blue) 25%,
      transparent
    );
}

.status-development {
  background-color:
    color-mix(
      in srgb,
      var(--color-accent-lime) 22%,
      transparent
    );
}

.status-design,
.status-practice {
  background-color:
    var(--color-border-transparent);
}


/* ========================================
   Project Modal
======================================== */

.project-modal {
  position: fixed;

  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  background-color:
    rgba(0, 0, 0, .45);

  overflow-y: auto;

  z-index: 1040;
}

.project-modal-dialog {
  width:
    min(96vw, 1500px);

  margin: auto;
}

.project-modal-content {
  position: relative;

  width: 100%;

  max-height:
    calc(100vh - 4rem);

  padding: 2rem;

  background-color:
    var(--color-background);

  border-radius: 1rem;

  box-shadow:
    0 .75rem 2rem
    rgba(0, 0, 0, .25);

  overflow-y: auto;
}

.project-modal-close {
  position: sticky;

  top: 0;

  display: block;

  margin-left: auto;
  margin-bottom: .5rem;

  z-index: 20;
}


/* ========================================
   Touch Interaction
======================================== */

@media (hover: none) and
       (pointer: coarse) {

  .project-row:active {
    background-color:
      var(--color-surface-transparent-strong);

    transform:
      translateY(1px)
      scale(.995);

    box-shadow:
      0 .2rem .4rem
      var(--color-shadow);
  }

  .project-row:active::before {
    opacity: .45;

    transform:
      scale(.98);
  }

  .project-row:active
  .project-button {
    transform:
      translateX(2px);
  }

  .project-row:active
  .project-button::after {
    width: 90%;

    animation:
      gradient-animation
      2.5s
      ease
      infinite;
  }

  .project-row:active
  .project-arrow {
    color:
      var(--color-text);

    opacity: 1;

    transform:
      translateX(3px);
  }
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 1000px) {
  .projects-section {
    width:
      min(94%, 900px);
  }

  .projects-container {
    grid-template-columns: 1fr;

    gap: 2rem;
  }

  .project-modal {
    padding: 1rem;
  }

  .project-modal-content {
    max-height:
      calc(100vh - 2rem);

    padding: 1.5rem;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .projects-section {
    width:
      min(96%, 600px);
  }

  .project-group {
    padding: 1.25rem;
  }

  .project-meta {
    flex-direction: column;
    align-items: flex-start;

    gap: .4rem;
  }

  .project-type-label {
    text-align: left;
  }

  .project-modal {
    align-items: flex-start;

    padding: .5rem;
  }

  .project-modal-dialog {
    width: 100%;
  }

  .project-modal-content {
    max-height:
      calc(100vh - 1rem);

    padding: 1rem;

    border-radius: .75rem;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .project-group,
  .group-title,
  .project-row,
  .project-row::before,
  .project-button,
  .project-button::after,
  .project-arrow {
    transition: none;
    animation: none;
  }
}
</style>