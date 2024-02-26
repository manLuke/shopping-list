// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-primevue", "@nuxtjs/i18n", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@vite-pwa/nuxt"],

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },

  css: ["primevue/resources/themes/aura-light-green/theme.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },

  i18n: {
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts",
  },

  primevue: {
    composables: {
      include: ["useToast"],
    },
    components: {
      include: ["Toast", "Dialog"],
    },
    directives: {
      include: [],
    },
  },
});
