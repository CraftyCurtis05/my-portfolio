<template>
    <!-- Projects Section -->
    <main class="container">
        <h2>Professional Projects</h2>
        <div class="row">
            <ul>
                <li>"Tech Elevator" - Vending Machine Application</li>
                <li>"Tech Elevator" - TEnmo Application</li>
                <li>"Tech Elevator" - Coffee Shop Locator Web Application</li>
                <li>"Spring Boot Course" - Water Quality Sensor Application</li>
            </ul>
        </div>
        <h2>Personal Projects</h2>
        <div class="row">
            <ul>
                <li>"Jolt" Coffee Shop Locator Web Application</li>
                <li>"Best Buds" Dispensary Locator Web Application</li>
                <li>Inventory Management Application</li>
                <li>30+ Codecademy Mini Projects</li>
            </ul>
        </div>

        <div>
            <JoltCard />
            <BestBudsCard />
        </div>

    </main>
</template>

<script>
import JoltCard from './cards/JoltCard.vue';
import BestBudsCard from './cards/BestBudsCard.vue';

export default {
    name: "Projects",
    components: {
        JoltCard,
        BestBudsCard
    }
}
</script>

<style scoped>
</style>