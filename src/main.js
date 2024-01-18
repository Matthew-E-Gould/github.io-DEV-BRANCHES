/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

const app = createApp(App);

import HelloWorld from '@/components/HelloWorld.vue';
app.component('HelloWorld', HelloWorld);
import GenericItemCard from '@/components/GenericItemCard.vue';
app.component('GenericItemCard', GenericItemCard);

registerPlugins(app);

app.mount('#app');
