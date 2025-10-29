import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
// import Nara from "@primeuix/themes/nara";
export const MyPreset = definePreset(Aura, {
   semantic: {
      primary: {
         50: "{blue.50}",
         100: "{blue.100}",
         200: "{blue.200}",
         300: "{blue.300}",
         400: "{blue.400}",
         500: "{blue.500}",
         600: "{blue.600}",
         700: "{blue.700}",
         800: "{blue.800}",
         900: "{blue.900}",
         950: "{blue.950}",
      },
   },
});

export const primeSettings = {
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
};
