import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const __DEV__ = mode === 'development'
  //
  //

  return {
    css: {
      devSourcemap: false,
    },

    plugins: [svelte({
      preprocess: autoPreprocess(),
    })],

    build: {
      target: 'esnext',
      outDir: '../api-local/dist/client',
      minify: true,
      modulePreload: { polyfill: false },
    },
  };
});

