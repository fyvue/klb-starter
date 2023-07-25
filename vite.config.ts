import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace'

const replaceOptions = {
  __DATE__: new Date().toISOString(),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ssr: true,
        compilerOptions: {},
        transformAssetUrls: {
          img: ['src'],
          Image: ['src'],
          Video: ['src'],
        },
      },
    }),
    replace(replaceOptions),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    sourcemap: 'hidden',
  },
})
