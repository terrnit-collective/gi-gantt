import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      composables: fileURLToPath(new URL('./src/composables', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      provider: fileURLToPath(new URL('./src/provider', import.meta.url)),
      types: fileURLToPath(new URL('./src/types', import.meta.url)),
      utils: fileURLToPath(new URL('./src/utils', import.meta.url))
    }
  },
  build: {
    lib:
      process.env.NODE_ENV === 'production'
        ? {
          entry: fileURLToPath(
            new URL('../module/index.ts', import.meta.url)
          ),
          name: 'vue-gigantt',
          fileName: (format) => `vue-gigantt.${format}.js`
        }
        : undefined,
    outDir: process.env.NODE_ENV === 'production' ? 'lib' : 'dist',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into the library
      external: ['vue', 'dayjs'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          dayjs: 'dayjs'
        },
        exports: 'named'
      }
    }
  }
})
