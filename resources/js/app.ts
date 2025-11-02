import { createApp } from "vue";
import App from "./App.vue";
import "primeicons/primeicons.css";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import router from "./router";
import { primeSettings } from "./configs/MyPreset";
import ConfirmationService from "primevue/confirmationservice";
import '../css/app.css';

createApp(App)
   .use(createPinia())
   .use(router)
   .use(PrimeVue, primeSettings)
   .use(ConfirmationService)
   .mount("#app");
