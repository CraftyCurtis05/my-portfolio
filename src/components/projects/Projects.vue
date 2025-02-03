<!-- Projects Component -->
<template>
        
    <article class="d-flex flex-row justify-content-center m-3">

        <!-- Educational Projects -->
        <section class="list px-5 mx-auto">
            <h2 class="display-6 ml-4">Educational Projects</h2>
            <h3 class="lead ml-4"><em>Click project for more information</em></h3>
            <ul class="lead">
                <li 
                    class="visit mt-4" 
                    @click="showModal('TEVendingMachineCard', 'Educational')" 
                    title="Click to See More Information"
                ><b>"Tech Elevator" Vending Machine Application</b>
                </li>
                <div class="progress-bar"><ProgressBar :progress="progressTEVendingMachine"/></div>
                <hr>
                <li 
                    class="visit mt-4" 
                    @click="showModal('TEnmoCard', 'Educational')" 
                    title="Click to See More Information"
                ><b>"Tech Elevator" TEnmo Application</b>
                </li>
                <div class="progress-bar"><ProgressBar :progress="progressTEnmo"/></div>
                <hr>
                <li 
                    class="visit mt-4" 
                    @click="showModal('TECoffeeCard', 'Educational')" 
                    title="Click to See More Information"
                ><b>"Tech Elevator" Coffee Shop Locator Web Application</b>
                </li>
                <div class="progress-bar"><ProgressBar :progress="progressTECoffee"/></div>
                <hr>
                <li 
                    class="visit mt-4" 
                    @click="showModal('SBSensorCard', 'Educational')" 
                    title="Click to See More Information"
                ><b>"Spring Boot Course" Water Quality Sensor Application</b>
                </li>
                <div class="progress-bar"><ProgressBar :progress="progressSBSensor"/></div>
                <hr>
                <li 
                    class="visit mt-4" 
                    @click="showModal('CodecademyCard', 'Educational')" 
                    title="Click to See More Information"
                ><b>"Codecademy" 25+ Mini Projects</b>
                </li>
                <div class="progress-bar"><ProgressBar :progress="progressCodecademy"/></div>
                <hr>
            </ul>
        </section>

        <!-- Personal Projects -->
        <section class="list px-5 mx-auto">
            <h2 class="display-6 ml-4">Personal Projects</h2>
            <h3 class="lead ml-4"><em>Click project for more information</em></h3>
            <ul class="lead">
                <li 
                    class="visit mt-4" 
                    @click="showModal('JoltCard', 'Personal')" 
                    title="Click to See More Information"
                ><b>"Jolt" Coffee Shop Locator Web Application</b>
                </li>
                <div class="progress-bar"><ProgressBar :progress="progressJolt"/></div>
                <hr>
                <li 
                    class="visit mt-4" 
                    @click="showModal('BestBudsCard', 'Personal')" 
                    title="Click to See More Information"
                ><b>"Best Buds" Dispensary Locator Web Application</b><em> (Under Dev)</em>
                </li>
                <div class="progress-bar"><ProgressBar :progress="progressBestBuds"/></div>
                <hr>
                <li 
                    class="visit mt-4" 
                    @click="showModal('InventoryManagementCard', 'Personal')" 
                    title="Click to See More Information"
                ><b>Inventory Management Application</b><em> (Under Design)</em>
                </li>
                <div class="progress-bar"><ProgressBar :progress="progressInventoryManagement"/></div>
                <hr>
                <li>
                    <b>This area is reserved for future projects. Stay tuned!</b>
                </li
                    class="visit mt-4"
                >
                <div class="progress-bar"><ProgressBar :progress="progressFutureProject"/></div>
                <hr>
            </ul>
        </section>
    </article>

    <!-- Modal for Project Cards -->
    <article v-if="showCardModal" class="modal fade show" tabindex="-1" style="display: block;" aria-labelledby="exampleModalLabel" aria-hidden="true" 
        :class="modalPositionClass">
        <section class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <button type="button" class="btn-close" @click="closeModal()"></button>
                <div v-if="currentCard === 'TEVendingMachineCard'"><TEVendingMachineCard /></div>
                <div v-if="currentCard === 'TEnmoCard'"><TEnmoCard /></div>
                <div v-if="currentCard === 'TECoffeeCard'"><TECoffeeCard /></div>
                <div v-if="currentCard === 'SBSensorCard'"><SBSensorCard /></div>
                <div v-if="currentCard === 'CodecademyCard'"><CodecademyCard /></div>
                <div v-if="currentCard === 'JoltCard'"><JoltCard /></div>
                <div v-if="currentCard === 'BestBudsCard'"><BestBudsCard /></div>
                <div v-if="currentCard === 'InventoryManagementCard'"><InventoryManagementCard /></div>
            </div>
        </section>
    </article>

</template>

<script>
import TEVendingMachineCard from './cards/TEVendingMachineCard.vue';
import TEnmoCard from './cards/TEnmoCard.vue';
import TECoffeeCard from './cards/TECoffeeCard.vue';
import SBSensorCard from './cards/SBSensorCard.vue';
import CodecademyCard from './cards/CodecademyCard.vue';
import JoltCard from './cards/JoltCard.vue';
import BestBudsCard from './cards/BestBudsCard.vue';
import InventoryManagementCard from './cards/InventoryManagementCard.vue';
import ProgressBar from './ProgressBar.vue';

export default {
    name: "Projects",
    components: {
        TEVendingMachineCard,
        TEnmoCard,
        TECoffeeCard,
        SBSensorCard,
        CodecademyCard,
        JoltCard,
        BestBudsCard,
        InventoryManagementCard,
        ProgressBar
    },
    data() {
        return {
            // Modal state
            showCardModal: false,
            currentCard: '',
            currentSection: '', // Track which section the modal is from (Educational or Personal)
            modalPositionClass: '', // Dynamically set modal position class

            // Progress Bar data for each project
            progressTEVendingMachine: 100,
            progressTEnmo: 100,
            progressTECoffee: 100,
            progressSBSensor: 100,
            progressCodecademy: 100,
            progressJolt: 100,
            progressBestBuds: 50,
            progressInventoryManagement: 10,
            progressFutureProject: 0
        };
    },
    methods: {
        showModal(cardName, section) {
            this.currentCard = cardName;
            this.currentSection = section;
            this.modalPositionClass = section === 'Educational' ? 'modal-educational' : 'modal-personal'; // Set the class based on section
            this.showCardModal = true;
        },
        closeModal() {
            this.showCardModal = false;
            this.currentCard = '';
            this.modalPositionClass = ''; // Reset position class
        }
    }
}
</script>

<style scoped>
.list {
    width: 40%;
}

ul {
    list-style: none;
}

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

.modal {
    overflow: hidden;
}

.modal-dialog {
    max-width: 90%;
}

/* Position Educational Modals */
.modal-educational .modal-dialog {
    left: 45%;
    right: auto;
    top: 7%;
}

/* Position Personal Modals */
.modal-personal .modal-dialog {
    left: auto;
    right: 0%;
    top: 9%;
}

.modal-content {
    width: 100%;
    max-width: 50%;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10; /* Ensure the close button stays on top of card content */
}
</style>