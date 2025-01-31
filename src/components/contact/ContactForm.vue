<!-- Contact Form Component -->
<template>
  <article class="container">
    <h2 class="text-center display-6 pt-5 pb-4">Contact Me</h2>

    <!-- Error Handling -->
    <section class="error">
      <p v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</p>
      <p v-if="successMessage" class="alert alert-success">{{ successMessage }}</p>
    </section>

    <!-- Form -->
    <form class="m-auto lead" @submit.prevent="sendEmail" ref="form" style="width: 600px">
      
      <!-- From Name Input -->
      <section class="form-group my-1">
        <label for="from_name">Your Name</label>
        <input
          type="text"
          class="form-control"
          id="from_name"
          name="name"
          placeholder="Enter your full name"
          v-model="formData.from_name"
          required
        />
      </section>

      <!-- From Email Input -->
      <section class="form-group my-1">
        <label class="mt-1" for="from_email">Your Email</label>
        <input
          type="email"
          class="form-control"
          id="from_email"
          name="email"
          placeholder="example@email.com"
          v-model="formData.from_email"
          required
        />
      </section>

      <!-- From Phone Input -->
      <section class="form-group my-1">
        <label class="mt-1" for="from_phone">Your Phone <em>(optional)</em></label>
        <input
          type="tel"
          class="form-control"
          id="from_phone"
          name="phone"
          placeholder="(123) 456-7890"
          v-model="formattedPhoneNumber"
          maxlength="14"
          @input="validatePhoneNumber" 
        />
      </section>

      <!-- Message Input -->
      <section class="form-group my-1">
        <label class="mt-1" for="message">Message</label>
        <textarea
          name="email"
          class="form-control"
          id="message"
          placeholder="Enter your message here..."
          v-model="formData.message"
          rows="5"
          required
        ></textarea>
      </section>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-block mt-2 mb-4">Send Message</button>
    </form>

  </article>
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
    validatePhoneNumber(event) {
      // Get the current input value
      const rawValue = event.target.value;

      // Remove all non-numeric characters
      const numericValue = rawValue.replace(/\D/g, '');

      // Update the value with only numeric characters
      this.formData.from_phone = numericValue;

      // Ensure the formattedPhoneNumber reflects this updated numeric value
      this.$forceUpdate();  // This is to force Vue to re-render the component after manual update
    },
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
        this.clearMessages();  // Automatically clear message after 4 seconds
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        this.errorMessage = "Something went wrong. Please try again later.";
        this.clearMessages();  // Automatically clear message after 4 seconds
      });
    },
    clearMessages() {
      setTimeout(() => {
        this.successMessage = ""; // Clear success message after timeout
        this.errorMessage = "";   // Clear error message after timeout
      }, 4000); // 4000ms = 4 seconds
    }
  },
  computed: {
    // Computed property to format the phone number
    formattedPhoneNumber: {
      get() {
        // If there's no phone number, return empty string (prevent showing just parentheses)
        if (!this.formData.from_phone) {
          return "";
        }

        // Remove all non-numeric characters
        let phoneNumber = this.formData.from_phone.replace(/\D/g, '');

        // Format the phone number with parentheses and dashes
        if (phoneNumber.length > 3 && phoneNumber.length <= 6) {
          phoneNumber = `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3)}`;
        } else if (phoneNumber.length > 6) {
          phoneNumber = `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6, 10)}`;
        } else {
          phoneNumber = `(${phoneNumber.substring(0, 3)}`;
        }
        return phoneNumber;
      },
      set(value) {
        // Strip non-numeric characters and update the formData model
        this.formData.from_phone = value.replace(/\D/g, '');
      }
    }
  },
};
</script>

<style scoped>
h2,
label {
  margin: -.5vw;
}

.form-control,
.btn {
  box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

input::placeholder,
textarea::placeholder {
  color: rgb(179, 178, 178);
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