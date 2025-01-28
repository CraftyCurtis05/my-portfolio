<template>
  <div class="contact-form container mt-5">
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
      <button type="submit" :disabled="loading" class="btn btn-primary btn-block">
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

button:disabled {
  background-color: #ccc;
}
</style>