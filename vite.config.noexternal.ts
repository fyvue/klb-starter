import config from './vite.config'

export default Object.assign(config, {
  ssr: {
    noExternal: /./,
  },
  legacy: {
    buildSsrCjsExternalHeuristics: true,
  },
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
})
