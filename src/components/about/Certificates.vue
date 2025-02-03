<!-- Certificates Component -->
<template>
    <article>
        <!-- Certificates Button with Modal Trigger -->
        <section class="btn-container mt-1">
            <a
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#carouselModalCertificate"
                title="Click to View My Certificates"
                @click="openModal(null)"
            >
                My Certificates
            </a>
        </section>

        <!-- Modal for Full-Screen Carousel -->
        <aside class="modal fade" id="carouselModalCertificate" tabindex="-1" aria-labelledby="carouselModalCertificateLabel" aria-hidden="true">
            <article class="modal-dialog modal-fullscreen m-auto">
            <div class="modal-content">

                <!-- Modal Header -->
                <section class="modal-header">
                <h4 class="modal-title lead" id="carouselModalCertificateLabel">
                    <b class="lead">{{ currentTitle }}</b>
                </h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>

                <!-- Modal Carousel Body -->
                <section class="modal-body">
                <div id="carouselSlidesOnlyCertificateModal" class="carousel slide" data-bs-ride="carousel">

                    <div class="carousel-indicators position-absolute m-auto">
                    <button
                        v-for="(screenshot, index) in screenshots"
                        :key="screenshot.id"
                        type="button"
                        data-bs-target="#carouselSlidesOnlyCertificateModal"
                        :data-bs-slide-to="index"
                        :class="{ active: index === 0 }"
                        aria-label="Slide {{ index + 1 }}"
                    ></button>
                    </div>

                    <div class="carousel-inner position-relative">
                    <div 
                        v-for="(screenshot, index) in screenshots"
                        :key="screenshot.id"
                        :class="['carousel-item', { active: index === 0 }]"
                    >
                        <img 
                        class="d-block w-100" 
                        :src="(`src/assets/about/certificates/${screenshot.image}`)" 
                        :alt="screenshot.title"
                        >
                    </div>
                    </div>

                    <!-- Modal Carousel Controls -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlidesOnlyCertificateModal" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselSlidesOnlyCertificateModal" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>
                </section>
            </div>
            </article>
        </aside>
    </article>
</template>

<script>
export default {
    name: "Certificates",
    data() {
        return {
            currentTitle: '',
            screenshots: [
                {
                    id: 1,
                    image: "01_Tech_Elevator_Certificate.png",
                    title: "Tech Elevator: Certificate of Completion"
                },
                {
                    id: 2,
                    image: "02_Learn_HTML.png",
                    title: "Learn HTML Course Certificate"
                },
                {
                    id: 3,
                    image: "03_HTML_Forms.png",
                    title: "Learn HTML: Forms Course Certificate"
                },
                {
                    id: 4,
                    image: "04_HTML_Fundamentals.png",
                    title: "Learn HTML: Fundamentals Course Certificate"
                },
                {
                    id: 5,
                    image: "05_HTML_Semantics.png",
                    title: "Learn HTML: Semantics Course Certificate"
                },
                {
                    id: 6,
                    image: "06_HTML_Tables.png",
                    title: "Learn HTML: Tables Course Certificate"
                },
                {
                    id: 7,
                    image: "07_Learn_CSS.png",
                    title: "Learn CSS Certificate"
                },
                {
                    id: 8,
                    image: "08_Learn_Intermediate_CSS.png",
                    title: "Learn Intermediate CSS Certificate"
                },
                {
                    id: 9,
                    image: "09_CSS_Accessibility.png",
                    title: "Learn CSS: Accessibility Course Certificate"
                },
                {
                    id: 10,
                    image: "10_CSS_Box_Model_And_Loayout.png",
                    title: "Learn CSS: Box Model and Layout Course Certificate"
                },
                {
                    id: 11,
                    image: "11_CSS_Browser_Compatibility.png",
                    title: "Learn CSS: Browser Compatibility Course Certificate"
                },
                {
                    id: 12,
                    image: "12_CSS_Colors",
                    title: "Learn CSS: Colors Course Certificate"
                },
                {
                    id: 13,
                    image: "13_CSS_Flexbox_And_Grid.png",
                    title: "Learn CSS: Flexbox and Grid Course Certificate"
                },
                {
                    id: 14,
                    image: "14_CSS_Introduction.png",
                    title: "Learn CSS: Introduction Course Certificate"
                },
                {
                    id: 15,
                    image: "15_CSS_Responsive_Design.png",
                    title: "Learn CSS: Responsive Design Course Certificate"
                },
                {
                    id: 16,
                    image: "16_CSS_Transitions_And_Animations.png",
                    title: "Learn CSS: Transitions and Animations Course Certificate"
                },
                {
                    id: 17,
                    image: "17_CSS_Typography_And_Fonts.png",
                    title: "Learn CSS: Typography and Fonts Course Certificate"
                },
                {
                    id: 18,
                    image: "18_CSS_Variables_And_Functions.png",
                    title: "Learn CSS: Variables and Functions Course Certificate"
                },
                {
                    id: 19,
                    image: "19_Learn_Color_Design.png",
                    title: "Learn Color Design Course Certificate"
                },
                {
                    id: 20,
                    image: "20_Learn_JavaScript.png",
                    title: "Learn JavaScript Certificate"
                },
                {
                    id: 21,
                    image: "21_Learn_Intermediate_JavaScript.png",
                    title: "Learn Intermediate JavaScript Certificate"
                },
                {
                    id: 22,
                    image: "22_Building_Interactive_JavaScript_Websites.png",
                    title: "Building Interactive JavaScript Websites Certificate"
                },
                {
                    id: 23,
                    image: "23_Make_Website_With_NameCheap.png",
                    title: "How to Make a Website with NameCheap Certificate"
                },
                {
                    id: 24,
                    image: "24_Learn_Vuejs.png",
                    title: "Learn Vue.js Certificate"
                },
                {
                    id: 25,
                    image: "25_Learn_BootStrap.png",
                    title: "Learn BootStrap Certificate"
                },
                {
                    id: 26,
                    image: "26_Learn_SQL.png",
                    title: "Learn SQL Certificate"
                },
                {
                    id: 27,
                    image: "27_Learn_Spring.png",
                    title: "Learn Spring Certificate"
                },
                {
                    id: 28,
                    image: "28_Spring_Fundamentals_And_Controllers.png",
                    title: "Learn Spring: Fundamentals and Controllers Course Certificate"
                },
                {
                    id: 29,
                    image: "29_Spring_Building:An_App.png",
                    title: "Learn Spring: Building an App Course Certificate"
                },
                {
                    id: 30,
                    image: "30_Create_REST_APIs_With_Spring_And_Java.png",
                    title: "Create REST APIs with Spring and Java Skill Path Certificate"
                },
                {
                    id: 31,
                    image: "31_Fundamentals_Of_Cybersecurity.png",
                    title: "Fundamentals Of Cybersecurity Skill Path Certificate"
                },
                {
                    id: 32,
                    image: "32_Comptia_Security_Fundamental_Security_Concepts.png",
                    title: "CompTIA Security+: Fundamental Security Concepts Course Certificate"
                },
                {
                    id: 33,
                    image: "33_Comptia_Security_Practical_Cryptography.png",
                    title: "CompTIA Security+: Practical Cryptography Course Certificate"
                },
                {
                    id: 34,
                    image: "34_Comptia_Security_Risk_Management.png",
                    title: "CompTIA Security+: Risk Management Course Certificate"
                },
                {
                    id: 35,
                    image: "35_Comptia_Security_Security_Goals_And_Controls.png",
                    title: "CompTIA Security+: Security Goals and Controls Course Certificate"
                },
                {
                    id: 36,
                    image: "36_Comptia_Security_Survey_Of_Malicious_Activities.png",
                    title: "CompTIA Security+: Survey Of Malicious Activities Course Certificate"
                },
                {
                    id: 37,
                    image: "37_Comptia_Security_Threat_Actors_And_Vectors.png",
                    title: "CompTIA Security+: Threat Actors and Vectors Course Certificate"
                }
            ]
        };
    },
    methods: {
        // Method to open modal and set current title based on the certificate clicked
        openModal(certificate) {
            if (certificate) {
                this.currentTitle = certificate.title; // Set the title dynamically when a certificate is clicked
            }
        }
    }
};
</script>
