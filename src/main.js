import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createMetaManager } from 'vue-meta';  // Import vue-meta manager

import App from './App.vue';
import router from './router';

// Bootstrap5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Create the app
const app = createApp(App);

// Use Pinia store and router
app.use(createPinia());
app.use(router);
app.use(createMetaManager());  // Initialize vue-meta manager

await router.isReady()

// Mount the app
app.mount('#app');