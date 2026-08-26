<!-- Section Header Component -->
<template>
  <header class="section-header">

    <p
      v-if="eyebrow"
      class="section-eyebrow"
    >
      {{ eyebrow }}
    </p>

    <h2 class="section-title">
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="section-description"
    >
      {{ description }}
    </p>

  </header>
</template>


<script>
export default {
  name: "SectionHeader",

  props: {
    eyebrow: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      default: ""
    }
  }
};
</script>


<style scoped>
/* ========================================
   Section Header
======================================== */

.section-header {
  width: min(100%, 750px);

  margin-inline: auto;
  margin-bottom:
    clamp(1.75rem, 3vw, 2.5rem);

  text-align: center;
}


/* ========================================
   Eyebrow
======================================== */

.section-eyebrow {
  margin-bottom: .35rem;

  color:
    var(--color-accent-muted);

  font-size:
    clamp(.75rem, .8vw, .9rem);

  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
}


/* ========================================
   Section Title
======================================== */

.section-title {
  margin-bottom: .65rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.75rem, 2.4vw, 2.5rem);

  font-weight: 300;
  line-height: 1.15;
}


/* ========================================
   Description
======================================== */

.section-description {
  width: min(100%, 650px);

  margin: 0 auto;

  color:
    var(--color-text-muted);

  font-size:
    clamp(.95rem, 1vw, 1.1rem);

  line-height: 1.6;
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .section-header {
    margin-bottom: 1.75rem;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .section-description {
    font-size: .95rem;
  }
}
</style>