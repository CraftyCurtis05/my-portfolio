<!-- Footer Component Display--->
<template>
  <footer class="footer p-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <!-- Logo -->
          <div class="navbar-brand">
            <router-link to="/" class="nav-item nav-link">
              <img id="logo" src="@/assets/logo/logo_blk_01.png" alt="logo">
            </router-link>    
          </div>
        </div>
        <div class="col-md-3">
          <h5>About Me</h5>
          <p>
            Say something about me.
          </p>
        </div>
        <div class="col-md-3">
          <h5>Contact Me</h5>
          <ul class="list-unstyled">
            <li>Email: craftycurtis05@gmail.com</li>
            <li>Phone: +16142031537</li>
            <li>Location: Columbus, OH, USA</li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>Follow Me</h5>
          <ul class="list-inline footer-links">
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/jcurtisdeveloper/">
                <img id="footer-icons" class="img-responsive" src="@/assets/icons/linkedin_icon.png">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/CraftyCurtis05">
                <img id="footer-icons" class="img-responsive" src="@/assets/icons/github_icon.png">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.codecademy.com/profiles/CraftyCurtis05">
                <img id="footer-icons" class="img-responsive" src="@/assets/icons/codecademy_icon.png">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.hackerrank.com/profile/craftycurtis05">
                <img id="footer-icons" class="img-responsive" src="@/assets/icons/hackerrank_icon.png">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <p>&copy; 2024 Jennifer Curtis. All rights reserved.</p>
        </div>
        <div class="col-md-6 text-end">
          <ul class="list-inline footer-links">
            <li class="list-inline-item">
              <a href="#" class="text-white">
                Contact Me
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-white">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
</style>