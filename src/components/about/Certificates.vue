<!-- Certificates Component -->
<template>
    <article>

    <!-- Resume Button -->
    <section class="btn-container mt-2">
      <a
        class="btn"
        href="src/assets/about/jennifer_curtis_resume.pdf"
        target="_blank"
        title="Click to View My Resume"
      >
        My Resume
      </a>
    </section>  

        <!-- Certificates Button with Modal Trigger -->
        <section class="btn-container mt-1">
            <button
                class="btn mt-2 lead"
                title="Click to View My Certificates"
                @click="openCarouselModalCertificate"
            >
                My Certificates
            </button>
        </section>

        <!-- Modal for Full-Screen Carousel -->
        <aside class="modal fade" id="carouselModalCertificate" tabindex="-1" aria-labelledby="carouselModalCertificateLabel" aria-hidden="true">
            <article class="modal-dialog modal-lg m-auto">
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
        openCarouselModalCertificate(certificate) {
            if (certificate) {
                this.currentTitle = certificate.title; // Set the title dynamically when a certificate is clicked
            }
            // Set the initial title based on the first slide if no title is set yet
            if (!this.currentTitle && this.screenshots.length > 0) {
                this.currentTitle = this.screenshots[0].title;
            }
            const modal = new bootstrap.Modal(document.getElementById('carouselModalCertificate'));
            modal.show();
        },
        updateCurrentSlide(event) {
            const currentSlideIndex = event.to;
            this.currentTitle = this.screenshots[currentSlideIndex].title;
        },
          // Reset modal and carousel when modal is closed
        resetModal() {
            // Reset the title to the first slide
            this.currentTitle = this.screenshots[0].title;

            // Reset the carousel to the first slide using Bootstrap's carousel API
            const carouselElement = document.getElementById('carouselSlidesOnlyCertificateModal');
            const carousel = new bootstrap.Carousel(carouselElement);
            carousel.to(0); // Navigate to the first slide (index 0)
    }
    },
    mounted() {
        const carouselElement = document.getElementById('carouselSlidesOnlyCertificateModal');
        carouselElement.addEventListener('slide.bs.carousel', this.updateCurrentSlide);
      
        // Add event listener for modal close
        const modalElement = document.getElementById('carouselModalCertificate');
        modalElement.addEventListener('hidden.bs.modal', this.resetModal);
    },
    beforeDestroy() {
        const carouselElement = document.getElementById('carouselSlidesOnlyCertificateModal');
        carouselElement.removeEventListener('slide.bs.carousel', this.updateCurrentSlide);

        const modalElement = document.getElementById('carouselModalCertificate');
        modalElement.removeEventListener('hidden.bs.modal', this.resetModal);
    }
};
</script>

<style scoped>
.btn {
  width: 25rem;
  color: #7c7c8a;
  background-color: #f8f8fa;
  border: 1px solid #7c7c8a;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1);
}

.btn:hover {
  font-size: 1.05rem;
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
    height: .2rem;
}

.carousel-control-prev,
.carousel-control-next {
    width: 5%;
    height: 90vh;
    top: -.2vh;
    transform: translateY(-15px); /* Adds 3D effect */
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 3000;
    object-fit: contain;
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
</style>