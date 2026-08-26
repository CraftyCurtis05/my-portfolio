<!-- Page Header Component -->
<template>
  <header class="page-header">

    <p
      v-if="eyebrow"
      class="page-eyebrow"
    >
      {{ eyebrow }}
    </p>

    <h1 class="page-title">
      {{ title }}
    </h1>

    <p
      v-if="description"
      class="page-description"
    >
      {{ description }}
    </p>

  </header>
</template>


<script>
export default {
  name: "PageHeader",

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
   Page Header
======================================== */

.page-header {
  width: min(100%, 800px);

  margin-inline: auto;
  margin-bottom:
    clamp(2rem, 4vw, 3rem);

  text-align: center;
}


/* ========================================
   Eyebrow
======================================== */

.page-eyebrow {
  margin-bottom: .4rem;

  color:
    var(--color-accent-muted);

  font-size:
    clamp(.75rem, .8vw, .9rem);

  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
}


/* ========================================
   Page Title
======================================== */

.page-title {
  margin-bottom: .75rem;

  color:
    var(--color-text);

  font-size:
    clamp(2rem, 3vw, 3rem);

  font-weight: 300;
  line-height: 1.15;
}


/* ========================================
   Description
======================================== */

.page-description {
  width: min(100%, 700px);

  margin: 0 auto;

  color:
    var(--color-text-muted);

  font-size:
    clamp(1rem, 1.1vw, 1.15rem);

  line-height: 1.6;
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .page-header {
    margin-bottom: 2rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-description {
    font-size: .95rem;
  }
}
</style>