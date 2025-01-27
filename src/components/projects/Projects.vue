<template>
    <!-- Projects Section -->
    <main class="col-12">
        <article class="d-flex flex-row justify-content-center" id="desc-container">
            <section class="p-6 mx-auto" id="desc">
                <h2>Professional Projects</h2>
                <ul>
                    <li>"Tech Elevator" - Vending Machine Application</li>
                    <li>"Tech Elevator" - TEnmo Application</li>
                    <li>"Tech Elevator" - Coffee Shop Locator Web Application</li>
                    <li>"Spring Boot Course" - Water Quality Sensor Application</li>
                </ul>
            </section>
            <section class="p-2 mx-auto" id="desc">
                <h2>Personal Projects</h2>
                <ul>
                    <li>"Jolt" Coffee Shop Locator Web Application</li>
                    <li>"Best Buds" Dispensary Locator Web Application</li>
                    <li>Inventory Management Application <em>(Currently Under Development)</em></li>
                    <li>30+ Codecademy Mini Projects</li>
                </ul>
            </section>
        </article>

        <article class="d-flex flex-row" id="proj-container">
            <component class="p-2 mx-auto">
                <JoltCard />
            </component>
            <component class="p-2 mx-auto">    
                <BestBudsCard />
            </component>
        </article>

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
main {
    background-color: #dadae2;
    margin-bottom: 4vw;
}

#desc-container {
    border-bottom: 1px grey solid;
    padding-top: 2vw;
}

#proj-container {
    margin-top: 1vw;
}
</style>