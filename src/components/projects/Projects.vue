<!-- Projects Component -->
<template>
    <component class="col-12">
        
        <!-- Projects Container -->
        <article class="d-flex flex-row justify-content-center" id="desc-container">

            <!-- Educational Projects -->
            <section class="mx-auto" id="desc">
                <h2 class="display-6">Educational Projects</h2>
                <ul class="lead">
                    <li>"Tech Elevator" - Vending Machine Application</li>
                    <li>"Tech Elevator" - TEnmo Application</li>
                    <li class="visit">
                        <b><a :href="githubTECoffeeLocatorLink" target="_blank" title="Visit Code on GitHub">"Tech Elevator" - Coffee Shop Locator Web Application</a></b>
                    </li>
                    <li class="visit">
                        <b><a :href="githubWaterSensorsLink" target="_blank" title="Visit Code on GitHub">"Spring Boot Course" - Water Quality Sensor Application</a></b>
                    </li>
                    <li class="visit" >
                        <b><a :href="githubMiniProjectsLink" target="_blank" title="Visit Code on GitHub">"Codecademy" - 25+ Mini Projects</a></b>
                    </li>
                </ul>
            </section>

            <!-- Personal Projects -->
            <section class="mx-auto" id="desc">
                <h2 class="display-6">Personal Projects</h2>
                <ul class="lead">
                    <li class="visit" @click="showJoltCard = true" id="title">
                        <b>"Jolt" Coffee Shop Locator Web Application</b>
                    </li>
                    <li class="visit" @click="showBestBudsCard = true" id="title">
                        <b>"Best Buds" Dispensary Locator Web Application</b>
                    </li>
                    <li class="visit" @click="showInventoryManagementCard = true" id="title">
                        <b>Inventory Management Application</b><em> (Currently Under Design)</em>
                    </li>
                </ul>
            </section>

        </article>

        <!-- Project Cards Container -->
        <article class="d-flex flex-row" id="proj-container">

            <section v-show="showJoltCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showJoltCard = false"></button>
                <JoltCard />
            </section>

            <section v-show="showBestBudsCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showBestBudsCard = false"></button>   
                <BestBudsCard />
            </section>

            <section v-show="showInventoryManagementCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showInventoryManagementCard = false"></button>
                <InventoryManagementCard />
            </section>

        </article>

    </component>
</template>

<script>
import JoltCard from './cards/JoltCard.vue';
import BestBudsCard from './cards/BestBudsCard.vue';
import InventoryManagementCard from './cards/InventoryManagementCard.vue';

export default {
    name: "Projects",
    components: {
        JoltCard,
        BestBudsCard,
        InventoryManagementCard
    },
    data() {
        return {
            githubTECoffeeLocatorLink: "https://github.com/CraftyCurtis05/te-capstone-coffee-shop-locator",
            githubWaterSensorsLink: "https://github.com/CraftyCurtis05/water-quality-application",
            githubMiniProjectsLink: "https://github.com/CraftyCurtis05/mini-projects",
            showJoltCard: false, // State to show/hide Jolt card
            showBestBudsCard: false, // State to show/hide Best Buds card
            showInventoryManagementCard: false // State to show/hide Inventory Management card
        };
    }
}
</script>

<style scoped>
li a {
    color: black;
    text-decoration: none;
}

.visit {
    transition: transform 0.2s ease;
    cursor: pointer;
}

.visit:hover {
    transform: scale(1.03);
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10; /* Ensure the close button stays on top of card content */
}
</style>