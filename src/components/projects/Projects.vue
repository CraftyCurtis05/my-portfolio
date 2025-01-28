<template>
    <!-- Projects Component -->
    <main class="col-12">
        
        <!-- Description Container -->
        <article class="d-flex flex-row justify-content-center" id="desc-container">
            <section class="p-6 mx-auto" id="desc">
                <h2>Educational Projects</h2>
                <ul>
                    <li>"Tech Elevator" - Vending Machine Application</li>
                    <li>"Tech Elevator" - TEnmo Application</li>
                    <li>
                        <b><u><a :href="githubTECoffeeLocatorLink" target="_blank" id="title">"Tech Elevator" - Coffee Shop Locator Web Application</a></u></b>
                    </li>
                    <li>
                        <b><u><a :href="githubWaterSensorsLink" target="_blank" id="title">"Spring Boot Course" - Water Quality Sensor Application</a></u></b>
                    </li>
                    <li>
                        <b><u><a :href="githubMiniProjectsLink" target="_blank" id="title">"Codecademy" - 25+ Mini Projects</a></u></b>
                    </li>
                </ul>
            </section>

            <section class="p-2 mx-auto" id="desc">
                <h2>Personal Projects</h2>
                <ul>
                    <!-- Add hover listeners to the specific list items -->
                    <li @click="showJoltCard = true" id="title">
                        <b><u>"Jolt" Coffee Shop Locator Web Application</u></b>
                    </li>
                    <li @click="showBestBudsCard = true" id="title">
                        <b><u>"Best Buds" Dispensary Locator Web Application</u></b>
                    </li>
                    <li @click="showInventoryManagementCard = true" id="title">
                        <b><u>Inventory Management Application</u></b><em> (Currently Under Design)</em>
                    </li>
                </ul>
            </section>
        </article>

        <!-- Project Cards Container -->
        <article class="d-flex flex-row" id="proj-container">
            <!-- Conditionally render cards with close button -->
            <component v-show="showJoltCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showJoltCard = false"></button>
                <JoltCard />
            </component>
            <component v-show="showBestBudsCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showBestBudsCard = false"></button>   
                <BestBudsCard />
            </component>
            <component v-show="showInventoryManagementCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showInventoryManagementCard = false"></button>
                <InventoryManagementCard />
            </component>
        </article>

    </main>
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
main {
  background-color: #dadae2;
  margin-bottom: 4vw;
}

#desc-container {
  padding-top: 2.5rem;
}

#title,
a {
    color: black;
    transition: transform 0.3s ease;
}

a {
    display: inline-block;
}

#title:hover,
a:hover {
    cursor: pointer;
    transform: scale(1.05);
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10; /* Ensure the close button stays on top of card content */
}
</style>