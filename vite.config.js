import { fileURLToPath, URL } from "url";

import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
// import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {

  const env = loadEnv(mode, process.cwd(), '');

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
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        vue: 'vue/dist/vue.esm-bundler.js',
      }
    },
    build: {
      lib: {
        name: 'demo_test',
        entry: resolve(__dirname, '/src/main.js'),
        // fileName: (format) => `demo_test.${format}.js`,
      },
      emptyOutDir: true,
      rollupOptions: {
        external: ['vue'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    server: {
      hmr: {
        protocol: 'ws',
      },
    },
  }

});
