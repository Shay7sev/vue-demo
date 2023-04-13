import { App } from 'vue';
import auth from './modules/auth';
import copy from './modules/copy';
import draggable from './modules/draggable';
import debounce from './modules/debounce';
import throttle from './modules/throttle';
import longpress from './modules/longpress';

const directivesList: any = {
  // Custom directives
  auth,
  copy,
  draggable,
  debounce,
  throttle,
  longpress,
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });
  },
};

export default directives;