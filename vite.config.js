import { fileURLToPath, URL } from "url";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  return {
    plugins: [
      vue({
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false,
          },
        },
      }),
    ],
    base: '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        vue: 'vue/dist/vue.esm-bundler.js',
      }
    },
    server: {
      hmr: {
        protocol: 'ws',
      },
    },
  }
});
