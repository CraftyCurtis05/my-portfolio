<!-- Experience View -->
<template>
  <div class="experience-page page-shell">

    <PageHeader
      eyebrow="Experience · Systems · Technology"
      title="Professional Experience"
      description="A career across business operations, technology and development, with problem-solving at the center of it."
    />


    <!-- Experience -->
    <section class="experience-content">
      <ExperienceCarousel />
    </section>


    <!-- Tools & Technologies -->
    <section class="tools-content section-divider">
      <ToolsTechnologiesCarousel />
    </section>

  </div>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue';
import ExperienceCarousel from '@/components/experience/ExperienceCarousel.vue';
import ToolsTechnologiesCarousel from '@/components/experience/ToolsTechnologiesCarousel.vue';

export default {
  name: "ExperienceView",

  components: {
    PageHeader,
    ExperienceCarousel,
    ToolsTechnologiesCarousel
  }
};
</script>


<style scoped>
/* ========================================
   Tools & Technologies
======================================== */

.tools-content {
  width: 100%;
}
</style>