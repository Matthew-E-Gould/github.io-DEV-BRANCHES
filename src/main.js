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

// for dev, keep at bottom
// make it easier to determine which tab is the local site
if (location.host == "localhost:3000") document.title = "LOCAL - " + document.title