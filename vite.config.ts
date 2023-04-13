import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const VITE_ENV: string = loadEnv(mode, process.cwd()).VITE_ENV;

  return {
    plugins: [
      vue(),
      vueJsx(),
      vueSetupExtend(),
      // * 使用 svg 图标
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        // 配置别名指向src目录
        '@': resolve(__dirname, './src'),
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
      port: 3301,
      https: VITE_ENV === 'production' ? true : false,
    },
  };
});
