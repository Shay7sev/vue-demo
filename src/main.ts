import { createApp } from 'vue';
import App from './App.vue';
// pinia store
import pinia from '@/store/index';
// vue i18n
import I18n from '@/languages/index';
// iconfont css
import '@/assets/iconfont/iconfont.scss';
// font css
import '@/assets/fonts/font.scss';

// custom directives
import directives from '@/directives/index';

// 引入router
import router from '@/router/index';

// 引入ElementPlus
import ElementPlus from 'element-plus';
// element icons
import * as Icons from '@element-plus/icons-vue';
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
// svg icons
import 'virtual:svg-icons-register';
// errorHandler
import errorHandler from '@/utils/errorHandler';

const app = createApp(App);

app.config.errorHandler = errorHandler;

// 注册element Icons组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

console.log(router);

// 挂载到 Vue 实例
app.use(router);
app.use(directives);
app.use(pinia);
app.use(I18n);
app.use(ElementPlus);
app.mount('#app');
