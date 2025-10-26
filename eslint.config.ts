import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
   {
      ignores: ["dist/**", "node_modules/**"], // ⬅️ ignore shu yerda
   },
   
   {
      files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
      plugins: { js },
      extends: ["js/recommended"],
      languageOptions: {
         globals: globals.browser,
         parser: tseslint.parser,
      },
      rules: {
         "vue/html-indent": ["error", 3], // ⬅️ shu yerda yoziladi
         "@typescript-eslint/no-explicit-any": "off",
      },
   },
   tseslint.configs.recommended,
   pluginVue.configs["flat/strongly-recommended"],
   {
      files: ["**/*.vue"],
      languageOptions: {
         parserOptions: { parser: tseslint.parser },
      },
   },
]);