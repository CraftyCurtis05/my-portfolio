<!-- Footer Component -->
<template>
  <footer class="footer">

    <!-- Footer Content -->
    <div class="footer-content">

      <!-- Logo -->
      <section class="footer-section logo-section">
        <router-link
          to="/"
          class="footer-logo-link"
          aria-label="Go to home page"
        >
          <img
            :src="
              theme === 'light'
                ? '/assets/images/logo/light_theme/logo_light.webp'
                : '/assets/images/logo/dark_theme/logo_dark.webp'
            "
            alt="Jennifer Curtis"
          >
        </router-link>
      </section>


      <!-- About -->
      <section class="footer-section">
        <h2 class="footer-heading">
          <router-link
            to="/about"
            class="footer-link"
          >
            About Me
          </router-link>
        </h2>

        <p>
          Business systems and technology professional focused on practical,
          user-centered solutions that connect business needs with technical
          implementation.
        </p>
      </section>


      <!-- Contact -->
      <section class="footer-section">
        <h2 class="footer-heading">
          <router-link
            to="/contact"
            class="footer-link"
          >
            Contact Me
          </router-link>
        </h2>

        <ul class="contact-list">
          <li>
            <span class="contact-label">
              email:
            </span>

            <a
              href="mailto:contact@jennifercurtis.me"
              class="footer-link"
            >
              contact@jennifercurtis.me
            </a>
          </li>

          <li>
            <span class="contact-label">
              location:
            </span>

            Columbus, Ohio
          </li>
        </ul>
      </section>


      <!-- Professional Profiles -->
      <section
        class="footer-section"
        aria-labelledby="footerConnectHeading"
      >
        <h2
          id="footerConnectHeading"
          class="footer-heading"
        >
          Connect
        </h2>

        <ul class="social-list">

          <!-- LinkedIn -->
          <li>
            <a
              href="https://www.linkedin.com/in/jcurtisdeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link accent-glow"
              aria-label="Visit my LinkedIn profile"
              title="Visit My LinkedIn Profile"
            >
              <img
                class="icon icon-default"
                :src="
                  theme === 'light'
                    ? '/assets/images/icons/light_theme/linkedin_light.webp'
                    : '/assets/images/icons/dark_theme/linkedin_dark.webp'
                "
                alt=""
                aria-hidden="true"
              >

              <img
                class="icon icon-hover"
                :src="
                  theme === 'light'
                    ? '/assets/images/icons/dark_theme/linkedin_dark.webp'
                    : '/assets/images/icons/light_theme/linkedin_light.webp'
                "
                alt=""
                aria-hidden="true"
              >
            </a>
          </li>


          <!-- GitHub -->
          <li>
            <a
              href="https://github.com/CraftyCurtis05"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link accent-glow"
              aria-label="Visit my GitHub profile"
              title="Visit My GitHub Profile"
            >
              <img
                class="icon icon-default"
                :src="
                  theme === 'light'
                    ? '/assets/images/icons/light_theme/github_light.webp'
                    : '/assets/images/icons/dark_theme/github_dark.webp'
                "
                alt=""
                aria-hidden="true"
              >

              <img
                class="icon icon-hover"
                :src="
                  theme === 'light'
                    ? '/assets/images/icons/dark_theme/github_dark.webp'
                    : '/assets/images/icons/light_theme/github_light.webp'
                "
                alt=""
                aria-hidden="true"
              >
            </a>
          </li>

        </ul>
      </section>

    </div>


    <!-- Footer Divider -->
    <hr>


    <!-- Copyright & Navigation -->
    <div class="footer-bottom">

      <p class="copyright">
        &copy; {{ currentYear }}

        <button
          ref="diagnosticTrigger"
          type="button"
          class="diagnostic-trigger"
          title="Open Jennifer OS system diagnostic"
          aria-haspopup="dialog"
          :aria-expanded="diagnosticVisible"
          @click="handleDiagnosticClick"
        >
          Jennifer Curtis
        </button>.

        All rights reserved.
      </p>


      <nav
        class="footer-nav"
        aria-label="Footer navigation"
      >
        <router-link
          to="/contact"
          class="footer-link"
        >
          Contact
        </router-link>

        <router-link
          to="/sitemap"
          class="footer-link"
        >
          Sitemap
        </router-link>
      </nav>

    </div>


    <!-- System Diagnostic Easter Egg -->
    <SystemDiagnostic
      :is-visible="diagnosticVisible"
      @close="closeDiagnostic"
    />

  </footer>
</template>


<script>
import SystemDiagnostic from './SystemDiagnostic.vue';

export default {
  name: "Footer",

  components: {
    SystemDiagnostic
  },


  props: {
    theme: {
      type: String,
      required: true
    }
  },


  data() {
    return {
      diagnosticVisible: false
    };
  },


  computed: {

    /* Current Copyright Year */
    currentYear() {
      return new Date().getFullYear();
    }
  },


  methods: {

    /* Open System Diagnostic */
    handleDiagnosticClick() {
      this.diagnosticVisible = true;
    },


    /* Close System Diagnostic */
    closeDiagnostic() {
      this.diagnosticVisible = false;

      this.$nextTick(() => {
        this.$refs.diagnosticTrigger?.focus();
      });
    }
  }
};
</script>


<style scoped>
/* ========================================
   Footer
======================================== */

.footer {
  width: 100%;

  padding:
    2rem
    3rem
    1rem;

  background-color:
    var(--color-background);

  transition:
    background-color .3s ease-in-out;
}


/* ========================================
   Footer Content
======================================== */

.footer-content {
  display: grid;
  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 2rem;
}

.footer-section {
  min-width: 0;
}


/* ========================================
   Footer Logo
======================================== */

.logo-section {
  display: flex;
  align-items: flex-start;
}

.footer-logo-link {
  display: inline-flex;

  border-radius: .5rem;
}

.footer-logo-link:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}

.logo-section img {
  display: block;

  width:
    clamp(9rem, 11vw, 15rem);

  height: auto;
}


/* ========================================
   Footer Headings
======================================== */

.footer-heading {
  margin-bottom: .75rem;

  color:
    var(--color-text);

  font-size:
    clamp(1.1rem, 1.3vw, 1.6rem);

  font-weight: 500;
}


/* ========================================
   Footer Text
======================================== */

.footer-section p,
.footer-section li {
  color:
    var(--color-text-body);

  font-size:
    clamp(.95rem, 1vw, 1.15rem);

  line-height: 1.6;
}

.contact-label {
  color:
    var(--color-text-muted);
}


/* ========================================
   Footer Links
======================================== */

.footer-link {
  position: relative;

  display: inline-block;

  color:
    var(--color-text);

  text-decoration: none;

  transition:
    color .2s ease,
    transform .2s ease;
}

.footer-link::after {
  content: "";

  position: absolute;

  left: 50%;
  bottom: -.2rem;

  width: 0;
  height: .1rem;

  background-image:
    linear-gradient(
      90deg,
      var(--color-accent-green),
      var(--color-accent-blue),
      var(--color-accent-lime)
    );

  border-radius: 1rem;

  transform:
    translateX(-50%);

  transition:
    width .25s ease;
}

.footer-link:hover,
.footer-link:focus-visible {
  transform:
    scale(1.03);
}

.footer-link:hover::after,
.footer-link:focus-visible::after {
  width: 90%;
}

.footer-link:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}


/* ========================================
   Touch Interaction
======================================== */

@media (hover: none) and
       (pointer: coarse) {

  .footer-link:active {
    transform:
      scale(.98);
  }

  .footer-link:active::after {
    width: 90%;
  }
}


/* ========================================
   Contact List
======================================== */

.contact-list,
.social-list {
  margin: 0;
  padding: 0;

  list-style: none;
}

.contact-list li {
  margin-bottom: .4rem;
}

.contact-list li:last-child {
  margin-bottom: 0;
}


/* ========================================
   Professional Profiles
======================================== */

.social-list {
  display: flex;
  align-items: center;

  gap: .3rem;
}

.icon {
  width:
    clamp(3.5rem, 4vw, 5rem);

  height: auto;
}


/* ========================================
   Footer Divider
======================================== */

.footer hr {
  margin-block:
    1.5rem
    1rem;

  border-color:
    var(--color-accent-muted);
}


/* ========================================
   Footer Bottom
======================================== */

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
}

.copyright {
  margin: 0;

  color:
    var(--color-text-body);

  font-size: .95rem;
}

.footer-nav {
  display: flex;

  gap: 1.5rem;
}


/* ========================================
   Diagnostic Trigger
======================================== */

.diagnostic-trigger {
  padding: 0;

  color:
    inherit;

  background-color: transparent;

  border: 0;
  border-radius: .2rem;

  font: inherit;

  cursor: pointer;

  transition:
    color .2s ease;
}

.diagnostic-trigger:focus-visible {
  color:
    var(--color-text);

  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 4px;
}


/* ========================================
   Tablet
======================================== */

@media (max-width: 900px) {
  .footer {
    padding-inline: 2rem;
  }

  .footer-content {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .footer {
    padding:
      2rem
      1.25rem
      1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;

    gap: 1.75rem;
  }

  .logo-section {
    justify-content: center;
  }

  .footer-section {
    text-align: center;
  }

  .social-list {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;

    text-align: center;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .footer,
  .footer-link,
  .footer-link::after,
  .diagnostic-trigger {
    transition: none;
  }
}
</style>