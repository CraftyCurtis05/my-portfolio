<!-- Projects View -->
<template>
  <div class="projects-page page-shell">

    <PageHeader
      eyebrow="Systems · Development · Design"
      title="Projects"
      description="A mix of independent, client and educational work that shows how I approach systems, development and practical problem-solving."
    />


    <!-- Projects -->
    <section class="projects-content">
      <ProjectDirectory />
    </section>

  </div>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue';
import ProjectDirectory from '@/components/projects/ProjectDirectory.vue';

export default {
  name: "ProjectsView",

  components: {
    PageHeader,
    ProjectDirectory
  }
};
</script>