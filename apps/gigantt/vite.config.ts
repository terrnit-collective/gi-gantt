import path, { resolve } from 'path'
import { peerDependencies, version } from './package.json'

import babel from '@rollup/plugin-babel'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'url'
import fs from 'fs'
import tsconfigPaths from 'vite-tsconfig-paths'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const bannerTxt = `/*! Gigantt v${version} | MIT License | github.com/TerrniTLLc/gi-gantt */`

const baseFolder = './src/components/'

const components = fs
  .readdirSync(baseFolder)
// filter only folder
  .filter((f) => fs.statSync(path.join(baseFolder, f)).isDirectory())
// filter util components
  .filter((f) => !f.includes('utils'))

const entries = {
  index: resolve(__dirname, './src/index.ts'),
  helpers: resolve(__dirname, './src/utils/helpers.ts'),
  config: resolve(__dirname, './src/utils/config.ts'),
  ...components.reduce((obj, name) => {
    obj[name] = resolve(__dirname, baseFolder + name)
    return obj
  }, {})
}

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => ({
  root: __dirname,
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
  server: {
    open: true,
    port: 3000
  },
  build: {
    emptyOutDir: false,
    sourcemap: true,
    minify: mode === 'minify',
    lib:
        mode === 'minify'
          ? // build minified version with index.ts entry
          {
            name: 'Gigantt',
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['umd', 'es'],
            fileName: (format) => format === 'umd' ? 'gigantt.js' : 'gigantt.mjs'
          }
          : // build rollup output verions for all entries
          {
            name: 'Gigantt',
            entry: entries
          },
    rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
      external: [...Object.keys(peerDependencies)],
      output:
            mode === 'minify'
              ? // Browser build minified version
              {
                banner: bannerTxt,
                exports: 'named',
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                  vue: 'Vue',
                  dayjs: 'dayjs'
                }
              }
              : [
                // ESM build
                {
                  format: 'esm',
                  dir: 'dist/esm',
                  entryFileNames: '[name].mjs',
                  chunkFileNames: '[name]-[hash].mjs',
                  banner: bannerTxt,
                  globals: {
                    vue: 'Vue',
                    dayjs: 'dayjs'

                  }
                },
                // SSR build
                {
                  format: 'cjs',
                  dir: 'dist/cjs',
                  exports: 'named',
                  banner: bannerTxt,
                  globals: {
                    vue: 'Vue',
                    dayjs: 'dayjs'

                  }
                }
              ],
      // rollup plugins
      plugins: [
        babel({
          babelHelpers: 'bundled'
        })
      ]
    }
  },
  plugins: [tsconfigPaths(), vue(), dts({ outDir: './dist/types' }), vueJsx()],
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul'
    }
  }
}))