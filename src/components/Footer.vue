<!-- Footer Component -->
<template>
  <footer>
      <div class="row">

        <!-- Logo -->
        <section class="col-3 logo column">
          <router-link to="/">
            <img
              src="@/assets/logo/light_theme/logo_blk_01.png"
              alt="Jannifer Curtis Logo"
              title="Go to My Home Page"
            >
          </router-link>
        </section>

        <!-- About Me -->
        <section class="col-3 about column lead">
          <h5>
            <router-link
              to="/about"
              class="link"
              title="Go to My About Me Page"
            >About Me</router-link>
          </h5>
          <p>
            Code enthusiast, creative <br>
            problem-solver and your <br>
            next favorite developer!
          </p>
        </section>

        <!-- Contact Me -->
        <section class="col-3 contact column lead">
          <h5>
            <router-link to="/contact"
              class="link"
              title="Click Here to Contact Me"
            >Contact Me</router-link>
          </h5>
          <ul class="list-unstyled">
            <li title="My Email">
              <span class="text-muted">email: </span>
              craftycurtis05@gmail.com
            </li>
            <li title="My Phone">
              <span class="text-muted">phone: </span>
              +16142031537
            </li>
            <li title="My Location">
              <span class="text-muted">location: </span>
              Columbus, OH, USA
            </li>
          </ul>
        </section>

        <!-- Follow Me -->
        <section class="col-3 column">
          <h5>Follow Me</h5>
          <ul class="list-inline d-flex flex-row">
            <li class="icons list-inline-item">
              <a
                href="https://www.linkedin.com/in/jcurtisdeveloper/"
                target="_blank"
                title="Visit My LinkedIn Profile"
              >
                <img
                  class="icon"
                  src="@/assets/icons/light_theme/linkedin_icon_blk.png"
                  alt="LinkedIn Icon"
                >
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://github.com/CraftyCurtis05"
                target="_blank"
                title="Visit My GitHub Profile"
              >
                <img
                  class="icon"
                  src="@/assets/icons/light_theme/github_icon_blk.png"
                  alt="GitHub Icon"
                >
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://www.codecademy.com/profiles/CraftyCurtis05"
                target="_blank"
                title="Visit My Codecademy Profile"
              >
                <img
                  class="icon"
                  src="@/assets/icons/light_theme/codecademy_icon_blk.png"
                  alt="Codecademy Icon"
                >
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://www.hackerrank.com/profile/craftycurtis05"
                target="_blank"
                title="Visit My HackerRank Profile"
              >
                <img
                  class="icon"
                  src="@/assets/icons/light_theme/hackerrank_icon_blk.png"
                  alt="HackerRank Icon"
                >
              </a>
            </li>
          </ul>
        </section>

      </div>

      <!-- Horizontal Line -->
      <hr>

      <!-- Copyright & Links -->
      <section class="row lead">
        <div class="col-6">
          <p class="copyright">&copy; 2024 Jennifer Curtis. All rights reserved.</p>
        </div>
        <div class="col-6 text-end">
          <ul class="list-inline footer-links">
            <li class="list-inline-item pr-3">
              <router-link
                to="/contact"
                class="text-white"
                title="Click Here to Contact Me"
              >Contact Me</router-link>
            </li>
            <li class="list-inline-item">
              <router-link
                to="/sitemap"
                class="text-white"
                title="Go to Site Map"
              >Sitemap</router-link>
            </li>
          </ul>
        </div>
      </section>

  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
@media (min-width: 1000px) {
  footer {
    width: 100vw;
    height: clamp(12.2rem, 14vw, 18rem);
    background-color: #dadae2;
    padding-top: 1vh;
  }

  .column {
    padding-left: clamp(1rem, 4vw, 7.5rem);
  }

  .logo img {
    width: clamp(9rem, 10.5vw, 15rem);
    height: auto;
    margin-left: 1.5vw;
  }

  h5 {
    font-size: clamp(1.1rem, 1.3vw, 2rem);
    font-weight: 400;
  }

  .link {
    color: black;
    text-decoration: none;
  }

  .link:hover {
    text-decoration:underline;
    font-weight: 500;
  }

  li, p {
    font-size: clamp(.95rem, 1.1vw, 1.7rem);
  }

  .icon {
    width: clamp(2.4rem, 2.75vw, 4.1rem);
    height: auto;
    margin-inline: clamp(.1rem, .1vw, 1rem);
    margin-block: clamp(.1rem, .25vw, .5rem);
  }

  .copyright {
    font-size: clamp(.9rem, 1vw, 1.5rem);
    margin-left: 2vw;
  }

  .footer-links {
    margin-right: 1.5vw;
  }

  .footer-links li {
    font-size: clamp(1rem, 1.1vw, 1.6rem);
    font-weight: 300;
  }

  .footer-links li:hover {
    font-weight: 500;
  }

  /* Extra Small (Mobile) */
  @media (max-width: 480px) {
    /* Styles for phones in portrait mode */
  }
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