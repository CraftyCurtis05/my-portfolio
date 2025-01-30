<!-- Progress Bar Component -->
<template>
    <div class="progress-bar-container">
        <div class="progress-bar" :style="progressStyle">
            <span class="progress-text lead">{{ progress }}%</span>
        </div>
    </div>
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
    height: 18px;
    background-color: #fff;
    border: 2px solid #505050; /* Black border around the progress bar */
    border-radius: 15px;
    margin: 10px 0;
    overflow: hidden; /* To ensure rounded corners show correctly */
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
    color: black;
    font-weight: 500;
    font-size: .9rem;
    transform: translate(-50%, -50%); /* Center text properly */
}
</style>