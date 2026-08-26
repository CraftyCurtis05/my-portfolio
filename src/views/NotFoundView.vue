<!-- Not Found View -->
<template>
  <section class="not-found-page page-shell">

    <div class="not-found-content">

      <p class="error-code">
        404
      </p>

      <PageHeader
        title="Page Not Found"
        description="The page you are looking for does not exist or may have moved."
      />

      <router-link
        to="/"
        class="site-button not-found-button"
      >
        Return Home
      </router-link>

    </div>

  </section>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: "NotFoundView",

  components: {
    PageHeader
  }
};
</script>


<style scoped>
/* ========================================
   Not Found Page
======================================== */

.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 60vh;
}


/* ========================================
   Not Found Content
======================================== */

.not-found-content {
  width: min(100%, 650px);

  padding:
    clamp(2rem, 4vw, 3.5rem)
    clamp(2rem, 5vw, 4rem);

  background-color:
    var(--color-surface-transparent-strong);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: 1rem;

  box-shadow:
    0 .5rem .75rem
    var(--color-shadow);

  text-align: center;
}


/* ========================================
   Error Code
======================================== */

.error-code {
  margin-bottom: .5rem;

  color:
    var(--color-accent-muted);

  font-size:
    clamp(2.5rem, 6vw, 4.5rem);

  font-weight: 300;
  line-height: 1;
}


/* ========================================
   Return Home Button
======================================== */

.not-found-button {
  margin-top: .5rem;
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .not-found-page {
    min-height: 50vh;
  }

  .not-found-content {
    padding:
      1.75rem
      1.25rem;
  }

  .not-found-button {
    width: 100%;
  }
}
</style>