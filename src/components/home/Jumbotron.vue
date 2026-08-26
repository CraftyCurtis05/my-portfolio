<!-- Jumbotron Component -->
<template>
  <section class="jumbotron">

    <h1 class="visually-hidden">
      Jennifer Curtis, Business Systems Analyst and Full-Stack Developer
    </h1>


    <!-- Business Systems -->
    <article class="paragraph business-systems">

      <p class="eyebrow">
        Business + Technology
      </p>

      <h2>
        Business Systems Analyst
      </h2>

      <p class="description">
        I spent years solving business problems before I learned to solve
        them with technology. Now I bring both sides together by understanding
        how people, processes and systems work, finding what could work better
        and turning those insights into practical solutions.
      </p>

      <router-link
        to="/experience"
        class="site-button"
      >
        View My Experience
      </router-link>

    </article>


    <!-- Full-Stack Development -->
    <article class="paragraph full-stack">

      <p class="eyebrow">
        Systems + Development
      </p>

      <h2>
        Full-Stack Developer
      </h2>

      <p class="description">
        I don't just build applications. I think about the problem behind
        them. Using Java, Spring Boot, Vue.js, PostgreSQL and REST APIs, I
        build solutions around real workflows, useful data and real users.
      </p>

      <router-link
        to="/projects"
        class="site-button"
      >
        View My Projects
      </router-link>

    </article>

  </section>
</template>


<script>
export default {
  name: "Jumbotron"
};
</script>


<style scoped>
/* ========================================
   Jumbotron
======================================== */

.jumbotron {
  position: relative;

  width: 100%;
  min-height: 80vh;
}


/* ========================================
   Content Blocks
======================================== */

.paragraph {
  position: absolute;

  color:
    var(--color-text);
}

.eyebrow {
  margin-bottom: .4rem;

  color:
    var(--color-accent-muted);

  font-size:
    clamp(.8rem, .8vw, 1rem);

  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.paragraph h2 {
  margin-bottom: .8rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.9rem, 2.4vw, 4rem);

  font-weight: 300;
  line-height: 1.15;
}

.description {
  margin-bottom: 1.15rem;

  color:
    var(--color-text-body);

  font-size:
    clamp(1rem, 1.2vw, 1.6rem);

  line-height: 1.5;
}


/* ========================================
   Business Systems
======================================== */

.business-systems {
  width: 34%;

  left: 3%;
  bottom: 43%;
}


/* ========================================
   Full-Stack Development
======================================== */

.full-stack {
  width: 34%;

  right: 3%;
  bottom: 25%;

  text-align: right;
}


/* ========================================
   Responsive Content Blocks
======================================== */

@media (max-width: 1300px) {
  .paragraph {
    background-color:
      var(--color-surface-transparent);

    border:
      1px solid
      var(--color-border-transparent);

    border-radius: 1rem;

    box-shadow:
      0 .5rem .75rem
      var(--color-shadow);
  }
}


/* ========================================
   Large Laptop
   1017px - 1440px
======================================== */

@media (min-width: 1017px) and (max-width: 1440px) {
  .business-systems {
    top: 6%;
    bottom: auto;
  }

  .full-stack {
    top: 25%;
    bottom: auto;
  }
}


/* ========================================
   Laptop Readability
   901px - 1300px
======================================== */

@media (min-width: 901px) and (max-width: 1300px) {
  .paragraph {
    padding:
      1.25rem
      1.5rem;
  }

  .business-systems,
  .full-stack {
    width: 36%;
  }

  .business-systems {
    left: 2%;
  }

  .full-stack {
    right: 2%;

    text-align: left;
  }
}


/* ========================================
   Small Laptop
   901px - 1016px
======================================== */

@media (min-width: 901px) and (max-width: 1016px) {
  .business-systems {
    top: 8%;
    bottom: auto;
  }

  .full-stack {
    top: 31%;
    bottom: auto;
  }
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 900px) {
  .jumbotron {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 2rem;

    min-height: auto;

    padding:
      4rem
      2rem;
  }

  .paragraph {
    position: static;

    width: min(100%, 42rem);

    padding: 1.5rem;
  }

  .business-systems {
    align-self: flex-start;
  }

  .full-stack {
    align-self: flex-end;

    text-align: left;
  }

  .paragraph h2 {
    font-size:
      clamp(1.8rem, 5vw, 2.5rem);
  }

  .description {
    font-size: 1.05rem;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .jumbotron {
    gap: 1.25rem;

    padding:
      2rem
      1rem;
  }

  .paragraph {
    width: 100%;

    padding: 1.25rem;
  }

  .business-systems,
  .full-stack {
    align-self: stretch;
  }

  .eyebrow {
    font-size: .75rem;
  }

  .paragraph h2 {
    font-size: 1.7rem;
  }

  .description {
    font-size: .95rem;
  }
}
</style>