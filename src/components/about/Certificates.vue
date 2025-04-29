<!-- Certificates Component -->
<template>
    <article class="d-flex flex-column lead p-0 m-0">

        <!-- Resume Button -->
        <section class="btn-container">
        <a
            class="btn d-flex justify-content-center align-items-center"
            href="/about/jennifer_curtis_resume.pdf"
            target="_blank"
            title="Click to View My Resume"
        >My Resume</a>
        </section>

        <!-- Certificates Button with Modal Trigger -->
        <section class="btn-container">
            <button
                class="btn d-flex justify-content-center align-items-center"
                title="Click to View My Certificates"
                @click="openCarouselModalCertificate"
            >My Certificates</button>
        </section>

        <!-- Modal for Full-Screen Carousel -->
        <aside
            class="modal fade"
            id="carouselModalCertificate"
            tabindex="-1"
            aria-labelledby="carouselModalCertificateLabel"
        >
            <article class="modal-dialog modal-lg m-auto">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <section class="modal-header">
                        <h4 class="modal-title lead" id="carouselModalCertificateLabel">
                            <b class="title lead">{{ currentTitle }}</b>
                        </h4>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
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
                                        :src="(`/about/certificates/${screenshot.image}`)"
                                        :alt="screenshot.title"
                                    >
                                </div>
                            </div>

                            <!-- Modal Carousel Controls -->
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselSlidesOnlyCertificateModal"
                                data-bs-slide="prev"
                            >
                                <span class="carousel-control-prev-icon"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselSlidesOnlyCertificateModal"
                                data-bs-slide="next"
                            >
                                <span class="carousel-control-next-icon"></span>
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
                    image: "01_Tech_Elevator_Certificate.webp",
                    title: "Tech Elevator: Certificate of Completion"
                },
                {
                    id: 2,
                    image: "02_Learn_HTML.webp",
                    title: "Learn HTML Course Certificate"
                },
                {
                    id: 3,
                    image: "03_HTML_Forms.webp",
                    title: "Learn HTML: Forms Course Certificate"
                },
                {
                    id: 4,
                    image: "04_HTML_Fundamentals.webp",
                    title: "Learn HTML: Fundamentals Course Certificate"
                },
                {
                    id: 5,
                    image: "05_HTML_Semantics.webp",
                    title: "Learn HTML: Semantics Course Certificate"
                },
                {
                    id: 6,
                    image: "06_HTML_Tables.webp",
                    title: "Learn HTML: Tables Course Certificate"
                },
                {
                    id: 7,
                    image: "07_Learn_CSS.webp",
                    title: "Learn CSS Certificate"
                },
                {
                    id: 8,
                    image: "08_Learn_Intermediate_CSS.webp",
                    title: "Learn Intermediate CSS Certificate"
                },
                {
                    id: 9,
                    image: "09_CSS_Accessibility.webp",
                    title: "Learn CSS: Accessibility Course Certificate"
                },
                {
                    id: 10,
                    image: "10_CSS_Box_Model_And_Layout.webp",
                    title: "Learn CSS: Box Model and Layout Course Certificate"
                },
                {
                    id: 11,
                    image: "11_CSS_Browser_Compatibility.webp",
                    title: "Learn CSS: Browser Compatibility Course Certificate"
                },
                {
                    id: 12,
                    image: "12_CSS_Colors.webp",
                    title: "Learn CSS: Colors Course Certificate"
                },
                {
                    id: 13,
                    image: "13_CSS_Flexbox_And_Grid.webp",
                    title: "Learn CSS: Flexbox and Grid Course Certificate"
                },
                {
                    id: 14,
                    image: "14_CSS_Introduction.webp",
                    title: "Learn CSS: Introduction Course Certificate"
                },
                {
                    id: 15,
                    image: "15_CSS_Responsive_Design.webp",
                    title: "Learn CSS: Responsive Design Course Certificate"
                },
                {
                    id: 16,
                    image: "16_CSS_Transitions_And_Animations.webp",
                    title: "Learn CSS: Transitions and Animations Course Certificate"
                },
                {
                    id: 17,
                    image: "17_CSS_Typography_And_Fonts.webp",
                    title: "Learn CSS: Typography and Fonts Course Certificate"
                },
                {
                    id: 18,
                    image: "18_CSS_Variables_And_Functions.webp",
                    title: "Learn CSS: Variables and Functions Course Certificate"
                },
                {
                    id: 19,
                    image: "19_Learn_Color_Design.webp",
                    title: "Learn Color Design Course Certificate"
                },
                {
                    id: 20,
                    image: "20_Learn_JavaScript.webp",
                    title: "Learn JavaScript Certificate"
                },
                {
                    id: 21,
                    image: "21_Learn_Intermediate_JavaScript.webp",
                    title: "Learn Intermediate JavaScript Certificate"
                },
                {
                    id: 22,
                    image: "22_Building_Interactive_JavaScript_Websites.webp",
                    title: "Building Interactive JavaScript Websites Certificate"
                },
                {
                    id: 23,
                    image: "23_Make_Website_With_NameCheap.webp",
                    title: "How to Make a Website with NameCheap Certificate"
                },
                {
                    id: 24,
                    image: "24_Learn_Vuejs.webp",
                    title: "Learn Vue.js Certificate"
                },
                {
                    id: 25,
                    image: "25_Learn_Bootstrap.webp",
                    title: "Learn BootStrap Certificate"
                },
                {
                    id: 26,
                    image: "26_Learn_SQL.webp",
                    title: "Learn SQL Certificate"
                },
                {
                    id: 27,
                    image: "27_Learn_Spring.webp",
                    title: "Learn Spring Certificate"
                },
                {
                    id: 28,
                    image: "28_Spring_Fundamentals_And_Controllers.webp",
                    title: "Learn Spring: Fundamentals and Controllers Course Certificate"
                },
                {
                    id: 29,
                    image: "29_Spring_Building_An_App.webp",
                    title: "Learn Spring: Building an App Course Certificate"
                },
                {
                    id: 30,
                    image: "30_Create_REST_APIs_With_Spring_And_Java.webp",
                    title: "Create REST APIs with Spring and Java Skill Path Certificate"
                },
                {
                    id: 31,
                    image: "31_Fundamentals_Of_Cybersecurity.webp",
                    title: "Fundamentals Of Cybersecurity Skill Path Certificate"
                },
                {
                    id: 32,
                    image: "32_Comptia_Security_Fundamental_Security_Concepts.webp",
                    title: "CompTIA Security+: Fundamental Security Concepts Course Certificate"
                },
                {
                    id: 33,
                    image: "33_Comptia_Security_Practical_Cryptography.webp",
                    title: "CompTIA Security+: Practical Cryptography Course Certificate"
                },
                {
                    id: 34,
                    image: "34_Comptia_Security_Risk_Management.webp",
                    title: "CompTIA Security+: Risk Management Course Certificate"
                },
                {
                    id: 35,
                    image: "35_Comptia_Security_Security_Goals_And_Controls.webp",
                    title: "CompTIA Security+: Security Goals and Controls Course Certificate"
                },
                {
                    id: 36,
                    image: "36_Comptia_Security_Survey_Of_Malicious_Activities.webp",
                    title: "CompTIA Security+: Survey Of Malicious Activities Course Certificate"
                },
                {
                    id: 37,
                    image: "37_Comptia_Security_Threat_Actors_And_Vectors.webp",
                    title: "CompTIA Security+: Threat Actors and Vectors Course Certificate"
                }
            ]
        };
    },
    methods: {
        // Open modal and set current title based on the slide
        openCarouselModalCertificate() {
            // Send data for open modal to about view
            this.$emit( 'data-sent', true );
            
            this.currentTitle = this.screenshots[0].title;
            const modal = new window.bootstrap.Modal(document.getElementById('carouselModalCertificate'));
            modal.show();
        },
        // Method to update the current slide index on slide change
        updateCurrentSlide(event) {
            const currentSlideIndex = event.to;
            this.currentTitle = this.screenshots[currentSlideIndex].title;
        },
        // Reset modal and carousel when modal is closed
        resetModal() {
            // Send data for closed modal to about view
            this.$emit( 'data-sent', false );

            // Reset the title to the first slide
            this.currentTitle = this.screenshots[0].title;

            // Reset the carousel to the first slide using Bootstrap's carousel API
            const carouselElement = document.getElementById('carouselSlidesOnlyCertificateModal');
            const carousel = new bootstrap.Carousel(carouselElement);
            carousel.to(0); // Navigate to the first slide (index 0)
        }
    },
    mounted() {
        // Attach the slide event listener to the carousel after the component is mounted
        const carouselElement = document.getElementById('carouselSlidesOnlyCertificateModal');
        carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);
      
        // Add event listener for modal close
        const modalElement = document.getElementById('carouselModalCertificate');
        modalElement.addEventListener('hidden.bs.modal', this.resetModal);
    },
    beforeDestroy() {
        // Clean up the event listener before the component is destroyed
        const carouselElement = document.getElementById('carouselSlidesOnlyCertificateModal');
        carouselElement.removeEventListener('slide.bs.carousel', this.updateCurrentSlide);

        const modalElement = document.getElementById('carouselModalCertificate');
        modalElement.removeEventListener('hidden.bs.modal', this.resetModal);
    }
};
</script>

<style scoped>
@media (min-width: 1000px) {
    .btn {
        width: clamp(15rem, 20vw, 35rem);
        height: 4vh;
        font-size: clamp(1rem, 1.1vw, 1.5rem);
        color: #7c7c8a;
        background-color: rgb(248, 248, 250, 0.7);
        border: 1px solid #7c7c8a;
        border-radius: 1rem;
        margin-block: .5vh;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1);
    }

    .btn:hover {
        font-size: clamp(1.05rem, 1.2vw, 1.6rem);
        font-weight: 500;
        color: white;
        background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454);
        background-size: 500% 500%;
        border: 1px solid #cccce4;
        transform: translateY(-1px);
        box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.2);
        animation: gradient-animation 5s ease infinite;
    }

    /* Animation for button */
    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .carousel-inner {
        width: 100%;
    }

    .carousel-item img {
        width: 100%;
        max-height: 80vh;
        object-fit: contain;
    }

    .modal-dialog {
        max-width: 90vw;
        height: auto;
    }
    
    .title {
        font-size: clamp(1.2rem, 1.3vw, 2rem);
    }

    .modal-body {
        height: 90vh;
        background-color: #dadae2;
    }

    .carousel-indicators,
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        filter: invert(50%);
    }

    .carousel-indicators {
        top: 80vh;
    }

    .carousel-indicators button {
        height: .3vh;
    }

    .carousel-control-prev,
    .carousel-control-next {
        width: 5%;
        height: 90vh;
        top: -.2vh;
        transform: translateY(-15px); /* Adds 3D effect */
        background-color: rgba(0, 0, 0, 0.1);
        object-fit: contain;
        z-index: 3000;
    }

    .carousel-control-prev {
        left: -1rem;
    }

    .carousel-control-next {
        right: -1rem;
    }

    .carousel-control-prev:hover,
    .carousel-control-next:hover {
        background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454);
        background-size: 250% 250%;
        border: 1px solid #cccce4;
        border-radius: .2rem;
        opacity: .7;
        box-shadow: .4rem .5rem .5rem rgba(0, 0, 0, 0.15);
        animation: gradient-animation 3s ease infinite;
    }
}

/* Extra Small (Mobile) */
@media (max-width: 480px) {
  /* Styles for phones in portrait mode */
}

/* Small (Mobile) */
@media (max-width: 600px) {
  /* Styles for phones in landscape mode */
}

/* Medium (Tablet) */
@media (max-width: 768px) {
  /* Styles for tablets in portrait mode */
}

/* Large (Tablet, Small Laptops) */
@media (max-width: 1024px) {
  /* Styles for small laptops and tablets in landscape mode */
}

/* Extra Large (Laptops, Desktops) */
@media (min-width: 1025px) {
  /* Styles for laptops and desktop screens */
}

/* Ultra Large (Wider Desktop Screens) */
@media (min-width: 1440px) {
  /* Styles for large desktop displays */
}
</style>