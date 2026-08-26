<!-- About Me Component -->
<template>
  <article class="about-me">

    <!-- Introduction -->
    <p class="about-intro">
      My background is a mix of
      <span class="text-highlight">
        business operations, technology and software development
      </span>,
      but problem-solving has always been the common thread. I like
      understanding how things work and finding ways they could work better.
    </p>


    <!-- Background -->
    <p class="about-body">
      I spent years running and improving the day-to-day systems behind
      small businesses. That taught me to see how
      <span class="text-highlight">
        people, processes and information
      </span>
      affect each other. Long before I knew the terminology, I was already
      doing systems analysis and process improvement.
    </p>

    <p class="about-body">
      After completing Tech Elevator's Java full-stack bootcamp, technology
      gave me new tools for solving those same problems. I enjoy
      <span class="text-highlight">
        getting underneath a problem
      </span>,
      making sense of the moving pieces and finding practical solutions.
    </p>


    <!-- Personal -->
    <p class="about-personal">
      Outside of technology, I enjoy remodeling projects, coffee, design
      and a good playlist while I work. I like creating, improving and
      figuring things out, whether code is involved or not.
    </p>


    <!-- Professional Focus -->
    <p class="about-focus">
      I am especially interested in work that connects
      <span class="focus-highlight">
        business needs, technical systems and the people who use them.
      </span>
      That space between business and technology is where I do some of my
      best work.
    </p>

  </article>
</template>


<script>
export default {
  name: "AboutMe"
};
</script>


<style scoped>
/* ========================================
   About Me
======================================== */

.about-me {
  position: relative;

  width:
    min(100%, 850px);

  padding-left:
    clamp(1rem, 2vw, 1.5rem);

  color:
    var(--color-text);
}

.about-me::before {
  content: "";

  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;

  width: .2rem;

  background-image:
    linear-gradient(
      to bottom,
      var(--color-accent-green),
      var(--color-accent-blue),
      var(--color-accent-lime)
    );

  border-radius: 1rem;

  opacity: .55;

  transition:
    opacity .3s ease;
}

.about-me:hover::before {
  opacity: .9;
}


/* ========================================
   Introduction
======================================== */

.about-intro {
  margin-bottom: 1.15rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.05rem, 1.15vw, 1.2rem);

  font-weight: 400;
  line-height: 1.6;
}


/* ========================================
   Background
======================================== */

.about-body {
  margin-bottom: 1.05rem;

  color:
    var(--color-text-body);

  font-size:
    clamp(.95rem, 1vw, 1.05rem);

  line-height: 1.6;
}


/* ========================================
   Highlighted Text
======================================== */

.text-highlight {
  color:
    var(--color-text);

  font-weight: 500;
}


/* ========================================
   Personal
======================================== */

.about-personal {
  margin-bottom: 1.1rem;

  color:
    var(--color-text-muted);

  font-size:
    clamp(.95rem, 1vw, 1.05rem);

  line-height: 1.6;
}


/* ========================================
   Professional Focus
======================================== */

.about-focus {
  margin-top: 1.35rem;
  margin-bottom: 0;

  padding: 1rem;

  color:
    var(--color-text);

  background-color:
    var(--color-surface-transparent-light);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: .75rem;

  font-size:
    clamp(1rem, 1.05vw, 1.1rem);

  font-weight: 400;
  line-height: 1.6;
}

.focus-highlight {
  font-weight: 500;
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .about-intro,
  .about-body,
  .about-personal,
  .about-focus {
    line-height: 1.55;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .about-me::before {
    transition: none;
  }
}
</style>