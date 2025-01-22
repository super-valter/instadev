//import vuePlugin from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.ts'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),
    //vuePlugin()
  ],
});
