import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';

import './assets/styles/button.css';
import './assets/styles/carousel.css';
import './assets/styles/icon-links.css';
import './assets/styles/modal.css';
import './assets/styles/project-card.css';


/* ========================================
   Vue Application
======================================== */

const app = createApp(App);

app.use(router);

app.mount('#app');