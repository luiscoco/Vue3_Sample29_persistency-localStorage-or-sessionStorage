import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedPersist from "pinia-plugin-persistedstate";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

// Use the persisted state plugin
pinia.use(piniaPluginPersistedPersist);

app.use(pinia);
app.mount("#app");
