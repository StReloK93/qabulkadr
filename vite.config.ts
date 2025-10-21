import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

export default defineConfig({
   plugins: [
      laravel({
         input: ["resources/js/app.ts"],
         refresh: true,
      }),
      tailwindcss(),
      vue(),
      Components({
         resolvers: [PrimeVueResolver()],
      }),
   ],
});
