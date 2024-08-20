// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: process.env.NODE_ENV === "development" },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },

  compatibilityDate: "2024-08-16",
});
