// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['vuetify/lib/styles/main.sass', '~/assets/tailwind.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  }, 
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head:{
      title:'Forecast Project',
    },
  },
})
