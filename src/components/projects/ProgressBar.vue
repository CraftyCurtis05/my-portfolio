<!-- Progress Bar Component -->
<template>
    <component class="progress-bar-container">
        <section class="progress-bar" :style="progressStyle" title="Project Progress Completed">
            <span class="progress-text lead">{{ progress }}%</span>
        </section>
    </component>
</template>
  
<script>
export default {
    name: 'ProgressBar',
    props: {
        progress: {
            type: Number,
            required: true
        },
    },
    computed: {
        progressStyle() {
            return {
                width: `${this.progress}%`, // Set the width based on the passed progress
                background: `linear-gradient(90deg, #c2fdcf, #70d3fb, #bef454)`, // Gradient for the filled progress
            };
        }
    }
};
</script>

<style scoped>
.progress-bar-container {
    position: relative; /* To position the text inside the bar */
    width: 70%;
    height: 20px;
    background-color: #fff;
    border: 2px solid #505050; /* Black border around the progress bar */
    border-radius: 15px;
    margin: 10px 0;
    overflow: hidden; /* To ensure rounded corners show correctly */
    box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.progress-bar {
    position: relative; /* Relative positioning for the text */
    height: 100%; /* Fill the entire container height */
    transition: transform 0.3s ease;
}

.progress-text {
    position: absolute; /* Absolutely position the text inside the bar */
    top: 50%;
    left: 50%;
    color: white;
    font-weight: 500;
    font-size: .9rem;
    transform: translate(-50%, -50%); /* Center text properly */
}
</style>