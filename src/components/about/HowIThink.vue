<!-- How I Think Component -->
<template>
  <section class="thinking-section section-divider">

    <SectionHeader
      eyebrow="Approach · Analysis · Solutions"
      title="How I Think"
      description="How I approach problems across business processes, technical systems and applications."
    />


    <!-- Thinking Process -->
    <div class="thinking-grid">

      <!-- Understand -->
      <article class="thinking-step">

        <p class="step-number accent-glow">
          01
        </p>

        <h3>
          Understand the Problem
        </h3>

        <p>
          I start by figuring out what is actually happening, who it affects
          and what problem needs to be solved before deciding what the
          solution should be.
        </p>

      </article>


      <!-- Connect -->
      <article class="thinking-step">

        <p class="step-number accent-glow">
          02
        </p>

        <h3>
          Connect the Moving Parts
        </h3>

        <p>
          I look at how people, processes, information and technology
          interact so I can see where friction, gaps or unnecessary
          complexity are coming from.
        </p>

      </article>


      <!-- Improve -->
      <article class="thinking-step">

        <p class="step-number accent-glow">
          03
        </p>

        <h3>
          Build the Practical Solution
        </h3>

        <p>
          I focus on solutions that make sense for the people using them,
          improve how the work gets done and solve the problem without adding
          unnecessary complexity.
        </p>

      </article>

    </div>

  </section>
</template>


<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: "HowIThink",

  components: {
    SectionHeader
  }
};
</script>


<style scoped>
/* ========================================
   Thinking Section
======================================== */

.thinking-section {
  width: 100%;
}


/* ========================================
   Thinking Grid
======================================== */

.thinking-grid {
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap:
    clamp(1rem, 2vw, 1.5rem);
}


/* ========================================
   Thinking Step
======================================== */

.thinking-step {
  min-width: 0;

  padding:
    clamp(1.5rem, 2.5vw, 2rem);

  background-color:
    var(--color-surface-transparent);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: 1rem;

  box-shadow:
    0 .35rem .6rem
    var(--color-shadow);

  transition:
    transform .25s ease,
    box-shadow .25s ease;
}

.thinking-step:hover {
  transform:
    translateY(-2px);

  box-shadow:
    0 .5rem .8rem
    var(--color-shadow-strong);
}


/* ========================================
   Step Number
======================================== */

.step-number {
  display: inline-flex;

  margin-bottom: .5rem;

  padding:
    .25rem
    .45rem;

  color:
    var(--color-accent-muted);

  border-radius: .5rem;

  font-size: .8rem;
  font-weight: 600;
  letter-spacing: .08em;

  transition:
    color .25s ease,
    transform .25s ease;
}

.thinking-step:hover
.step-number {
  color:
    var(--color-text);

  transform:
    translateY(-1px);
}

.thinking-step:hover
.step-number::before {
  opacity: .65;

  transform:
    scale(1);

  animation:
    gradient-animation
    5s
    ease
    infinite;
}


/* ========================================
   Step Content
======================================== */

.thinking-step h3 {
  margin-bottom: .75rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.1rem, 1.25vw, 1.35rem);

  font-weight: 500;
  line-height: 1.3;
}

.thinking-step p:last-child {
  margin: 0;

  color:
    var(--color-text-body);

  font-size:
    clamp(.95rem, 1vw, 1.05rem);

  line-height: 1.6;
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 900px) {
  .thinking-grid {
    grid-template-columns: 1fr;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .thinking-step {
    padding: 1.25rem;
  }

  .thinking-step p:last-child {
    line-height: 1.55;
  }
}


/* ========================================
   Touch Interaction
======================================== */

@media (hover: none) and
       (pointer: coarse) {
  .thinking-step:active {
    background-color:
      var(--color-surface-transparent-strong);

    transform:
      translateY(1px)
      scale(.995);

    box-shadow:
      0 .2rem .4rem
      var(--color-shadow);
  }

  .thinking-step:active
  .step-number {
    color:
      var(--color-text);

    transform:
      scale(1.05);
  }

  .thinking-step:active
  .step-number::before {
    opacity: .45;

    transform:
      scale(1);
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .thinking-step,
  .step-number,
  .step-number::before {
    transition: none;
    animation: none;
  }
}
</style>