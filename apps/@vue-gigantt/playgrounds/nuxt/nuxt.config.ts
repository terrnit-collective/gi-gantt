export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/main.css'],
  imports: {
    dirs: ['provider', 'types']
  },
  modules: [
    'dayjs-nuxt'
  ],
  experimental: {
    renderJsonPayloads: false
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
