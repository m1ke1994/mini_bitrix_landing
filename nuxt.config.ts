export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL || "",
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "ru" },
      title: "TrackNode",
      meta: [
        {
          name: "description",
          content: "Премиальная аналитика сайта и контроль заявок",
        },
      ],
    },
  },
});