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

.btn {
    font-size: .9rem;
    color: #858585;
    background-color: #dadae2;
    border: 1px #b9b8b8 solid;
    margin-top: .5vw;
    transition: transform 0.3s ease-in;
}

.btn:hover {
    font-weight: 500;
    color: #696969;
    background-image: radial-gradient(circle, #b9b9d7, #dadae2);
    background-size: 300% 300%; /* Makes the gradient larger than the element */
    animation: gradient-animation 3s ease infinite; /* Applies the animation */
    border: 1px #b9b9d7 solid;
    margin-top: .5vw;
    transform: scale(1.05);
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
</style>