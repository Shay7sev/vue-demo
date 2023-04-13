import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createSvg } from './src/icons/index';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const VITE_ENV: string = loadEnv(mode, process.cwd()).VITE_ENV;
  return {
    plugins: [vue(), createSvg('./src/icons/svg/'), vueJsx(), vueSetupExtend()],
    resolve: {
      alias: {
        // 配置别名指向src目录
        '@': resolve(__dirname, 'src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      // 使用别名的文件后缀
      extensions: ['.js', '.json', '.ts'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/var.scss";',
        },
      },
    },
    server: {
      port: 9104,
      https: VITE_ENV === 'production' ? true : false,
    },
  };
});
