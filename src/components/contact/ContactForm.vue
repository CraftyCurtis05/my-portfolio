<template>
  <div class="contact-form container my-5">
    <h2 class="text-center mb-4">Contact Me</h2>
    <form @submit.prevent="sendEmail" ref="form">
      <div class="form-group">
        <label for="from_name">Your Name</label>
        <input
          type="text"
          v-model="formData.from_name"
          id="from_name"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="from_email">Your Email</label>
        <input
          type="email"
          v-model="formData.from_email"
          id="from_email"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          v-model="formData.message"
          id="message"
          class="form-control"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" :disabled="loading" class="btn btn-block">
        Send Message
      </button>
    </form>

    <p v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</p>
    <p v-if="successMessage" class="alert alert-success mt-3">{{ successMessage }}</p>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        from_name: "",
        from_email: "",
        message: "",
      },
      loading: false,
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    async sendEmail() {
      this.loading = true;
      this.errorMessage = "";
      this.successMessage = "";

      try {
        const response = await emailjs.sendForm(
          "service_ug8f75f", // Your Email.js Service ID
          "template_bqvi72t", // Your Email.js Template ID
          this.$refs.form, // Reference to the form
          "PBn8z_QyI9TZT19D7" // Your Email.js User ID
        );
        console.log("Email sent successfully", response);
        this.successMessage = "Your message has been sent successfully!";
        this.formData = { from_name: "", from_email: "", message: "" }; // Reset form
      } catch (error) {
        console.error("Failed to send email", error);
        this.errorMessage = "Something went wrong. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

/* Base Styling for the Button */
.btn {
  width: 36vw;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: 2px solid #7c7c8a;
  border-radius: 2rem;
  padding: .5vw;
  margin-top: .5vw;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.btn:hover {
  color: #ffffff;
  background-image: radial-gradient(circle, #8787c3, #b9b9c6); /* Subtle gradient background */
  background-size: 300% 300%;
  border: 2px solid #cccce4;
  transform: scale(1.05) translateY(-5px); /* Adds 3D effect */
  animation: gradient-animation 2s ease infinite;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2); /* Stronger shadow effect */
}

/* Define the animation */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%; /* Start position */
  }
  50% {
    background-position: 100% 50%; /* End position */
  }
  100% {
    background-position: 0% 50%; /* Back to start */
  }
}

/* Create a subtle glow effect around the button */
.btn::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  border-radius: 2rem;
  transition: opacity 0.4s ease-in-out;
  z-index: -1;
}

.btn:hover::before {
  opacity: 1; /* Glow effect on hover */
}
</style>