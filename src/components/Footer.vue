<!-- Footer Component -->
<template>
  <footer>
      <div class="row">

        <!-- Logo -->
        <section class="col-3 logo">
          <router-link to="/">
            <img
              src="@/assets/logo/light_theme/logo_blk_01.png"
              alt="Jannifer Curtis Logo"
              title="Go to My Home Page"
            >
          </router-link>
        </section>

        <!-- About Me -->
        <section class="col-3 about">
          <h5>
            <router-link
              to="/about"
              class="link"
              title="Go to My About Me Page"
            >About Me</router-link>
          </h5>
          <p>
            Code enthusiast, creative problem-solver, and your next favorite developer.
          </p>
        </section>

        <!-- Contact Me -->
        <section class="col-3 contact">
          <h5><router-link to="/contact" class="link" title="Click Here to Contact Me">Contact Me</router-link></h5>
          <ul class="list-unstyled">
            <li title="My Email">Email: craftycurtis05@gmail.com</li>
            <li title="My Phone">Phone: +16142031537</li>
            <li title="My Location">Location: Columbus, OH, USA</li>
          </ul>
        </section>

        <!-- Follow Me -->
        <section class="col-3">
          <h5>Follow Me</h5>
          <ul class="list-inline d-flex flex-row">
            <li class="icons list-inline-item">
              <a href="https://www.linkedin.com/in/jcurtisdeveloper/" target="_blank" title="Visit My LinkedIn Profile">
                <img class="icon" src="@/assets/icons/light_theme/linkedin_icon_blk.png" alt="LinkedIn Icon">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/CraftyCurtis05" target="_blank" title="Visit My GitHub Profile">
                <img class="icon" src="@/assets/icons/light_theme/github_icon_blk.png" alt="GitHub Icon">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.codecademy.com/profiles/CraftyCurtis05" target="_blank" title="Visit My Codecademy Profile">
                <img class="icon" src="@/assets/icons/light_theme/codecademy_icon_blk.png" alt="Codecademy Icon">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.hackerrank.com/profile/craftycurtis05" target="_blank" title="Visit My HackerRank Profile">
                <img class="icon" src="@/assets/icons/light_theme/hackerrank_icon_blk.png" alt="HackerRank Icon">
              </a>
            </li>
          </ul>
        </section>

      </div>

      <!-- Horizontal Line -->
      <hr>

      <!-- Copyright & Links -->
      <section class="row">
        <div class="col-md-6">
          <p>&copy; 2024 Jennifer Curtis. All rights reserved.</p>
        </div>
        <div class="col-md-6 text-end">
          <ul class="list-inline footer-links">
            <li class="list-inline-item pr-3">
              <router-link to="/contact" class="text-white" title="Click Here to Contact Me">Contact Me</router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="/sitemap" class="text-white" title="Go to Site Map">Sitemap</router-link>
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
footer {
  width: 100vw;
  height: clamp(15rem, 17vw, 20rem);
  background-color: #dadae2;
  padding: 20px;
}

.logo img {
    width: clamp(7rem, 11.9vw, 16.4rem);  /* 1024px - 2560 */
    height: auto;
}

h5 {
  font-size: clamp(1.1rem, 1.3vw, 2rem);  /* 1024px - 2560 */
}

.link {
  color: black;
  text-decoration: none;
}

.link:hover {
  text-decoration:underline;
  font-weight: 700;
}

li, p {
  font-size: clamp(.9rem, 1vw, 1.5rem);  /* 1024px - 2560 */
}

.footer-links li:hover {
  font-weight: 500;
}

.icon {
  width: clamp(2.4rem, 2.75vw, 4.1rem);  /* 1024px - 2560 */
  height: auto;
  margin-inline: clamp(.1rem, .1vw, 1rem);  /* 1024px - 2560 */
  margin-block: clamp(.1rem, .25vw, .5rem);  /* 1024px - 2560 */
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