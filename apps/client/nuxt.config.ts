// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },
  modules: ['@nuxt/ui'],
  compatibilityDate: '2024-07-31',
})
