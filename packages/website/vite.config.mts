import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const __DEV__ = mode === 'development'
  //
  //

  return {

    plugins: [svelte({
      preprocess: autoPreprocess(),
    })],

    build: {
      target: 'esnext',
      minify: true,
      modulePreload: { polyfill: false },
    },
  };
});

