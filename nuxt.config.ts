// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: [
    '~/assets/styles/scss/main.scss',
    'keen-slider/keen-slider.min.css',
  ],
  modules: ['nuxt-keen-slider', 'nuxt-swiper', '@cssninja/nuxt-toaster', '@pinia/nuxt'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      backendUrl: process.env.BACKEND_URL,
      storageUrl: process.env.STORAGE_URL,
    },
  },
})
