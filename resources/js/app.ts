import { createApp } from "vue";
import App from "./App.vue";
import "primeicons/primeicons.css";
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
      locale: {
         firstDayOfWeek: 1, // <-- dushanbadan boshlansin
         dayNames: [
            "Yakshanba",
            "Dushanba",
            "Seshanba",
            "Chorshanba",
            "Payshanba",
            "Juma",
            "Shanba",
         ],
         dayNamesShort: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
         dayNamesMin: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
         monthNames: [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "Iyun",
            "Iyul",
            "Avgust",
            "Sentyabr",
            "Oktyabr",
            "Noyabr",
            "Dekabr",
         ],
         monthNamesShort: [
            "Yan",
            "Fev",
            "Mar",
            "Apr",
            "May",
            "Iyn",
            "Iyl",
            "Avg",
            "Sen",
            "Okt",
            "Noy",
            "Dek",
         ],
      },
   })
   .mount("#app");
