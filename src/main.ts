import { createApp, toRaw } from 'vue';
import App from './App.vue';
import { createPinia, PiniaPluginContext } from 'pinia';
// vue i18n
import I18n from '@/languages/index';
// iconfont css
import '@/assets/iconfont/iconfont.scss';
// font css
import '@/assets/fonts/font.scss';

// custom directives
import directives from '@/directives/index';

// 引入router
import { router } from './router';
import '@/router/navigation';

// 引入ElementPlus
import ElementPlus from 'element-plus';
// element css
import 'element-plus/dist/index.css';
// element dark(内置暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css';
// custom element dark(自定义暗黑模式)
import '@/styles/theme/element-dark.scss';
// custom element css
import '@/styles/element.scss';
// reset style sheet
import '@/styles/reset.scss';
// CSS common style sheet
import '@/styles/common.scss';

import svgIcon from './icons/index.vue';

// 数据存储本地
const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// 获取本地数据
const getStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : {};
};

const piniaPlugin = (context: PiniaPluginContext) => {
  const { store } = context;
  // $subscribe state值发生变化时会执行传入的回调
  store.$subscribe(() => {
    // 每次修改值的时候更新localStorage数据
    setStorage(`pinia-${store.$id}`, toRaw(store.$state));
  });
  // 每次构建项目的时候从本地存储取值
  const data = getStorage(`pinia-${store.$id}`);
  // 并将取的值赋给state
  return {
    ...data,
  };
};

// 创建 Pinia 实例
const pinia = createPinia();
pinia.use(piniaPlugin);

const app = createApp(App);

// 挂载到 Vue 实例
app.use(router);
app.use(directives);
app.use(pinia);
app.use(I18n);
app.use(ElementPlus);
app.component('SvgIcon', svgIcon);
app.mount('#app');
