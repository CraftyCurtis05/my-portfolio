<!-- Education View -->
<template>
  <div class="education-page page-shell">

    <PageHeader
      eyebrow="Learning · Training · Growth"
      title="Education & Training"
      description="A mix of formal coursework, technical training and hands-on learning that helped me build the skills I use today."
    />


    <!-- Education -->
    <section class="education-content">
      <EducationCarousel />
    </section>

  </div>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue';
import EducationCarousel from '@/components/education/EducationCarousel.vue';

export default {
  name: "EducationView",

  components: {
    PageHeader,
    EducationCarousel
  }
};
</script>