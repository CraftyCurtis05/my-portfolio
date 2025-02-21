import { createRouter, createWebHistory } from 'vue-router';

// Import components
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import EducationView from '../views/EducationView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';
import SiteMapView from '../views/SiteMapView.vue';

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home - My Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'Welcome to my portfolio website.'
          },
          {
            property: 'og:title',
            content: 'Home - My Portfolio'
          },
          {
            property: 'og:description',
            content: 'Welcome to my portfolio website.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About - My Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'Learn more about me and my background.'
          },
          {
            property: 'og:title',
            content: 'About - My Portfolio'
          },
          {
            property: 'og:description',
            content: 'Learn more about me and my background.'
          }
        ]
      }
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView,
      meta: {
        title: 'Education - My Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'My educational background and qualifications.'
          }
        ]
      }
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
      meta: {
        title: 'Experience - My Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'A summary of my professional experience.'
          }
        ]
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Projects - My Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'View my projects and work samples.'
          }
        ]
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact - My Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'Get in touch with me for potential opportunities.'
          }
        ]
      }
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: SiteMapView,
      meta: {
        title: 'Site Map - My Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'A map of all the pages in my portfolio website.'
          }
        ]
      }
    }
  ]
});

export default router;