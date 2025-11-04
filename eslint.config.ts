// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default tseslint.config(
   // Ignore patterns
   {
      ignores: ["dist/**", "node_modules/**"],
   },
   // Tavsiya etilgan configlar
   js.configs.recommended,
   ...tseslint.configs.recommended,
   ...pluginVue.configs["flat/recommended"],

   // JavaScript global config
   {
      files: ["**/*.{ts,vue}"],
      languageOptions: {
         globals: globals.browser,
         parserOptions: {
            parser: tseslint.parser,
            sourceType: "module",
         },
      },
      rules: {
         "vue/html-indent": ["error", 3],
         "@typescript-eslint/no-explicit-any": "off",
         "@typescript-eslint/no-unused-vars": "error",
      },
   },
   {
      files: ["**/*.vue"],
      languageOptions: {
         parser: pluginVue.processors["vue"],
         parserOptions: {
            parser: tseslint.parser,
         },
      },
   }
);
