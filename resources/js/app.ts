import { createApp } from "vue";
import App from "./App.vue";
import 'primeicons/primeicons.css'
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import MyPreset from "./configs/MyPreset";
import router from "./router";
createApp(App)
   .use(createPinia())
   .use(router)
   .use(PrimeVue, {
      theme: {
         preset: MyPreset,
         options: {
            darkModeSelector: ".dark",
         },
      },
   })
   .mount("#app");
