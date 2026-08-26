import {
  createRouter,
  createWebHistory
} from 'vue-router';

import HomeView from '../views/HomeView.vue';


/* ========================================
   Lazy Loaded Views
======================================== */

const AboutView =
  () =>
    import(
      '../views/AboutView.vue'
    );

const EducationView =
  () =>
    import(
      '../views/EducationView.vue'
    );

const ExperienceView =
  () =>
    import(
      '../views/ExperienceView.vue'
    );

const ProjectsView =
  () =>
    import(
      '../views/ProjectsView.vue'
    );

const ContactView =
  () =>
    import(
      '../views/ContactView.vue'
    );

const SiteMapView =
  () =>
    import(
      '../views/SiteMapView.vue'
    );

const NotFoundView =
  () =>
    import(
      '../views/NotFoundView.vue'
    );


/* ========================================
   Site Information
======================================== */

const siteUrl =
  'https://jennifercurtis.me';

const defaultTitle =
  'Jennifer Curtis | Business Systems & Technology';

const defaultDescription =
  'Portfolio of Jennifer Curtis, a business systems and technology professional with experience across business operations, IT consulting and full-stack development.';

const socialImage =
  `${siteUrl}/assets/images/seo/portfolio-preview.webp`;


/* ========================================
   Application Routes
======================================== */

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

    meta: {
      title:
        defaultTitle,

      description:
        defaultDescription
    }
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView,

    meta: {
      title:
        'About | Jennifer Curtis',

      description:
        'Learn about Jennifer Curtis, her background in business operations, technology and software development, and her approach to systems and problem-solving.'
    }
  },

  {
    path: '/education',
    name: 'education',
    component: EducationView,

    meta: {
      title:
        'Education | Jennifer Curtis',

      description:
        'Explore Jennifer Curtis\' technical education, full-stack development training, certifications and continued professional learning.'
    }
  },

  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView,

    meta: {
      title:
        'Experience | Jennifer Curtis',

      description:
        'Explore Jennifer Curtis\' experience across business operations, IT consulting, systems work, web development and process improvement.'
    }
  },

  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,

    meta: {
      title:
        'Projects | Jennifer Curtis',

      description:
        'Explore projects by Jennifer Curtis spanning full-stack development, business systems, client work, web design and practical problem-solving.'
    }
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView,

    meta: {
      title:
        'Contact | Jennifer Curtis',

      description:
        'Contact Jennifer Curtis about business systems, technology, software development and professional opportunities.'
    }
  },

  {
    path: '/sitemap',
    name: 'sitemap',
    component: SiteMapView,

    meta: {
      title:
        'Site Map | Jennifer Curtis',

      description:
        'Navigate the Jennifer Curtis business systems and technology portfolio.'
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,

    meta: {
      title:
        'Page Not Found | Jennifer Curtis',

      description:
        defaultDescription,

      noIndex: true
    }
  }
];


/* ========================================
   Router
======================================== */

const router =
  createRouter({
    history:
      createWebHistory(
        import.meta.env.BASE_URL
      ),

    routes,

    scrollBehavior() {
      return {
        top: 0
      };
    }
  });


/* ========================================
   Page Metadata
======================================== */

router.afterEach((to) => {
  const pageTitle =
    to.meta.title ||
    defaultTitle;

  const pageDescription =
    to.meta.description ||
    defaultDescription;

  const pageUrl =
    to.name === 'not-found'
      ? siteUrl
      : `${siteUrl}${to.path === '/' ? '/' : to.path}`;


  /* Page Title */
  document.title =
    pageTitle;


  /* Meta Description */
  updateMetaTag(
    'name',
    'description',
    pageDescription
  );


  /* Robots */
  updateMetaTag(
    'name',
    'robots',
    to.meta.noIndex
      ? 'noindex, nofollow'
      : 'index, follow'
  );


  /* Canonical URL */
  updateCanonicalLink(
    pageUrl
  );


  /* Open Graph */
  updateMetaTag(
    'property',
    'og:title',
    pageTitle
  );

  updateMetaTag(
    'property',
    'og:description',
    pageDescription
  );

  updateMetaTag(
    'property',
    'og:url',
    pageUrl
  );

  updateMetaTag(
    'property',
    'og:image',
    socialImage
  );


  /* Social Sharing */
  updateMetaTag(
    'name',
    'twitter:title',
    pageTitle
  );

  updateMetaTag(
    'name',
    'twitter:description',
    pageDescription
  );

  updateMetaTag(
    'name',
    'twitter:image',
    socialImage
  );
});


/* ========================================
   Update Meta Tag
======================================== */

function updateMetaTag(
  attribute,
  key,
  content
) {
  let metaTag =
    document.querySelector(
      `meta[${attribute}="${key}"]`
    );

  if (!metaTag) {
    metaTag =
      document.createElement(
        'meta'
      );

    metaTag.setAttribute(
      attribute,
      key
    );

    document.head.appendChild(
      metaTag
    );
  }

  metaTag.setAttribute(
    'content',
    content
  );
}


/* ========================================
   Update Canonical Link
======================================== */

function updateCanonicalLink(url) {
  let canonicalLink =
    document.querySelector(
      'link[rel="canonical"]'
    );

  if (!canonicalLink) {
    canonicalLink =
      document.createElement(
        'link'
      );

    canonicalLink.setAttribute(
      'rel',
      'canonical'
    );

    document.head.appendChild(
      canonicalLink
    );
  }

  canonicalLink.setAttribute(
    'href',
    url
  );
}


export default router;