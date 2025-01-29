<!-- Projects Component -->
<template>
    <component class="col-12">
        
        <!-- Projects Container -->
        <article class="d-flex flex-row justify-content-center" id="desc-container">

            <!-- Educational Projects -->
            <section class="mx-auto" id="desc">
                <h2 class="display-6">Educational Projects</h2>
                <h3 class="lead"><em>Click project for more information</em></h3>
                <ul class="lead">
                    <li class="visit" @click="showTEVendingMachineCard = true" title="Click to See More Information">
                        <b>"Tech Elevator" Vending Machine Application</b>
                    </li>
                    <li class="visit" @click="showTEnmoCard = true" title="Click to See More Information">
                        <b>"Tech Elevator" - TEnmo Application</b>
                    </li>
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
                <h3 class="lead"><em>Click project for more information</em></h3>
                <ul class="lead">
                    <li class="visit" @click="showJoltCard = true" title="Click to See More Information">
                        <b>"Jolt" Coffee Shop Locator Web Application</b>
                    </li>
                    <li class="visit" @click="showBestBudsCard = true" title="Click to See More Information">
                        <b>"Best Buds" Dispensary Locator Web Application</b>
                    </li>
                    <li class="visit" @click="showInventoryManagementCard = true" title="Click to See More Information">
                        <b>Inventory Management Application</b><em> (Currently Under Design)</em>
                    </li>
                </ul>
            </section>

        </article>

        <!-- Project Cards Container -->
        <article class="d-flex flex-row" id="proj-container">

            <section v-show="showTEVendingMachineCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showTEVendingMachineCard = false"></button>
                <TEVendingMachineCard/>
            </section>

            <section v-show="showTEnmoCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showTEnmoCard = false"></button>
                <TEnmoCard/>
            </section>            

            <section v-show="showJoltCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showJoltCard = false"></button>
                <JoltCard/>
            </section>

            <section v-show="showBestBudsCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showBestBudsCard = false"></button>   
                <BestBudsCard/>
            </section>

            <section v-show="showInventoryManagementCard" class="p-2 mx-auto card">
                <button type="button" class="btn-close" @click="showInventoryManagementCard = false"></button>
                <InventoryManagementCard/>
            </section>

        </article>

    </component>
</template>

<script>
import TEVendingMachineCard from './cards/TEVendingMachineCard.vue';
import TEnmoCard from './cards/TEnmoCard.vue';
import JoltCard from './cards/JoltCard.vue';
import BestBudsCard from './cards/BestBudsCard.vue';
import InventoryManagementCard from './cards/InventoryManagementCard.vue';

export default {
    name: "Projects",
    components: {
        TEVendingMachineCard,
        TEnmoCard,
        JoltCard,
        BestBudsCard,
        InventoryManagementCard
    },
    data() {
        return {
            showTEVendingMachineCard: false, // State to show/hide TE Vending Machine Card
            showTEnmoCard: false, // State to show/hide TEnmo card
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