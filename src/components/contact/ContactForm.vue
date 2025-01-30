<!-- Contact Form Component -->
<template>
  <component class="container">
    <h2 class="text-center display-6">Contact Me</h2>

    <!-- Form -->
    <form class="m-auto lead" @submit.prevent="sendEmail" ref="form" style="width: 600px">
      
      <!-- From Name Input -->
      <section class="form-group my-1">
        <label for="from_name">Your Name</label>
        <input
          class="form-control"
          id="from_name"
          type="text"
          v-model="formData.from_name"
          required
        />
      </section>

      <!-- From Email Input -->
      <section class="form-group my-1">
        <label for="from_email">Your Email</label>
        <input
          class="form-control"
          id="from_email"
          type="email"
          v-model="formData.from_email"
          required
        />
      </section>

      <!-- From Phone Input -->
      <section class="form-group my-1">
        <label for="from_phone">Your Phone <em>(optional)</em></label>
        <input
          class="form-control"
          id="from_phone"
          type="phone"
          v-model="formData.from_phone"
        />
      </section>

      <!-- Message Input -->
      <section class="form-group my-1">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          v-model="formData.message"
          rows="5"
          required
        ></textarea>
      </section>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-block my-2">Send Message</button>
    </form>

    <!-- Error Handling -->
     <section class="error">
      <p v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</p>
      <p v-if="successMessage" class="alert alert-success ">{{ successMessage }}</p>
    </section>
  </component>
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
        from_phone: "",
        message: "",
      },
      errorMessage: "",
      successMessage: ""
    };
  },
  methods: {
    sendEmail() {
      emailjs.send (
        "service_ug8f75f", // Email.js Service ID
        "template_bqvi72t", // Email.js Template ID
        this.formData, // Reference to the model
        "PBn8z_QyI9TZT19D7" // Email.js User ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        this.successMessage = "Your message has been sent successfully!";
        this.formData = { from_name: "", from_email: "", from_phone: "", message: ""}; // Reset form
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        this.errorMessage = "Something went wrong. Please try again later.";
      });
    }
  }
};
</script>

<style scoped>
.form-control,
.btn {
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

/* Base Styling for the Button */
.btn {
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: .1vw solid #7c7c8a;
  border-radius: 1vw;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.btn:hover {
  font-size: 1.05rem;
  font-weight: 500;
  color: white;
  background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454); /* Subtle gradient background */
  background-size: 500% 500%;
  border: .1vw solid #cccce4;
  transform: translateY(-1px); /* Adds 3D effect */
  animation: gradient-animation 5s ease infinite;
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.2); /* Stronger shadow effect */
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
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  border-radius: 2rem;
  transition: opacity 0.4s ease-in-out;
  z-index: -1;
}

.btn:hover::before {
  opacity: 1; /* Glow effect on hover */
}

.error {
  margin-top: -1vw;
}
</style>