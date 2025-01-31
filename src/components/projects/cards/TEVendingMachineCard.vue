<!-- TE Vending Machine Card Component -->
<template>
    <aside class="card mb-3" style="max-width: 45vw;">
      <article class="row g-0">
  
        <!-- Screenshot Carousel -->
        <section class="carousel-container col-md-4">
            <div id="carouselSlidesOnly" class="carousel-main slide mt-4" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@/assets/projects/default_image.png" class="d-block w-100" alt="No Image Available">
                    </div>
                </div>
            </div>
            <!-- <button @click="openCarouselModalTEVendingMachine" class="btn mt-2 lead" title="View Carousel in Full Screen">View in Full Screen</button> -->
        </section>
    
        <!-- Card Body -->
        <section class="col-md-8">
          <div class="card-body">
            <h5 class="card-title ml-5">"TE" Vending Machine Application</h5>
            <p class="card-text lead"><b>Tech Stack:</b> Java, Object-Oriented Programming, Command-Line Interface</p>
            <p class="card-text lead">
                This backend project simulates a vending machine’s functionality through a simple command-line interface. Users can select products, insert virtual currency, and receive change, while the application manages product inventory and transaction processing.
            </p>
            <ul class="lead">
                <li>Inventory Management</li>
                <li>Transaction Processing</li>
                <li>Error Handling</li>
                <li>Focus on Object-Oriented Design Principles</li>
                <li>Test-Driven Development</li>
            </ul>
            <p class="card-text text-muted lead"><em>A simple backend system, emphasizing core programming and software design practices.</em></p>
          </div>
        </section>
  
      </article>
    </aside>
    
    <!-- Modal -->
    <aside class="modal fade" id="carouselModalTEVendingMachine" tabindex="-1" aria-labelledby="carouselModalTEVendingMachineLabel" aria-hidden="true">
      <article class="modal-dialog modal-lg">
        <div class="modal-content">
  
          <!-- Modal Header -->
          <section class="modal-header">
            <h5 class="modal-title lead" id="carouselModalTEVendingMachine">No Image Available</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </section>
  
          <!-- Modal Carousel -->
          <section class="modal-body">
            <div id="carouselSlidesOnlyTEVendingMachine" class="carousel slide" data-bs-ride="carousel">
  
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselSlidesOnlyTEVendingMachine" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="@/assets/projects/default_image.png" class="d-block w-100" alt="No Image Available">
                </div>
              </div>
  
            </div>
          </section>
        </div>
      </article>
    </aside>
  </template>
    
  <script>
  export default {
    name: "TEVendingMachineCard",
    methods: {
        openCarouselModalTEVendingMachine() {
        // Use Bootstrap's modal functionality to show the modal
        const modal = new window.bootstrap.Modal(document.getElementById('carouselModalTEVendingMachine'));
        modal.show();
      }
    } 
  }
  </script>
    
  <style scoped>
  .carousel-container  {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dadae2;
  }
  
  .carousel-main {
    margin-top: 1vw;
    border: 2px black solid;
  }
  
  h5,
  h5 a {
    color: black;
    text-decoration: none;
  }
  
  /* Base Styling for the Button */
  .btn {
    color: #7c7c8a;
    background-color: #f8f8fa;
    border: .1vw solid #7c7c8a;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.1); /* Soft shadow */
  }
  
  .btn:hover {
    font-size: 1.03rem;
    font-weight: 500;
    color: white;
    background-image: radial-gradient(circle, #c2fdcf, #70d3fb, #bef454); /* Subtle gradient background */
    background-size: 500% 500%;
    border: .1vw solid #cccce4;
    transform: translateY(-1px); /* Adds 3D effect */
    animation: gradient-animation 5s ease infinite;
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2); /* Stronger shadow effect */
  }
  
  /* Define the animation */
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%; /* Start position */
    }
    50% {
      background-position: 100% 50%; /* End position */
    }
    100% {
      background-position: 0% 50%; /* Back to start */
    }
  }
  
  /* Create a subtle glow effect around the button */
  .btn::before {
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    border-radius: 2rem;
    transition: opacity 0.4s ease-in-out;
    z-index: -1;
  }
  
  .btn:hover::before {
    opacity: 1; /* Glow effect on hover */
  }
  
  .modal-body {
    background-color: #dadae2;
    padding: 3rem 4rem;
    margin: auto;
  }
  
  .modal-dialog {
    max-width: 80vw;
  }
  
  .carousel-indicators {
    filter: invert(100%); /* Ensure the icons are visible */
    margin: auto;
  }
  
  .carousel-indicators {
    position: absolute;
    top: 103%; /* Align vertically centered */
    transform: translateY(-50%); /* Ensure it is exactly centered vertically */
  }
  </style>