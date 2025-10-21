import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import MyPreset from "./configs/MyPreset";

createApp(App)
   .use(createPinia())
   .use(PrimeVue, {
      theme: {
         preset: MyPreset,
         options: {
            darkModeSelector: "dark",
         },
      },
   })
   .mount("#app");
