import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import MyPreset from "./configs/MyPreset";
import router from "./router";
const pinia = createPinia();
createApp(App)
   .use(pinia)
   .use(router)
   .use(PrimeVue, {
      theme: {
         preset: MyPreset,
         options: {
            darkModeSelector: "dark",
         },
      },
   })
   .mount("#app");
