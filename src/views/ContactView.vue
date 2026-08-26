<!-- Contact View -->
<template>
  <div class="contact-page page-shell">

    <PageHeader
      eyebrow="Opportunities · Projects · Connections"
      title="Contact Me"
      description="If you would like to talk about an opportunity, a project or simply connect, I would be happy to hear from you."
    />


    <!-- Contact Form -->
    <section class="contact-content">
      <ContactForm />
    </section>

  </div>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue';
import ContactForm from '@/components/contact/ContactForm.vue';

export default {
  name: "ContactView",

  components: {
    PageHeader,
    ContactForm
  }
};
</script>