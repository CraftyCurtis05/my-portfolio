<!-- Site Map View -->
<template>
  <section class="sitemap-page page-shell">

    <PageHeader
      eyebrow="Portfolio Navigation"
      title="Site Map"
      description="A quick way to explore the main sections of my portfolio."
    />


    <!-- Site Map Navigation -->
    <nav
      class="sitemap-nav"
      aria-label="Portfolio site map"
    >
      <ul class="sitemap-list">

        <li
          v-for="page in pages"
          :key="page.path"
          class="sitemap-item"
        >
          <router-link
            :to="page.path"
            class="sitemap-link"
          >

            <!-- Navigation Indicator -->
            <span
              class="sitemap-arrow"
              aria-hidden="true"
            >
              →
            </span>

            <h2>
              {{ page.title }}
            </h2>

            <p>
              {{ page.description }}
            </p>

          </router-link>
        </li>

      </ul>
    </nav>

  </section>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: "SiteMapView",

  components: {
    PageHeader
  },


  data() {
    return {
      pages: [
        {
          title: "Home",
          path: "/",
          description:
            "Start with an overview of my business systems, technology and development background."
        },
        {
          title: "About",
          path: "/about",
          description:
            "Learn more about my background, experience and path into technology."
        },
        {
          title: "Education",
          path: "/education",
          description:
            "Explore my education, technical training and continued learning."
        },
        {
          title: "Experience",
          path: "/experience",
          description:
            "See my experience across business operations, technology and development."
        },
        {
          title: "Projects",
          path: "/projects",
          description:
            "View personal, client and educational projects I have worked on."
        },
        {
          title: "Contact",
          path: "/contact",
          description:
            "Reach out about opportunities, projects or professional connections."
        }
      ]
    };
  }
};
</script>


<style scoped>
/* ========================================
   Site Map Grid
======================================== */

.sitemap-list {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    clamp(1rem, 2vw, 1.5rem);

  margin: 0;
  padding: 0;

  list-style: none;
}


/* ========================================
   Site Map Card
======================================== */

.sitemap-item {
  min-width: 0;
}

.sitemap-link {
  position: relative;

  display: block;

  height: 100%;

  padding:
    clamp(1.25rem, 2vw, 1.75rem);

  color:
    var(--color-text);

  background-color:
    var(--color-surface-transparent);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: 1rem;

  text-decoration: none;

  box-shadow:
    0 .35rem .6rem
    var(--color-shadow);

  isolation: isolate;

  transition:
    transform .25s ease,
    background-color .25s ease,
    border-color .25s ease,
    box-shadow .25s ease;
}

.sitemap-link::before {
  content: "";

  position: absolute;

  inset: -.2rem;

  background-image:
    var(--accent-gradient);

  background-size:
    300% 300%;

  border-radius: inherit;

  opacity: 0;

  filter:
    blur(.55rem);

  pointer-events: none;

  transform:
    scale(.96);

  transition:
    opacity .3s ease-in-out,
    transform .3s ease-in-out;

  z-index: -1;
}

.sitemap-link:hover,
.sitemap-link:focus-visible {
  background-color:
    var(--color-surface-transparent-strong);

  border-color:
    var(--color-accent-muted);

  transform:
    translateY(-2px);

  box-shadow:
    0 .6rem 1rem
    var(--color-shadow-strong);
}

.sitemap-link:hover::before,
.sitemap-link:focus-visible::before {
  opacity: .5;

  transform:
    scale(1);

  animation:
    gradient-animation
    5s
    ease
    infinite;
}

.sitemap-link:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}


/* ========================================
   Navigation Indicator
======================================== */

.sitemap-arrow {
  position: absolute;

  top:
    clamp(1.25rem, 2vw, 1.75rem);

  right:
    clamp(1.25rem, 2vw, 1.75rem);

  color:
    var(--color-accent-muted);

  font-size:
    clamp(1rem, 1.2vw, 1.2rem);

  font-weight: 500;
  line-height: 1;

  opacity: .6;

  transition:
    color .25s ease,
    opacity .25s ease,
    transform .25s ease;
}

.sitemap-link:hover .sitemap-arrow,
.sitemap-link:focus-visible .sitemap-arrow {
  color:
    var(--color-text);

  opacity: 1;

  transform:
    translateX(4px);
}


/* ========================================
   Card Content
======================================== */

.sitemap-link h2 {
  margin-bottom: .5rem;

  padding-right: 2rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.15rem, 1.4vw, 1.4rem);

  font-weight: 500;
  line-height: 1.3;
}

.sitemap-link p {
  margin: 0;

  color:
    var(--color-text-muted);

  font-size:
    clamp(.95rem, 1vw, 1.05rem);

  line-height: 1.55;
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .sitemap-list {
    grid-template-columns: 1fr;
  }

  .sitemap-link {
    padding: 1.25rem;
  }
}


/* ========================================
   Touch Interaction
======================================== */

@media (hover: none) and
       (pointer: coarse) {
  .sitemap-link:active {
    background-color:
      var(--color-surface-transparent-strong);

    border-color:
      var(--color-border);

    transform:
      translateY(1px)
      scale(.995);

    box-shadow:
      0 .2rem .45rem
      var(--color-shadow);
  }

  .sitemap-link:active::before {
    opacity: .45;

    transform:
      scale(.98);
  }

  .sitemap-link:active
  .sitemap-arrow {
    transform:
      translateX(.3rem);

    opacity: 1;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .sitemap-link,
  .sitemap-link::before,
  .sitemap-arrow {
    transition: none;
    animation: none;
  }
}
</style>