<!-- About View -->
<template>
  <div class="about-page page-shell">

    <PageHeader
      eyebrow="Business · Technology · Development"
      title="About Jennifer Curtis"
      description="A little about where I came from, how I found my way into technology and how I approach the work I do now."
    />


    <!-- About Content -->
    <div class="about-content">

      <!-- Profile Image & Certificates -->
      <section class="image-section">

        <div class="profile-panel">

          <ProfileImage
            :received-data="certificateModalOpen"
          />

          <Certificates
            @data-sent="handleCertificateModal"
          />

        </div>

      </section>


      <!-- About Me -->
      <section class="about-section">
        <AboutMe />
      </section>

    </div>


    <!-- How I Think -->
    <HowIThink />


    <!-- Professional Timeline -->
    <section class="timeline-section section-divider">
      <Timeline />
    </section>

  </div>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue';
import ProfileImage from '@/components/about/ProfileImage.vue';
import Certificates from '@/components/about/Certificates.vue';
import AboutMe from '@/components/about/AboutMe.vue';
import HowIThink from '@/components/about/HowIThink.vue';
import Timeline from '@/components/about/Timeline.vue';

export default {
  name: "AboutView",

  components: {
    PageHeader,
    ProfileImage,
    Certificates,
    AboutMe,
    HowIThink,
    Timeline
  },


  data() {
    return {
      certificateModalOpen: false
    };
  },


  methods: {

    /* Track Certificate Modal State */
    handleCertificateModal(isOpen) {
      this.certificateModalOpen = isOpen;
    }
  }
};
</script>


<style scoped>
/* ========================================
   About Content
======================================== */

.about-content {
  display: grid;
  grid-template-columns:
    minmax(16rem, .8fr)
    minmax(30rem, 1.6fr);

  align-items: start;

  column-gap:
    clamp(3rem, 6vw, 7rem);
}


/* ========================================
   Image & Certificates
======================================== */

.image-section {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 0;

  z-index: 2;
}


/* ========================================
   Profile Panel
======================================== */

.profile-panel {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding:
    clamp(1rem, 2vw, 1.5rem);

  gap: .5rem;

  background-color:
    var(--color-surface-transparent-light);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: 1rem;

  box-shadow:
    0 .35rem .6rem
    var(--color-shadow);

  transition:
    background-color .3s ease,
    border-color .3s ease,
    box-shadow .3s ease;
}

.profile-panel:hover {
  border-color:
    var(--color-border);

  box-shadow:
    0 .5rem .8rem
    var(--color-shadow);
}


/* ========================================
   About Me
======================================== */

.about-section {
  position: relative;

  min-width: 0;

  z-index: 1;
}


/* ========================================
   Timeline
======================================== */

.timeline-section {
  width: 100%;
}


/* ========================================
   Small Desktop / Large Tablet
======================================== */

@media (min-width: 901px) and (max-width: 1100px) {
  .about-content {
    grid-template-columns:
      minmax(14rem, .85fr)
      minmax(0, 1.5fr);

    column-gap:
      clamp(2rem, 4vw, 3rem);
  }

  .image-section {
    margin-top: 1.7rem;
  }

  .about-section {
    margin-top: .25rem;
  }
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 900px) {
  .about-content {
    grid-template-columns: 1fr;

    gap: 2.5rem;
  }

  .image-section,
  .about-section {
    width: 100%;

    margin-top: 0;
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .about-content {
    gap: 2rem;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .profile-panel {
    transition: none;
  }
}
</style>