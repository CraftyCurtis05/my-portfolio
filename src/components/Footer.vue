<!-- Footer Component -->
<template>
  <footer class="footer p-5">
    <article class="container">
      <div class="row">

        <!-- Logo -->
        <section class="col-md-3 navbar-brand">
          <router-link to="/" class="nav-item nav-link">
            <img id="logo" src="@/assets/logo/logo_blk_01.png" alt="Jannifer Curtis Logo" title="Go Home">
          </router-link>
        </section>

        <!-- About Me -->
        <section class="col-md-3">
          <h5><router-link to="/about" class="link" title="About Me">About Me</router-link></h5>
          <p>
            Code enthusiast, creative problem-solver, and your next favorite developer.
          </p>
        </section>

        <!-- Contact Me -->
        <section class="col-md-3">
          <h5><router-link to="/contact" class="link" title="Contact Me">Contact Me</router-link></h5>
          <ul class="list-unstyled">
            <li title="My Email">Email: craftycurtis05@gmail.com</li>
            <li title="My Phone">Phone: +16142031537</li>
            <li title="My Location">Location: Columbus, OH, USA</li>
          </ul>
        </section>

        <!-- Follow Me -->
        <section class="col-md-3">
          <h5>Follow Me</h5>
          <ul class="list-inline footer-links">
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/jcurtisdeveloper/" target="_blank" title="My LinkedIn Profile">
                <img id="footer-icons" class="img-responsive" src="@/assets/icons/linkedin_icon.png" alt="LinkedIn Logo">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/CraftyCurtis05" target="_blank" title="My GitHub Profile">
                <img id="footer-icons" class="img-responsive" src="@/assets/icons/github_icon.png" title="My GitHub Profile">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.codecademy.com/profiles/CraftyCurtis05" target="_blank" title="My Codecademy Profile">
                <img id="footer-icons" class="img-responsive" src="@/assets/icons/codecademy_icon.png" alt="Codecademy Logo">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.hackerrank.com/profile/craftycurtis05" target="_blank" title="My HackerRank Profile">
                <img id="footer-icons" class="img-responsive" src="@/assets/icons/hackerrank_icon.png" title="My HackerRank Profile">
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
              <router-link to="/contact" class="text-white" title="Contact Me">Contact Me</router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="/sitemap" class="text-white" title="Sitemap">Sitemap</router-link>
            </li>
          </ul>
        </div>
      </section>

    </article>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  background-color: #dadae2;
  height: 17rem;
}

.link {
  color: black;
  text-decoration: none;
}

.link:hover {
  text-decoration:underline;
  font-weight: 700;
}

.footer-links li:hover {
  font-weight: 500;
}
</style>