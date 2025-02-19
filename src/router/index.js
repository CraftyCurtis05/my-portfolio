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
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: SiteMapView
    }
  ]
});

export default router;