<!-- Contact Form Component -->
<template>
  <section class="contact-section">

    <div class="contact-card">

      <!-- Form Messages -->
      <div class="form-message">

        <p
          v-if="errorMessage"
          ref="errorMessage"
          class="alert alert-danger"
          role="alert"
          tabindex="-1"
        >
          {{ errorMessage }}
        </p>

        <p
          v-if="successMessage"
          class="alert alert-success"
          role="status"
        >
          {{ successMessage }}
        </p>

      </div>


      <!-- Contact Form -->
      <form
        class="contact-form"
        @submit.prevent="sendMessage"
      >

        <div class="form-group">
          <label for="name">
            Your Name
          </label>

          <input
            id="name"
            v-model.trim="formData.name"
            class="form-control"
            type="text"
            name="name"
            autocomplete="name"
            maxlength="100"
            placeholder="Enter your name"
            required
          >
        </div>


        <div class="form-group">
          <label for="email">
            Your Email
          </label>

          <input
            id="email"
            v-model.trim="formData.email"
            class="form-control"
            type="email"
            name="email"
            autocomplete="email"
            maxlength="150"
            placeholder="example@email.com"
            required
          >
        </div>


        <div class="form-group">
          <label for="phone">
            Your Phone
            <span class="optional">
              (optional)
            </span>
          </label>

          <input
            id="phone"
            v-model="formattedPhoneNumber"
            class="form-control"
            type="tel"
            name="phone"
            autocomplete="tel"
            inputmode="tel"
            maxlength="14"
            placeholder="(123) 456-7890"
          >
        </div>


        <div class="form-group">
          <label for="message">
            Message
          </label>

          <textarea
            id="message"
            v-model.trim="formData.message"
            class="form-control message-input"
            name="message"
            rows="6"
            maxlength="5000"
            placeholder="Tell me what you would like to talk about..."
            required
          ></textarea>
        </div>


        <!-- Spam Protection -->
        <div
          class="honeypot"
          aria-hidden="true"
        >
          <label for="website">
            Website
          </label>

          <input
            id="website"
            v-model="formData.website"
            type="text"
            name="website"
            tabindex="-1"
            autocomplete="off"
          >
        </div>

        <p class="required-note">
          All fields are required unless marked optional.
        </p>

        <!-- Submit Button -->
        <button
          class="site-button site-button--full contact-submit"
          type="submit"
          :disabled="isSending"
          :aria-busy="isSending"
        >
          {{ isSending ? 'Sending...' : 'Send Message' }}
        </button>

      </form>

    </div>

  </section>
</template>


<script>
export default {
  name: "ContactForm",


  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
        website: ''
      },

      isSending: false,
      errorMessage: '',
      successMessage: '',
      messageTimeout: null
    };
  },


  computed: {

    /* Format Phone Number */
    formattedPhoneNumber: {
      get() {
        const phoneNumber =
          this.formData.phone;

        if (!phoneNumber) {
          return '';
        }

        if (phoneNumber.length <= 3) {
          return `(${phoneNumber}`;
        }

        if (phoneNumber.length <= 6) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
      },

      set(value) {
        this.formData.phone =
          value
            .replace(/\D/g, '')
            .slice(0, 10);
      }
    }
  },


  methods: {

    /* Send Contact Message */
    async sendMessage() {
      if (this.isSending) {
        return;
      }

      this.isSending = true;
      this.errorMessage = '';
      this.successMessage = '';

      clearTimeout(
        this.messageTimeout
      );

      try {
        const response =
          await fetch(
            '/api/contact.php',
            {
              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json',

                'Accept':
                  'application/json'
              },

              body:
                JSON.stringify(
                  this.formData
                )
            }
          );

        const result =
          await response.json();

        if (
          !response.ok ||
          !result.success
        ) {
          this.errorMessage =
            result.message ||
            'Your message could not be sent. Please try again later.';

          this.$nextTick(() => {
            this.$refs.errorMessage?.focus();
          });

          return;
        }

        this.successMessage =
          'Your message has been sent. Thanks for reaching out!';

        this.resetForm();

        this.clearMessages();
      } catch {
        this.errorMessage =
          'Something went wrong. Please try again later.';

        this.$nextTick(() => {
          this.$refs.errorMessage?.focus();
        });
      } finally {
        this.isSending = false;
      }
    },


    /* Reset Contact Form */
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: '',
        website: ''
      };
    },


    /* Clear Form Messages */
    clearMessages() {
      clearTimeout(
        this.messageTimeout
      );

      this.messageTimeout =
        setTimeout(
          () => {
            this.successMessage = '';
            this.errorMessage = '';
          },
          5000
        );
    }
  },


  beforeUnmount() {
    clearTimeout(
      this.messageTimeout
    );
  }
};
</script>


<style scoped>
/* ========================================
   Contact Section
======================================== */

.contact-section {
  width: 100%;
}


/* ========================================
   Contact Card
======================================== */

.contact-card {
  width: min(100%, 700px);

  margin-inline: auto;

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
}

.required-note {
  margin-bottom: 1rem;

  color:
    var(--color-text-muted);

  font-size: .9rem;
}


/* ========================================
   Contact Form
======================================== */

.contact-form {
  width: 100%;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;

  margin-bottom: .4rem;

  color:
    var(--color-text-body);

  font-size: 1rem;
  font-weight: 500;
}

.optional {
  color:
    var(--color-accent-muted);

  font-size: .85rem;
  font-weight: 400;
  font-style: italic;
}


/* ========================================
   Form Controls
======================================== */

.form-control {
  width: 100%;

  padding:
    .75rem
    1rem;

  color:
    var(--color-text);

  background-color:
    var(--color-input);

  border:
    1px solid
    var(--color-border);

  border-radius: .6rem;

  font-size: 1rem;

  box-shadow:
    .15rem .2rem .3rem
    var(--color-shadow);

  transition:
    border-color .2s ease,
    box-shadow .2s ease;
}

.form-control:hover {
  border-color:
    var(--color-accent-muted);
}

.form-control:focus {
  border-color:
    var(--color-accent-blue);

  box-shadow:
    0 0 0 .2rem
    var(--color-focus-ring),
    .15rem .2rem .3rem
    var(--color-shadow);

  outline: none;
}

.message-input {
  min-height: 10rem;

  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color:
    var(--color-text-secondary);

  opacity: .65;
}


/* ========================================
   Form Messages
======================================== */

.form-message {
  width: 100%;

  margin-bottom: 1.5rem;
}

.form-message p {
  margin-bottom: 0;
}


/* ========================================
   Spam Protection
======================================== */

.honeypot {
  position: absolute;

  left: -9999px;

  width: 1px;
  height: 1px;

  overflow: hidden;
}


/* ========================================
   Submit Button
======================================== */

.contact-submit {
  margin-top: .5rem;
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .contact-card {
    padding:
      1.75rem
      1.25rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-control {
    padding:
      .7rem
      .85rem;

    font-size: .95rem;
  }
}


/* ========================================
   Small Mobile
======================================== */

@media (max-width: 400px) {
  .contact-card {
    padding:
      1.5rem
      1rem;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
</style>