import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router.js";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";
createApp(App).use(router).mount("#app");
